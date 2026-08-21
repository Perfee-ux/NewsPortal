import Link from "next/link";
import { NewsCards } from "@/data/cards/newscards";

interface NewsCardProps {
    cards: NewsCards[];
}

export default function CardNews({ cards }: NewsCardProps) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {cards.map((card) => (
                <Link
                    key={card.id}
                    href={card.href || "#"}
                    className="group overflow-hidden rounded border border-gray-200 bg-white"
                >
                    <img
                        src={card.image}
                        alt={card.heading}
                        className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <h2 className="p-4 text-lg font-semibold leading-snug text-gray-900 group-hover:text-blue-700">
                        {card.heading}
                    </h2>
                </Link>
            ))}
        </div>
    );
}