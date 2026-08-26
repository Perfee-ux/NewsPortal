"use client";
import SubNav from "@/components/Nav/SubNavbar";
import Navbar from "@/components/Nav/navbar";
import Link from "next/link";
// import TrendingTicker from "@/components/sliders/TrendingTicker";

import FooterLinkColumn from "@/components/Nav/Footer";
import NewsList from "@/components/shared/NewsList";
import CardSlider from "@/components/sliders/cardslider";
import {
  antarastryaNews,
  businessnews,
  homepageNews,
  politicsnews,
  swasthaNews,
} from "@/data/shared/NewsItems";
import AdSidebar, { secondaryAD, sidead } from "@/components/shared/AdSidebar";
import NewsGrid from "@/components/shared/NewsGris";
import AdBanner from "@/components/shared/AdBanner";
import Samachar from "@/components/shared/samachar/samachargrid";
import NewsLinkList from "@/components/shared/NewsItems/NewsLinkList";
import NewsTradingList from "@/components/shared/NewsItems/Trading";
import NavLinkRow from "@/components/Nav/NavLinkRow";
import CardNews from "@/components/cards/cardnews";
import HoverCardSlider from "@/components/sliders/hovercardslider";
import HoveredCard, { HoverCardItem } from "@/components/cards/hovercard";
import ImgNavRow from "@/components/Nav/ImageNavRow";

import {
  mahindraev,
  mitsubishi,
  nimbBannerAd,
  Plaza,
  Presidentialschool,
  shivamcement,
  tataev,
  texasCollege,
  worldlink,
  gold,
} from "@/data/shared/adsbanner";
import { TradingLink } from "@/data/shared/Tradinglist";
import {
  categoryLinks,
  PradeshLinks,
  swasthaLinks,
} from "@/data/shared/NavLink";
import {
  CoverStory,
  pradeshsamacharcard,
  SahityaCards,
  saptastory,
  slidernews,
  sliderstory,
} from "@/data/cards/newscards";
import {
  antarastiya,
  businessess,
  sapta,
  swastha,
} from "@/data/cards/samachar";
import {
  bichitraSansar,
  khelkud,
  LandingTop,
  suchanaPravidhi,
  unmissed,
} from "@/data/cards/hovercard";
import { TradingDoctor } from "@/data/nav/imageNav";
import RankedNewsList from "@/components/shared/NewsItems/RankedNewsList";
import { mostCommentedNews } from "@/data/shared/rankedNews";
import HoverCardGrid from "@/components/shared/hovergrid";
import { NewsLink } from "@/data/shared/NewsLinkItem";
import { useState, useEffect } from "react";

export default function Home() {
  const [dateStr, setDateStr] = useState("");
  useEffect(() => {
    setDateStr(
      new Date().toLocaleDateString("ne-NP", {
        timeZone: "Asia/Kathmandu",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 max-w-full">
      <Navbar />
      <SubNav />
      <div>
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-0">
          <div>
            {/* <img
              src="https://www.onlinekhabar.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-12-at-13.38.07-scaled.jpeg"
              alt=""
              className="max-w-[1200px] mx-auto mt-10 h-full "
            /> */}
          </div>
          {/* <div className="mt-10">
            <TrendingTicker />
          </div> */}
          <div>
            <AdBanner ad={Plaza} />
            <h3 className="text-center text-2xl sm:text-4xl lg:text-6xl text-[#102C57] max-w-[1000px] pt-6 sm:pt-10 justify-center mx-auto font-bold tracking-wide leading-relaxed hover:text-[#2260BF] transition-colors">
              बागमतीका प्रदेश प्रमुख देवकोटाले एमालेका थापालाई मुख्यमन्त्री
              नियुक्त गर्दै, शपथ पनि आजै
            </h3>
            <div className="mt-10 justify-center mx-auto flex gap-10">
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black text-sm sm:text-base"> अनलाइनखबर</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <p className="text-black text-sm sm:text-base">
                  {dateStr}
                </p>
              </div>
            </div>

            <div className="border mt-10 w-full border-gray-400"></div>
            <AdBanner ad={texasCollege} />
            <h3 className="text-center text-2xl sm:text-4xl lg:text-6xl text-[#102C57] max-w-[1000px] pt-6 sm:pt-10 justify-center mx-auto font-bold tracking-wide leading-relaxed hover:text-[#2260BF] transition-colors">
              <a href="">
                भन्सारमा मालवस्तुको पूर्व-आगमन सूचना आदान प्रदान गर्न चार
                मुलुकबीच समझदारी
              </a>
            </h3>
            <div className="mt-10 justify-center mx-auto flex gap-10">
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black text-sm sm:text-base"> अनलाइनखबर</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <p className="text-black text-sm sm:text-base">{dateStr}
                </p>
              </div>
            </div>

            <img
              src="https://www.onlinekhabar.com/wp-content/uploads/2026/08/bhansar_sign.jpg"
              alt="Image loading"
              className="mt-10 mx-auto max-w-full h-auto"
            />
            <p className="text-gray-700 text-center pt-10 text-lg px-10 ">
              समझदारी पत्रमा नेपाल, भुटान, बंगलादेश र माल्दिभ्सका भन्सार
              प्रशासनबीच हस्ताक्षर भएको हो । माल्दिभ्समा आयोजित एसएएसईसीको १४ औं
              सबग्रुप मिटिङका अवसरमा समझदारी पत्रमा चार देशका भन्सार
              प्रशासकहरूले हस्ताक्षर गरेका छन् ।
            </p>
            <div>
              <AdBanner ad={Presidentialschool} />
            </div>
            <h3 className="text-center text-2xl sm:text-4xl lg:text-6xl text-[#102C57] max-w-[1000px] pt-6 sm:pt-10 justify-center mx-auto font-bold tracking-wide leading-relaxed hover:text-[#2260BF] transition-colors">
              भ्रष्टाचार बढ्नुमा सरकार, अदालत र महालेखा कार्यालय जिम्मेवार छन् :
              युवराज दुलाल
            </h3>
            <div className="mt-10 justify-center mx-auto flex gap-10">
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black text-sm sm:text-base"> अनलाइनखबर</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <p className="text-black text-sm sm:text-base">{dateStr}
                </p>
              </div>
            </div>
            <div className="border mt-10 w-full border-gray-400"></div>
            <h3 className="text-center text-2xl sm:text-4xl lg:text-6xl text-[#102C57] max-w-[1000px] pt-6 sm:pt-10 justify-center mx-auto font-bold tracking-wide leading-relaxed hover:text-[#2260BF] transition-colors">
              लेखा समितिमा खगेन्द्र सुनारको आरोप : प्रहरी हेडक्वार्टर बिचौलियाले
              कब्जा गरे
            </h3>
            <div className="mt-10 justify-center mx-auto flex gap-10">
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black text-sm sm:text-base"> अनलाइनखबर</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <p className="text-black text-sm sm:text-base">{dateStr}
                </p>
              </div>
            </div>
            <div className="border mt-10 w-full border-gray-400"></div>

            <h3 className="text-center text-2xl sm:text-4xl lg:text-6xl text-[#102C57] max-w-[1000px] pt-6 sm:pt-10 justify-center mx-auto font-bold tracking-wide leading-relaxed hover:text-[#2260BF] transition-colors ">
              अमरेश सिंहको प्रश्न : अख्तियार प्रधानमन्त्री कार्यालयको शाखा हो ?
            </h3>
            <div className="mt-10 justify-center mx-auto flex gap-10">
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black text-sm sm:text-base"> अनलाइनखबर</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png"
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <p className="text-black text-sm sm:text-base">{dateStr}
                </p>
              </div>
            </div>
            <AdBanner ad={tataev} />

            <section className="flex flex-col lg:flex-row gap-12 mt-10 lg:mt-20">
              <div className="relative w-full max-w-lg shrink-0 overflow-hidden">
                <HoveredCard cards={LandingTop} size="large" />
              </div>
              <div className="min-w-0 flex-1">
                <NewsList items={homepageNews} />
              </div>
              <div className="w-full lg:w-64 shrink-0">
                <AdSidebar ads={sidead} />
              </div>
            </section>
            <AdBanner ad={mahindraev} />
            <div>
              <AdBanner ad={gold} />
            </div>
            <div className="border mt-10 w-full border-gray-400"></div>
            <section>
              <div className="flex flex-wrap items-center justify-between gap-3 lg:pr-90 mt-10">
                <h3 className="] text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand ">
                  समाचार
                </h3>
                <Link
                  href=""
                  className="rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 px-2 py-2 text-sm shrink-0"
                >
                  सबै हेर्नुहोस्
                </Link>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="min-w-0 flex-1">
                  <div className="mt-10">
                    <Samachar />
                  </div>
                  <div className="mt-10">
                    <NewsGrid
                      items={politicsnews}
                      bannerAfter={6}
                      bannerAd={nimbBannerAd}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-64 shrink-0 mt-4 lg:mt-0">
                  <AdSidebar ads={secondaryAD} />
                </div>
              </div>
            </section>
            <div className="border mt-10 w-full border-gray-300"></div>
            <section className="mt-10">
              <div className="flex flex-wrap items-center justify-between gap-3 lg:pr-90">
                <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand ">
                  बिजनेस
                </h3>
                <NavLinkRow links={categoryLinks} />
                <Link
                  href=""
                  className="rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 px-2 py-2 text-sm shrink-0"
                >
                  सबै हेर्नुहोस्
                </Link>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="min-w-0 flex-1">
                  <div className="mt-2">
                    <Samachar sam={businessess} bgColor="blue" />
                  </div>
                  <div className="mt-10">
                    <NewsGrid items={businessnews} />
                  </div>
                </div>
                <div className="w-full lg:w-80 shrink-0 mt-4 lg:mt-0">
                  <NewsLinkList items={NewsLink} />
                </div>
              </div>
            </section>
            <div className="border mt-10 w-full border-gray-300"></div>
            <section className="mt-10">
              <div className="flex flex-wrap items-center justify-between gap-3 lg:pr-90">
                <h3 className=" text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand">
                  प्रदेश समाचार
                </h3>
                <NavLinkRow
                  links={PradeshLinks}
                  linkClassName="text-base sm:text-lg bg-gray-300 rounded-full px-3 py-2 text-blue-700 hover:text-white font-bold text-center"
                  containerClassName="flex flex-wrap gap-3 px-4 sm:px-10"
                />
                <Link
                  href=""
                  className="rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 px-2 py-2 text-sm shrink-0"
                >
                  सबै हेर्नुहोस्
                </Link>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div>
                  <div className="mt-2">
                    <Samachar sam={businessess} />
                  </div>
                  <div>
                    <CardNews cards={pradeshsamacharcard} />
                  </div>
                </div>
                <div className="mt-4">
                  <NewsTradingList items={TradingLink} />
                </div>
              </div>
            </section>
            <div className="border mt-10 w-full border-gray-400 mb-10"></div>
            <div className="space-y-10">
              <AdBanner ad={mitsubishi} />
              <CardSlider cards={slidernews} title="फिचर" />
            </div>

            <section>
              <div>
                <CardNews cards={CoverStory} title="कभर स्टोरी" columns={4} />
              </div>
              <AdBanner ad={shivamcement} />
            </section>
            <section>
              <div className="flex flex-wrap items-center justify-between gap-3 lg:pr-90 mt-10">
                <h3 className=" text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand">
                  सप्ताहान्त
                </h3>
                <Link
                  href=""
                  className="rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 px-2 py-2 text-sm shrink-0"
                >
                  सबै हेर्नुहोस्
                </Link>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="min-w-0 flex-1">
                  <Samachar sam={sapta} bgColor="blue" />
                </div>

                <div className="w-full lg:w-64 shrink-0 mt-10 lg:mt-0">
                  <AdSidebar ads={secondaryAD} />
                </div>
              </div>
              <div>
                <CardNews cards={saptastory} columns={4} />
              </div>
            </section>
            <section className="mt-10">
              <h3 className=" text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand">
                सूचना-प्रविधि
              </h3>
              <div className="mt-10">
                <HoverCardSlider cards={suchanaPravidhi} />
              </div>
            </section>
            <section>
              <div className="flex flex-wrap items-center gap-3 mt-10">
                <h3 className=" text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand ">
                  स्वास्थ्य
                </h3>
                <NavLinkRow links={swasthaLinks} />
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:space-x-10 mt-4">
                <div>
                  <div>
                    <Samachar sam={swastha} />
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <h3 className="text-[#2260BF] p-4 bg-blue-100 w-fit h-fit text-md ">
                      ट्रेन्डिङ डाक्टर
                    </h3>
                    <ImgNavRow links={TradingDoctor} />
                  </div>
                </div>
                <div>
                  <NewsGrid items={swasthaNews} columns={1} size="small" />
                </div>
              </div>
            </section>
            <section>
              <div className="flex mt-10">
                <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand ">
                  अन्तर्वार्ता
                </h3>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:space-x-10 mt-4">
                <div>
                  <div>
                    <Samachar sam={swastha} bgColor="blue" />
                    फिचर
                  </div>
                  <div className="flex gap-4"></div>
                </div>
                <div>
                  <NewsGrid items={swasthaNews} columns={1} size="small" />
                </div>
              </div>
            </section>
            <section className="mt-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand mb-10">
                खेलकुद
              </h3>
              <HoverCardSlider cards={khelkud} />
            </section>
            <AdBanner ad={worldlink} />
            <section className="mt-20">
              <div className="flex flex-wrap items-center justify-between gap-3 lg:pr-90">
                <h3 className=" text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand">
                  बिजनेस
                </h3>
                <NavLinkRow links={categoryLinks} />
                <Link
                  href=""
                  className="rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 px-2 py-2 text-sm shrink-0"
                >
                  सबै हेर्नुहोस्
                </Link>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <div className="mt-4 max-w-full lg:max-w-[900px]">
                  <CardNews cards={SahityaCards} columns={4} />
                </div>
                <div className="mt-4">
                  <NewsLinkList items={NewsLink} />
                </div>
              </div>
            </section>

            <CardSlider cards={sliderstory} title="इन्टर्‍याक्टिभ स्टोरी" />

            <section className="mt-20">
              <div className="flex flex-wrap items-center justify-between gap-3 lg:pr-90">
                <h3 className=" text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand ">
                  अन्तर्राष्ट्रिय
                </h3>

                <Link
                  href=""
                  className="rounded-full bg-gray-200 text-black hover:bg-gray-300 px-2 py-2 text-sm shrink-0"
                >
                  सबै हेर्नुहोस्
                </Link>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div>
                  <div className="mt-2">
                    <Samachar sam={antarastiya} />
                  </div>
                  <div className="mt-10">
                    <NewsGrid items={antarastryaNews} />
                  </div>
                </div>
                <div className="mt-4 ">
                  <NewsLinkList items={NewsLink} />
                </div>
              </div>
            </section>
            <section className="mt-10">
              <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand">
                विचित्र संसार
              </h3>
              <div className="flex flex-col lg:flex-row gap-4 mt-4">
                <div className="relative w-full max-w-lg shrink-0 overflow-hidden">
                  <HoveredCard cards={bichitraSansar} size="large" />
                </div>
                <div>
                  <NewsList items={homepageNews} button="" />
                </div>
                <div>
                  <RankedNewsList
                    title="धेरै कमेन्ट गरिएका"
                    items={mostCommentedNews}
                  />
                </div>
              </div>
            </section>
            <section>
              <h3 className="text-2xl sm:text-3xl lg:text-[45px] font-bold text-blue-500 pb-5 mt-10">
                पौरखी प्रवासी
              </h3>
              <HoverCardSlider cards={suchanaPravidhi} />
            </section>
            <CardSlider cards={slidernews} title="फिचर" />
            <section className="mt-10">
              <h3 className="pb-5  text-2xl sm:text-3xl lg:text-[45px] font-semibold text-[#1685F8] font-khand">
                छुटाउनुभयो कि ?
              </h3>
              <HoverCardGrid cards={unmissed} columns={4} size="compact" />
            </section>
          </div>
        </div>
      </div>
      <FooterLinkColumn />
    </div>
  );
}
