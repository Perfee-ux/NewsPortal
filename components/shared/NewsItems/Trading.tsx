import Link from "next/link";
import { TradingListITem } from "@/data/shared/Tradinglist";


interface TRadingLinkProp {
  items?: TradingListITem[];
}

export default function NewsTradingList({ items = [] }: TRadingLinkProp) {
  return (
    <div className="flex flex-col divide-y divide-gray-200 sticky top-20 bg-white p-8 rounded-md shadow-xl">
      <h3 className="text-white bg-[#2260BF] px-4 py-2 rounded-lg max-w-[80px] hover:bg-blue-700">
        ट्रेन्डिङ
      </h3>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="py-4 font-semibold text-gray-900 hover:text-blue-700"
        >
            <div className="flex gap-4 justify-center ">
                <p className="text-4xl font-bold text-gray-400">{item.label}</p>
                <h3>{item.title}</h3>
                <img src={item.image} className="h-20 w-24 object-cover rounded-lg"/>
          
            </div>
          
        </Link>
      ))}
      
    </div>
  );
}
