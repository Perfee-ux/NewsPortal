import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { NewsLinkItem } from "@/data/shared/NewsLinkItem";

interface NewsLinkListProps {
  items: NewsLinkItem[];
}

export default function NewsLinkList({ items }: NewsLinkListProps) {
      if (items.length === 0) {
        return null;
    }
  return (
    <div className="flex flex-col divide-y divide-gray-300 sticky top-20 bg-white p-8 rounded-md shadow-xl">
      <h3 className="text-white bg-[#2260BF] px-4 py-2 rounded-lg max-w-[80px] hover:bg-[#2260BF]">
        कर्पोरेट
      </h3>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="py-4 font-semibold text-gray-900 hover:text-[#2260BF]"
        >
          {item.image && (
            <div className="relative w-full h-40 mb-3 overflow-hidden rounded-md hover:scale-105 transition-transform duration-500">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          {item.title}
        </Link>
      ))}

      <Link
        href=""
        className="flex gap-5 text-gray-900 bg-gray-200 rounded-full max-w-fit px-3 pt-1 mt-6  hover:bg-gray-400 transition-colors"
      >
        सबै
        <span>
          <ChevronRight
            width={24}
            height={24}
            className="bg-gray-300 rounded-full mb-1 "
          />
        </span>
      </Link>
    </div>
  );
}
