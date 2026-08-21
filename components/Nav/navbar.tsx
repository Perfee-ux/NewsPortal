"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/nav/Navdata";
import { pageConfig, defaultConfig } from "@/data/nav/PageConfig";
import MegaMenu from "./MegaMenu";
import {
  Activity,
  CalendarDays,
  Menu,
  SlidersHorizontal,
  TrendingUp,
  UserRound,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const config = pageConfig[pathname] ?? defaultConfig;
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  const hoveredItem = navItems.find((item) => item.label === hoveredLabel);

  return (
    <div onMouseLeave={() => setHoveredLabel(null)}>
      {isHome ? (
        <div className="mx-auto flex h-[168px] w-[calc(100%-32px)] max-w-full px-30 items-center justify-between gap-8 bg-white">
          <div className="shrink-0">
            <Image src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/main-logo-new.svg" alt="Logo" width={280} height={62} className="h-auto w-[280px]" />
            <p className="mt-1 text-[15px] text-gray-500">४ भदौ २०८३, बिहीबार</p>
          </div>
          <div className="flex h-[90px] min-w-0 max-w-[700px] flex-1 items-center justify-center overflow-hidden bg-gray-100">
            <img
            src="https://www.onlinekhabar.com/wp-content/uploads/2026/05/IMG_3683.gif" alt="Ad Banner "
            className="h-full w-full object-cover"/>
          </div>
        </div>
      ) : (
        <div
          className={`${config.bgColor} bg-cover bg-center py-6 px-6`}
          style={
            config.bannerImage
              ? { backgroundImage: `url(${config.bannerImage})` }
              : undefined
          }
        >
          <p className="text-white text-sm mt-1">४ भदौ २०८३, बिहीबार</p>
        </div>
      )}

      <nav className={`${config.bgColor} relative shadow-md`}>
        <div className="mx-auto flex w-[calc(100%-32px)] max-w-[1540px] items-center justify-between gap-4 overflow-hidden px-30">
        <ul className="flex min-w-0 shrink items-center gap-6 py-2">
          {navItems.map((item) => (
            <li key={item.label} onMouseEnter={() => setHoveredLabel(item.label)}>
              {item.href ? (
                <Link href={item.href} className="whitespace-nowrap text-[17px] font-bold text-white hover:text-blue-200">{item.label}</Link>
              ) : (
                <span className="cursor-default whitespace-nowrap text-[17px] font-bold text-white">{item.label}</span>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <button className="flex h-9 items-center gap-1 rounded-md bg-[#ff686b] px-2.5 text-[15px] font-semibold text-white"><CalendarDays size={17} /> पात्रो</button>
          <button className="flex h-9 items-center gap-1 rounded-md bg-white/10 px-2.5 text-[15px] font-semibold text-white"><SlidersHorizontal size={17} /> सेयर मार्केट</button>
          <button className="flex h-9 items-center gap-1 rounded-md bg-white/10 px-2.5 text-[15px] font-semibold text-white"><Activity size={19} /> स्वास्थ्य</button>
          <button className="h-9 rounded-md bg-white/15 px-2.5 text-sm font-bold text-white">EN</button>
          <TrendingUp size={18} className="text-white" />
          <UserRound size={24} className="rounded-full border border-white p-1 text-white" />
          <Menu size={24} className="text-white" />
        </div>
        </div>

        {hoveredItem?.hasMegaMenu && hoveredItem.megaMenuItems && (
          <MegaMenu items={hoveredItem.megaMenuItems} />
        )}
      </nav>
    </div>
  );
}