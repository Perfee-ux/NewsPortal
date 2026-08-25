"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { hoveredCard } from "@/data/cards/hovercard";
import { HoverCardItem } from "@/components/cards/hovercard";

interface HoverCardSliderProps {
    cards: hoveredCard[];
    title?: string;
    size?: "default" | "large";
}

export default function HoverCardSlider({
    cards,
    title,
    size = "default",
}: HoverCardSliderProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        loop: true,
    });
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const isLarge = size === "large";

    return (
       <section className="relative px-8 sm:px-12">
            {title && <h2 className="mb-6 text-3xl font-bold text-blue-700">{title}</h2>}
            <button
                type="button"
                aria-label="Previous cards"
                onClick={scrollPrev}
                className="absolute left-0 sm:left-1 top-1/2 z-10 flex h-8 w-8 sm:h-10 sm:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-blue-300 text-gray-900 shadow-lg hover:bg-gray-300"            >
                <ChevronLeft size={20} />
            </button>
            <button
                type="button"
                aria-label="Next cards"
                onClick={scrollNext}
                className="absolute right-0 sm:right-1 top-1/2 z-10 flex h-8 w-8 sm:h-10 sm:w-10 -translate-y-1/2 items-center justify-center rounded-full text-gray-900 shadow-lg hover:bg-gray-300 bg-blue-300"
            >
                <ChevronRight size={20} />
            </button>
            <div ref={emblaRef} className="overflow-hidden">
                <div className="flex gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={
                                isLarge
                                    ? "min-w-0 flex-[0_0_100%]"
                                    : "min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc((100%-24px)/2)] lg:flex-[0_0_calc((100%-72px)/4)]"
                            }
                        >
                            <HoverCardItem card={card} size={size} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}