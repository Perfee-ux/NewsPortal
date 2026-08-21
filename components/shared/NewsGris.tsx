import { Fragment } from "react";
import { NewsItem } from "@/data/types";
import { BannerAd } from "@/data/shared/adsbanner";
import NewsCard from "./NewsCard";
import AdBanner from "./AdBanner";

interface NewsGridProps {
  items: NewsItem[];
  columns?: 2 | 3;
  bannerAd?: BannerAd;
  bannerAfter?: number;
}

export default function NewsGrid({
  items,
  columns = 2,
  bannerAd,
  bannerAfter = 6,
}: NewsGridProps) {
  return (
    <div
      className={`grid gap-x-8 gap-y-6 ${
        columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-3"
      }`}
    >
      {items.map((item, index) => (
        <Fragment key={item.id}>
          <NewsCard item={item} />
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