"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState(""); // Initialize with an empty string
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (!input) return setSearchResults(undefined);

      const response = await fetch(`/api/search?q=${input}`);
      // Process your response here
    };
    fetchData();
  }, [input]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      {/* Render your search results here */}
    </main>
  );
}
