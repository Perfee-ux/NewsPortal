import { hoveredCard } from "@/data/cards/hovercard";
import { HoverCardItem } from "../cards/hovercard";

interface HoverCardGridProps {
    cards: hoveredCard[];
    columns?: 1 | 2 | 3 | 4;
    size?: "default" | "compact" | "large";
}

export default function HoverCardGrid({ cards, columns = 2, size = "compact" }: HoverCardGridProps) {
    return (
        <div
            className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${
                columns === 4 ? "lg:grid-cols-4" : columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
            }`}
        >
            {cards.map((card) => (
                <HoverCardItem key={card.id} card={card} size={size} />
            ))}
        </div>
    );
}