"use client";

import { useState } from "react";
import { StoryCollection } from "@/data/types";
import StoryProgressBar from "./StoryProgressbar";
import StorySlideContent from "./StorySlideContent";

interface StoryViewerProps {
  collections: StoryCollection[];
  activeCollectionId: string;
  onClose: () => void;
  onChangeCollection: (id: string) => void;
}

export default function StoryViewer({
  collections,
  activeCollectionId,
  onClose,
  onChangeCollection,
}: StoryViewerProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  const collectionIndex = collections.findIndex((c) => c.id === activeCollectionId);
  const collection = collections[collectionIndex];
  const slide = collection.slides[slideIndex];

  const handleNext = () => {
    const isLastSlide = slideIndex === collection.slides.length - 1;

    if (!isLastSlide) {
      setSlideIndex((i) => i + 1);
      return;
    }

    const isLastCollection = collectionIndex === collections.length - 1;
    if (!isLastCollection) {
      onChangeCollection(collections[collectionIndex + 1].id);
      setSlideIndex(0);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    const isFirstSlide = slideIndex === 0;

    if (!isFirstSlide) {
      setSlideIndex((i) => i - 1);
      return;
    }

    const isFirstCollection = collectionIndex === 0;
    if (!isFirstCollection) {
      const prevCollection = collections[collectionIndex - 1];
      onChangeCollection(prevCollection.id);
      setSlideIndex(prevCollection.slides.length - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <button onClick={onClose} className="absolute right-6 top-6 text-2xl text-white">
        ✕
      </button>
      <button onClick={handlePrev} className="absolute left-6 text-3xl text-white">
        ‹
      </button>

      <div>
        <StoryProgressBar total={collection.slides.length} current={slideIndex} />
        <StorySlideContent slide={slide} />
      </div>

      <button onClick={handleNext} className="absolute right-6 text-3xl text-white">
        ›
      </button>
    </div>
  );
}