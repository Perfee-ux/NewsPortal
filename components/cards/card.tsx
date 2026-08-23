import Link from "next/link";
import { NewsCards } from "@/data/cards/newscards";

interface CardProps {
  card: NewsCards;
  theme?: "light" | "dark";
}

export default function Card({ card, theme = "light" }: CardProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href={card.href || "#"}
      className={`group overflow-hidden rounded ${
        isDark ? "" : "border border-gray-200 bg-white"
      }`}
    >
      <img
        src={card.image}
        alt={card.heading}
        className="h-52 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <h2
        className={`p-4 text-lg font-semibold leading-snug ${
          isDark
            ? "text-white group-hover:text-gray-300"
            : "text-gray-900 group-hover:text-blue-700"
        }`}
      >
        {card.heading}
      </h2>
    </Link>
  );
}