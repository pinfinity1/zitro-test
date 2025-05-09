"use client";

import { useState } from "react";

type ColorOption = {
  id: string;
  name: string;
  color: string;
};

const colorOptions: ColorOption[] = [
  { id: "purple", name: "بنفش", color: "#7950f2" },
  { id: "black", name: "مشکی", color: "#343a40" },
  { id: "white", name: "سفید", color: "#ffffff" },
  { id: "green", name: "سبز", color: "#82afb2" },
  { id: "pink", name: "صورتی", color: "#dc80c0" },
];

export default function CheckboxGroup() {
  const [selectedColor, setSelectedColor] = useState<string | null>("purple");

  const handleChange = (id: string) => {
    setSelectedColor(id === selectedColor ? null : id);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-6">
      {colorOptions.map((color) => {
        const isSelected = selectedColor === color.id;
        return (
          <label
            key={color.id}
            className={`flex w-[88px] md:w-[104px] items-center gap-2 p-1 md:p-2 rounded-xl border border-solid cursor-pointer ${
              isSelected
                ? "bg-[#fff4e6] border-[#f76707]"
                : "border-[#dee2e61a]"
            }`}
          >
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => handleChange(color.id)}
              className="hidden"
            />
            <div
              className={`relative w-6 h-6 rounded-full flex items-center justify-center ${
                color.id === "white" ? "border border-[#dee2e6]" : ""
              }`}
              style={{ backgroundColor: color.color }}
            >
              {isSelected && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <span
              className={`w-fit font-medium text-xs leading-4 whitespace-nowrap ${
                isSelected ? "text-[#f76707]" : "text-[#343a40]"
              }`}
            >
              {color.name}
            </span>
          </label>
        );
      })}
    </div>
  );
}
