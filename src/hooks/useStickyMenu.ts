import { useEffect, useRef, useState } from "react";

type MenuState = "visible" | "hidden";

export default function useStickyMenu() {
  const [menuState, setMenuState] = useState<MenuState>("visible");
  const lastScrollY = useRef(0);
  const animationFrame = useRef<number | null>(null);
  const stableState = useRef<MenuState>("visible");

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }

      animationFrame.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY.current ? "down" : "up";
        const scrollDistance = Math.abs(currentScrollY - lastScrollY.current);

        if (currentScrollY <= 10) {
          stableState.current = "visible";
        } 
        else if (scrollDirection === "down"  && scrollDistance > 5) {
          stableState.current = "hidden";
        }
        else if (scrollDirection === "up" && scrollDistance > 10) {
          stableState.current = "visible";
        }

        if (stableState.current !== menuState) {
          setMenuState(stableState.current);
        }

        lastScrollY.current = currentScrollY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [menuState]);

  return menuState;
}