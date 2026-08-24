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
    <Link href={item.href} className="flex gap-8 hover:opacity-80">
      <div
        className={`relative shrink-0 overflow-hidden rounded ${
          size === "small" ? "h-20 w-24" : "h-28 w-34"
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
        <h3 className="text-base font-semibold leading-snug text-gray-900">
          {item.title}
        </h3>
        {item.timeAgo && (
          <span className="mt-2 flex items-center gap-1 text-xs text-gray-500">
            🕐 {item.timeAgo}
          </span>
        )}
      </div>
    </Link>
  );
}