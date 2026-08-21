"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { pageConfig, defaultConfig } from "@/data/nav/PageConfig";

export default function SubNav() {
  const pathname = usePathname();
  const config = pageConfig[pathname] ?? defaultConfig;

  return (
    <div className="border-b border-gray-200 bg-white px-30">
      <div className="mx-auto flex h-[64px] w-[calc(100%-32px)] max-w-full items-center justify-between gap-6 overflow-hidden">
      <ul className="flex min-w-0 gap-8 overflow-x-auto">
        {config.tags.map((tag) => (
          <li key={tag.href} className="flex items-center gap-2 whitespace-nowrap ">
            {tag.imageUrl && (
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-gray-200">
                <Image src={tag.imageUrl} alt={tag.label} fill className="object-cover" />
              </div>
            )}
            <Link href={tag.href} className="whitespace-nowrap text-[15px] font-semibold text-gray-700">{tag.label}</Link>
          </li>
        ))}
      </ul>

      <div className="relative shrink-0">
        <input
          type="text"
          placeholder="Search Keywords"
          className="h-11 w-[300px] rounded-full border-0 bg-[#eef3f9] pl-4 pr-11 text-[15px] text-gray-700 outline-none placeholder:text-gray-500"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600" size={21} />
      </div>
      </div>
    </div>
  );
}