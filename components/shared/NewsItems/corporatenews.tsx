import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface NewsLinkItem {
  id: string;
  title: string;
  href: string;
}

export const NewsLink: NewsLinkItem[] = [
  {
    id: "n1",
    title: "एक्स्ट्रिम पब्जी मोबाइल राष्ट्रिय प्रतियोगिता हुने",
    href: "/news/n1",
  },
  {
    id: "n2",
    title:
      "दिपल निभो क्यू ०५ आगामी साता नेपालमा, ‘अ क्लास अबभ’ अनुभव दिने दाबी",
    href: "/news/n2",
  },
  {
    id: "n3",
    title: "सिद्धार्थ बैंकमा कर्पोरेट खाता अनलाइनमार्फत खोल्न सकिने",
    href: "/news/n3",
  },
  {
    id: "n4",
    title:
      "हरित उद्यमको वित्तीय पहुँच विस्तार गर्न कुमारी बैंक र हेल्भेटास नेपालबीच सहकार्य",
    href: "/news/n4",
  },
  {
    id: "n5",
    title:
      "बर्जर पेन्ट्सको ‘रङ्ग बहार’ अभियान : मोटरसाइकल, स्कुटर सहित ३६२ उपहार जित्ने अवसर",
    href: "/news/n5",
  },
  {
    id: "n6",
    title: "गरिमा विकास बैंकको केन्द्रीय कार्यालय बालुवाटारमा स्थानान्तरण",
    href: "/news/n6",
  },
  {
    id: "n7",
    title: "एनसेलको अन्तर्राष्ट्रिय आउटगोइङ कलमा ६० सेकेन्ड पल्स दर लागु",
    href: "/news/n7",
  },
];

interface NewsLinkListProps {
  items?: NewsLinkItem[];
}

export default function NewsLinkList({ items = NewsLink }: NewsLinkListProps) {
  return (
    <div className="flex flex-col divide-y divide-gray-300 sticky top-20 bg-white p-8 rounded-md shadow-xl">
      <h3 className="text-white bg-blue-600 px-4 py-2 rounded-lg max-w-[80px] hover:bg-blue-700">
        कर्पोरेट
      </h3>
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="py-4 font-semibold text-gray-900 hover:text-blue-700"
        >
          {item.title}
        </Link>
      ))}
      
        <Link href="" className="flex gap-5 text-gray-900 bg-gray-200 rounded-full max-w-fit px-3 pt-1 mt-6  hover:bg-gray-400 transition-colors">
          सबै
          <span>
            <ChevronRight width={24} height={24} className="bg-gray-300 rounded-full mb-1 " />
          </span>
        </Link>
      
    </div>
  );
}
