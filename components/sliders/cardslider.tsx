"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsCards } from "@/data/cards/newscards";
import Card from "../cards/card";

interface CardSliderProps {
  cards: NewsCards[];
  title?: string;
}

export default function CardSlider({ cards, title = "फिचर" }: CardSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true, loop:true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative bg-[#0F1420] px-30 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <button
          onClick={scrollNext}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 hover:bg-gray-200"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-18 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:bg-gray-200"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-18 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:bg-gray-200"
      >
        <ChevronRight size={20} />
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 ">
          {cards.map((card) => (
            <div key={card.id} className="w-72 shrink-0">
              <Card card={card} theme="dark" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}