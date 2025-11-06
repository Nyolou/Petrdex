"use client";
import { useState } from "react";
import PetrCard from "@/components/PetrCard";
import SearchBar from "@/components/SearchBar";

const fakePetrs = [
  {
    title: "Sunny the Otter",
    creator: "Mel",
    tags: ["cute", "otter"],
    img: "/placeholder.jpg",
  },
  {
    title: "Mochi Cat",
    creator: "Alex",
    tags: ["cat", "fluffy"],
    img: "/placeholder.jpg",
  },
  {
    title: "Boba Bunny",
    creator: "Jess",
    tags: ["bunny", "bubbletea"],
    img: "/placeholder.jpg",
  },
];

export default function PetrdexPage() {
  const [results, setResults] = useState(fakePetrs);

  function handleSearch(query) {
    if (!query) return setResults(fakePetrs);
    const filtered = fakePetrs.filter((p) =>
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())),
    );
    setResults(filtered);
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-4 text-center">🌟 Petrdex</h1>
      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {results.map((p) => (
          <PetrCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
