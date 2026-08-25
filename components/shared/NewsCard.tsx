import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/data/types";

export default function NewsCard({
  item,
  size = "default",
}: {
  item: NewsItem;
  size?: "default" | "small";
}) {
  return (
        <Link href={item.href} className="flex gap-3 sm:gap-8 hover:opacity-80">
      <div
        className={`relative shrink-0 overflow-hidden rounded ${
          size === "small" ? "h-16 w-20 sm:h-20 sm:w-24" : "h-20 w-24 sm:h-28 sm:w-34"
        }`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
                <h3 className="text-sm sm:text-base font-semibold leading-snug text-gray-900">
          {item.title}
        </h3>
        {item.date && (
          <span className="mt-1 sm:mt-2 flex items-center gap-1 text-xs sm:text-sm text-gray-500">
            🗓️ {item.date}
          </span>
        )}
      </div>
    </Link>
  );
}