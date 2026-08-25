import Link from "next/link";
import { TradingListITem } from "@/data/shared/Tradinglist";

interface TRadingLinkProp {
  items?: TradingListITem[];
}

export default function NewsTradingList({ items = [] }: TRadingLinkProp) {
  return (
    <div className="flex flex-col divide-y divide-gray-200 sm:sticky sm:top-20 bg-white p-4 sm:p-8 rounded-md shadow-xl">
      <h3 className="text-white bg-[#2260BF] px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg max-w-fit hover:bg-blue-700">
        ट्रेन्डिङ
      </h3>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="py-3 sm:py-4 font-semibold text-gray-900 hover:text-blue-700"
        >
          <div className="flex items-center gap-2 sm:gap-4">
            <p className="text-2xl sm:text-4xl font-bold text-gray-400 shrink-0">
              {item.label}
            </p>
            <h3 className="flex-1 text-sm sm:text-base min-w-0">
              {item.title}
            </h3>
            <img
              src={item.image}
              className="h-14 w-16 sm:h-20 sm:w-24 object-cover rounded-lg shrink-0"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
