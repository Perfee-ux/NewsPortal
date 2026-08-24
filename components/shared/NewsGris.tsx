import { Fragment } from "react";
import { NewsItem } from "@/data/types";
import { BannerAd } from "@/data/shared/adsbanner";
import NewsCard from "./NewsCard";
import AdBanner from "./AdBanner";

interface NewsGridProps {
  items: NewsItem[];
  columns?: 1 | 2 | 3;
  bannerAd?: BannerAd;
  bannerAfter?: number;
  size?: "default" | "small";
}

export default function NewsGrid({
  items,
  columns = 2,
  bannerAd,
  bannerAfter = 6,
  size = "default"
}: NewsGridProps) {
  const imageSizes = {
  default: "h-48 w-full",
  small: "h-28 w-full",
};
  return (
    <div
      className={`grid gap-x-8 gap-y-6 ${
        columns === 1
          ? "grid-cols-1"
          : columns === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-3"
      }`}
    >
      {items.map((item, index) => (
        <Fragment key={item.id}>
          <NewsCard item={item} size={size} />
          {bannerAd && index === bannerAfter - 1 && (
            <div className="col-span-full">
              <AdBanner ad={bannerAd} />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}