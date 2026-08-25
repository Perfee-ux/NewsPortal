"use client";
import Link from "next/link";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsCards } from "@/data/cards/newscards";
import Card from "../cards/card";

interface CardSliderProps {
  cards: NewsCards[];
  title?: string;
}

export default function CardSlider({ cards, title }: CardSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#0F1420] px-4 sm:px-10 lg:px-30 py-6 sm:py-10 sm:mt-10">      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">{title}</h2>
        <Link href="" className="shrink-0 bg-[#2260BF] px-3 py-1.5 sm:px-2 sm:py-2 rounded-xl text-xs sm:text-sm">सबै हेर्नुहोस्</Link>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-1 sm:left-4 lg:left-18 top-1/2 z-10 hidden sm:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:bg-gray-200"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-1 sm:right-4 lg:right-18 top-1/2 z-10 hidden sm:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg hover:bg-gray-200"
      >
        <ChevronRight size={20} />
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 ">
          {cards.map((card) => (
            <div key={card.id} className="w-48 sm:w-60 lg:w-72 shrink-0">
              <Card card={card} theme="dark" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}