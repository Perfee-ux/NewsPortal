import { NewsCards } from "@/data/cards/newscards";
import Card from "./card";

interface CardNewsProps {
  cards: NewsCards[];
  title?: string;
  columns?: 3 | 4;
}

export default function CardNews({ cards, title, columns = 3 }: CardNewsProps) {
  const columnClass = columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <div className="mt-10">
      {title && <h2 className="mb-6 text-xl font-bold text-[#2260BF] sm:text-4xl">{title}</h2>}
      <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${columnClass}`}>
        {cards.map((card) => (
          <Card key={card.id} card={card} title={title} />
        ))}
      </div>
    </div>
  );
}