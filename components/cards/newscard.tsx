import { NewsCards } from "@/data/cards/newscards";
import Card from "./card";

interface CardNewsProps {
  cards: NewsCards[];
}

export default function CardNews({ cards }: CardNewsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}