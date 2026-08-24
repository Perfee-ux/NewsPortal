"use client";

import Image from "next/image";
import { StoryCollection } from "@/data/types";

interface StoryRowCardProps {
  collection: StoryCollection;
  onClick: () => void;
}

export default function StoryRowCard({ collection, onClick }: StoryRowCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative h-96 w-56 shrink-0 overflow-hidden rounded-lg text-left"
    >
      <Image src={collection.coverImage} alt={collection.title} fill className="object-cover" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h3 className="font-semibold text-white">{collection.title}</h3>
        <span className="mt-2 inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">
          {collection.storyCount} STORIES
        </span>
      </div>
    </button>
  );
}