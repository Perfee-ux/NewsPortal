import Link from "next/link";

export interface RankedNewsItem {
  id: string;
  count: string;
  title: string;
  href: string;
}

interface RankedNewsListProps {
  title: string;
  items: RankedNewsItem[];
}

export default function RankedNewsList({
  title,
  items,
}: RankedNewsListProps) {
  return (
    <section className="w-full max-w-full sm:max-w-[460px] bg-white px-4 py-5 sm:px-8 sm:py-7">
      <h2 className="border-b border-gray-300 pb-3 sm:pb-5 text-xl sm:text-2xl font-bold leading-tight text-[#2260BF]">
        {title}
      </h2>
      <ol className="m-0 list-none p-0">
        {items.map((item) => (
                    <li key={item.id} className="border-b border-gray-300 py-4 sm:py-7 last:border-b-0">
            <Link
              href={item.href}
              className="group flex items-start gap-3 sm:gap-5 text-gray-900"
            >
              <span
                aria-label={`${item.count} comments`}
                className="relative flex h-8 w-8 sm:h-[40px] sm:w-10 shrink-0 items-center justify-center rounded-[4px] bg-[#2260BF] text-lg sm:text-2xl font-bold text-white after:absolute after:bottom-[-14px] sm:after:bottom-[-18px] after:left-0 after:border-r-[14px] sm:after:border-r-[18px] after:border-t-[14px] sm:after:border-t-[18px] after:border-r-transparent after:border-t-[#2260BF] after:content-['']"
              >
                {item.count}
              </span>
              <span className="pt-0.5 text-sm sm:text-md font-bold leading-snug group-hover:text-[#2260BF]">
                {item.title}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}