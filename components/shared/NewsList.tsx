import { NewsItem } from "@/data/types";
import Link from "next/link";
import NewsCard from "./NewsCard";

interface NewsListProps {
  items: NewsItem[];
  button?: string;
}

export default function NewsList({
  items,
  button = "२४ घण्टाका ताजा अपडेट",
}: NewsListProps) {
  return (
    <div className="flex flex-col divide-y divide-gray-100 max-w-[400px]">
      {items.map((item) => (
        <div key={item.id} className="py-5">
          <NewsCard item={item} />
        </div>
      ))}

      <div className="pt-5">
        <Link
          href=""
          className="flex w-full items-center justify-center gap-2 rounded bg-orange-500 py-3 font-medium text-white hover:bg-orange-600"
        >
          ↻ {button}
        </Link>
      </div>
    </div>
  );
}
