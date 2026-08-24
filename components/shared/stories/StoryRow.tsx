"use client";

import { StoryCollection } from "@/data/types";
import StoryRowCard from "./StoryRowCard";

interface StoryRowProps {
  collections: StoryCollection[];
  onCardClick: (id: string) => void;
}

export default function StoryRow({ collections, onCardClick }: StoryRowProps) {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {collections.map((collection) => (
        <StoryRowCard
          key={collection.id}
          collection={collection}
          onClick={() => onCardClick(collection.id)}
        />
      ))}
    </div>
  );
}