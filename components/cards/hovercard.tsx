import Link from "next/link";
import { hoveredCard } from "@/data/cards/hovercard";

interface HoveredCardProps {
  cards: hoveredCard[];
  columns?: 3 | 4;
  size?: "default" | "compact" | "large";
}

interface HoverCardItemProps {
  card: hoveredCard;
  size?: "default" | "compact" | "large";
}

export function HoverCardItem({ card, size = "large" }: HoverCardItemProps) {
  const isLarge = size === "large";
  const isCompact = size === "compact";

  return (
    <Link
      href={card.href || "#"}
      className="group block overflow-hidden rounded bg-white"
    >
      <div
        className={`relative overflow-hidden ${
          isLarge
            ? "h-[400px] w-full sm:h-[560px] lg:h-[680px]"
            : isCompact
              ? "aspect-[3/3]"
              : "aspect-[4/6]"
        }`}
      >
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-600 group-hover:scale-105"
        />
        <h2
          className={`absolute inset-x-0 bottom-0 bg-black/65 font-semibold leading-snug text-white ${
            isLarge
              ? "p-3 text-lg sm:p-4 sm:text-xl lg:text-2xl"
              : isCompact
                ? "p-2 text-sm sm:p-3 sm:text-base"
                : "p-3 text-base sm:p-4 sm:text-lg"
          }`}
        >
          {card.title}
        </h2>
      </div>
    </Link>
  );
}

export default function HoveredCard({
  cards,
  columns = 4,
  size = "default",
}: HoveredCardProps) {
  if (size === "large") {
    return (
      <div className="w-full">
        {cards.map((card) => (
          <HoverCardItem key={card.id} card={card} size={size} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 ${
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      }`}
    >
      {cards.map((card) => (
        <HoverCardItem key={card.id} card={card} size={size} />
      ))}
    </div>
  );
}
