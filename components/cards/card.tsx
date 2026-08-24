import Link from "next/link";
import { NewsCards } from "@/data/cards/newscards";

interface CardProps {
  card: NewsCards;
  theme?: "light" | "dark";
  title?: string;
}

export default function Card({ card, theme = "light", title }: CardProps) {
  const isDark = theme === "dark";

  return (
    <Link
      href={card.href || "#"}
      className={`group overflow-hidden rounded ${
        isDark ? "" : "border border-gray-200 bg-white"
      }`}
    >
      <div className="relative h-52 overflow-hidden rounded-lg">
        <img
          src={card.image}
          alt={card.heading}
          className="relative h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {title && (
          <span className="absolute left-4 top-4 rounded bg-blue-600 px-3 py-2 text-lg font-medium text-white">
            {title}
          </span>
        )}
      </div>

      <h2
        className={`p-4 text-lg font-medium leading-snug ${
          isDark
            ? "text-white group-hover:text-gray-300"
            : "text-gray-900 group-hover:text-[#2260BF]"
        }`}
      >
        {card.heading}
      </h2>
    </Link>
  );
}