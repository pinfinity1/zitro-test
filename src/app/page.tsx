"use client";

import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Container from "@/components/Container";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [seoContent, setSeoContent] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/db/product.json");
        if (res.ok && res.status === 200) {
          const json = await res.json();
          setData(json);
          setSeoContent(json?.seoContent);
        } else {
          console.error("Failed to fetch: ", res.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="flex flex-col items-center px-4">
      <Breadcrumb />
      <Container />
      {/* {data && (
        <pre className="mt-4 text-sm bg-gray-100 p-4 rounded w-full max-w-2xl overflow-auto">
          {data}
        </pre>
      )} */}
    </main>
  );
}
