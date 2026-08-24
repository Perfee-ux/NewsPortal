"use client";

import { useState } from "react";
import { StoryCollection } from "@/data/types";
import StoryRow from "./StoryRow";
import StoryViewer from "./StoryViewer";

interface StoriesSectionProps {
  collections: StoryCollection[];
}

export default function StoriesSection({ collections }: StoriesSectionProps) {
  const [activeCollectionId, setActiveCollectionId] = useState<string | null>(null);

  const handleOpen = (id: string) => setActiveCollectionId(id);
  const handleClose = () => setActiveCollectionId(null);

  return (
    <div>
      <StoryRow collections={collections} onCardClick={handleOpen} />

      {activeCollectionId && (
        <StoryViewer
          collections={collections}
          activeCollectionId={activeCollectionId}
          onClose={handleClose}
          onChangeCollection={setActiveCollectionId}
        />
      )}
    </div>
  );
}