import Image from "next/image";
import Link from "next/link";
import { MegaMenuCard } from "@/data/types";

type MegaMenuProps = {
  items: MegaMenuCard[];
};

export default function MegaMenu({ items }: MegaMenuProps) {
  return (
    <div className="absolute left-0 top-full w-full max-w-[1000px] bg-black px-6 py-8 z-50">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {items.map((card) => (
          <Link key={card.href} href={card.href} className="block">
            <div className="relative w-full h-32">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <span className="inline-block bg-red-600 text-white text-xs px-2 py-1 mt-2">
              {card.tag}
            </span>
            <p className="text-white text-sm mt-1">{card.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}