"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/nav/Navdata";
import { pageConfig, defaultConfig } from "@/data/nav/PageConfig";
import MegaMenu from "./MegaMenu";
import { CalendarDays, Menu, X } from "lucide-react";
import AdBanner from "../shared/AdBanner";
import { AsianPaintAd } from "@/data/shared/adsbanner";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const config = pageConfig[pathname] ?? defaultConfig;
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  const hoveredItem = navItems.find((item) => item.label === hoveredLabel);

  return (
    <div onMouseLeave={() => setHoveredLabel(null)}>
      {isHome ? (
        <>
          <div className="block sm:hidden w-full px-4 pt-2">
            <div className="flex h-auto min-w-0 w-full items-center justify-center overflow-hidden">
              <AdBanner ad={AsianPaintAd} />
            </div>
          </div>

          <div className=" w-full  shadow-sm sm:shadow-none sm:bg-transparent">
            <div className="mx-auto flex flex-col sm:flex-row h-auto sm:h-[168px] w-[calc(100%-32px)] max-w-full px-0 sm:px-30 items-center sm:justify-between gap-4 sm:gap-8 py-3 sm:py-0 relative">
              <div className="shrink-0 flex flex-col items-center justify-center relative w-full sm:w-auto">
                <Image
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/main-logo-new.svg"
                  alt="Logo"
                  width={280}
                  height={62}
                  className="h-auto w-[180px] sm:w-[280px]"
                />
                <p className="mt-1 text-[15px] text-gray-500 text-center">
                  ४ भदौ २०८३, बिहीबार
                </p>
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="absolute right-2 top-2 rounded-md p-2 shadow-md sm:hidden bg-white z-50"
                  aria-label="Open menu"
                >
                  <Menu size={24} className="text-gray-800" />
                </button>
              </div>
              <div className="hidden sm:flex h-auto sm:h-auto min-w-0 w-full sm:max-w-[700px] flex-1 items-center justify-center overflow-hidden">
                <AdBanner ad={AsianPaintAd} />
              </div>
            </div>
          </div>
        </>
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

      <nav className={`${config.bgColor} relative shadow-md hidden lg:block`}>
        <div className="mx-auto flex w-[calc(100%-32px)] max-w-[1540px] items-center justify-between gap-4 overflow-x-auto px-4 sm:px-30">
          <ul className="flex min-w-0 shrink-0 items-center gap-4 sm:gap-6 py-2">
            {navItems.map((item) => (
              <li
                key={item.label}
                onMouseEnter={() => setHoveredLabel(item.label)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="whitespace-nowrap text-sm sm:text-[17px] font-bold text-white hover:text-blue-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="cursor-default whitespace-nowrap text-sm sm:text-[17px] font-bold text-white">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="hidden shrink-0 items-center gap-12 lg:flex">
            <button className="flex h-9 items-center gap-1 rounded-md bg-[#ff686b] px-3 text-[15px] font-semibold text-white">
              <CalendarDays size={17} /> पात्रो
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="  rounded-md p-2 shadow-md "
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-gray-800 " />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {hoveredItem?.hasMegaMenu && hoveredItem.megaMenuItems && (
          <MegaMenu items={hoveredItem.megaMenuItems} />
        )}
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="fixed right-4 top-4 rounded-md p-2 shadow-md bg-white z-[60]"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-800" />
          </button>
          <ul className="flex flex-col px-6 pt-20 pb-6">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-gray-100 py-4">
                <Link
                  href={item.href || "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-gray-800 font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
