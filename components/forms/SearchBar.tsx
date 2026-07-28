"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export function SearchBar({ placeholder = "Search courses, articles, and resources..." }: { placeholder?: string }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (query.trim()) {
      router.push(`/blog?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-sm max-w-[600px] mx-auto max-md:flex-col">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        className="flex-1 min-w-0 w-full max-md:w-full p-md border border-gray-light rounded-xs text-base focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,162,39,0.1)]"
      />
      <Button type="submit" className="max-md:w-full">
        Search
      </Button>
    </form>
  );
}
