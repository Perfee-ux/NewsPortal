"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/nav/Navdata";
import { pageConfig, defaultConfig } from "@/data/nav/PageConfig";
import MegaMenu from "./MegaMenu";
import { CalendarDays, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const config = pageConfig[pathname] ?? defaultConfig;
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  const hoveredItem = navItems.find((item) => item.label === hoveredLabel);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div onMouseLeave={() => setHoveredLabel(null)}>
      {isHome ? (
        <div className="mx-auto flex flex-col sm:flex-row h-auto sm:h-[168px] w-[calc(100%-32px)] max-w-full px-4 sm:px-30 items-center sm:justify-between gap-4 sm:gap-8 bg-white py-4 sm:py-0">
          <div className="shrink-0 ">
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
          </div>
          <div className="flex h-[60px] sm:h-[90px] min-w-0 w-full sm:max-w-[700px] flex-1 items-center justify-center overflow-hidden ">
            <img
              src="https://www.onlinekhabar.com/wp-content/uploads/2026/05/IMG_3683.gif"
              alt="Ad Banner "
              className="h-full w-full object-cover"
            />
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

      <button
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        className="lg:hidden fixed top-4 right-4 z-[60] rounded-md bg-white p-2 shadow-md"
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? (
          <X size={24} className="text-gray-800" />
        ) : (
          <Menu size={24} className="text-gray-800" />
        )}
      </button>

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
            <button className="flex h-9 items-center gap-1 rounded-md bg-[#ff686b] px-2.5 text-[15px] font-semibold text-white">
              <CalendarDays size={17} /> पात्रो
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="  rounded-md p-2 shadow-md fixed"
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
