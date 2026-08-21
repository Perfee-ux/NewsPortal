"use client";
import SubNav from "@/components/Nav/SubNavbar";
import Navbar from "@/components/Nav/navbar";
import Link from "next/link";
import TrendingTicker from "@/components/sliders/TrendingTicker";
import FooterLinkColumn from "@/components/Nav/Footer";
import NewsList from "@/components/shared/NewsList";
import {
  businessnews,
  homepageNews,
  politicsnews,
} from "@/data/shared/NewsItems";
import AdSidebar, { secondaryAD } from "@/components/shared/AdSidebar";
import NewsGrid from "@/components/shared/NewsGris";
import AdBanner from "@/components/shared/AdBanner";
import Samachar, { business } from "@/components/shared/samachar/samachargrid";
import { ChevronRight } from "lucide-react";
import NewsLinkList from "@/components/shared/NewsItems/corporatenews";
import NewsTradingList from "@/components/shared/NewsItems/Trading";
import NavLinkRow from "@/components/shared/NavLinkRow";
import CardNews from "@/components/cards/newscard";


import {
  mahindraev,
  mitsubishi,
  nimbBannerAd,
  Plaza,
  Presidentialschool,
  tataev,
  texasCollege,
} from "@/data/shared/adsbanner";
import { TradingLink } from "@/components/shared/NewsItems/Trading";
import { categoryLinks, PradeshLinks } from "@/data/shared/NavLink";
import { pradeshsamacharcard } from "@/data/cards/newscards";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <SubNav />
      <div>
        <div className="max-w-[1300px] mx-auto">
          <div>
            <img
              src="https://www.onlinekhabar.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-12-at-13.38.07-scaled.jpeg"
              alt=""
              className="max-w-[1200px] mx-auto mt-10 h-full "
            />
          </div>
          <div className="mt-10">
            <TrendingTicker />
          </div>
          <div>
            <AdBanner ad={Plaza} />
            <h3 className="text-center text-6xl text-[#28325f] max-w-[1000] pt-10 justify-center mx-auto font-bold tracking-wide leading-relaxed">
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
                <p className="text-black "> अनलाइनखबर</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black">८ मिनेट अगाडि</p>
              </div>
            </div>

            <div className="border mt-10 w-full border-gray-400"></div>
            <AdBanner ad={texasCollege} />
            <h3 className="text-center text-6xl text-[#28325f] max-w-[1000] pt-10 justify-center mx-auto font-bold tracking-wide leading-relaxed hover:text-[#4b5a93]">
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
                <p className="text-black "> अनलाइनखबर</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black">८ मिनेट अगाडि</p>
              </div>
            </div>

            <img
              src="https://www.onlinekhabar.com/wp-content/uploads/2026/08/bhansar_sign.jpg"
              alt="Image loading"
              className="mt-10 mx-auto "
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
            <h3 className="text-center text-6xl text-[#28325f] max-w-[1000] pt-10 justify-center mx-auto font-bold tracking-wide leading-relaxed">
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
                <p className="text-black "> अनलाइनखबर</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black">८ मिनेट अगाडि</p>
              </div>
            </div>
            <div className="border mt-10 w-full border-gray-400"></div>
            <h3 className="text-center text-6xl text-[#28325f] max-w-[1000] pt-10 justify-center mx-auto font-bold tracking-wide leading-relaxed">
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
                <p className="text-black "> अनलाइनखबर</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black">८ मिनेट अगाडि</p>
              </div>
            </div>
            <div className="border mt-10 w-full border-gray-400"></div>
            <h3 className="text-center text-6xl text-[#28325f] max-w-[1000] pt-10 justify-center mx-auto font-bold tracking-wide leading-relaxed">
              उच्चपदस्थ नेपालीको विदेशी बैंकको रकम खोज्न विशेष टास्क फोर्स बनाउन
              प्रस्ताव
            </h3>
            <div className="mt-10 justify-center mx-auto flex gap-10">
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black "> अनलाइनखबर</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black">८ मिनेट अगाडि</p>
              </div>
            </div>
            <div className="border mt-10 w-full border-gray-400"></div>
            <h3 className="text-center text-6xl text-[#28325f] max-w-[1000] pt-10 justify-center mx-auto font-bold tracking-wide leading-relaxed">
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
                <p className="text-black "> अनलाइनखबर</p>
              </div>
              <div className="flex gap-2">
                <img
                  src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/clock-icon.png"
                  width={24}
                  height={24}
                  className=""
                />
                <p className="text-black">८ मिनेट अगाडि</p>
              </div>
            </div>
            <AdBanner ad={tataev} />

            <section className="flex gap-4 mt-20">
              <div className="relative max-w-lg overflow-hidden ">
                <img
                  src="https://www.onlinekhabar.com/wp-content/uploads/2026/08/shobita-gautam-1024x500.jpg"
                  className="w-full h-[680px] object-cover hover:scale-110 transition-transform duration-500"
                />

                <a
                  href=""
                  className="absolute bottom-30 left-0 w-full px-7  py-4 text-3xl font-bold text-white bg-black/50"
                >
                  कर्मचारीमाथि अख्तियारको डर देखियो : कानुनमन्त्री
                </a>
              </div>
              <div>
                <NewsList items={homepageNews} />
              </div>
              <div>
                <AdSidebar />
              </div>
            </section>
            <AdBanner ad={mahindraev} />
            <img
              src="https://www.onlinekhabar.com/wp-content/uploads/2026/07/WhatsApp-GIF-2026-07-30-at-13.38.43.gif"
              className="mt-10"
            />
            <div className="border mt-10 w-full border-gray-400"></div>
            <section>
              <div className="flex max-w-full mt-10">
                <h3 className="text-blue-700  text-3xl font-bold ">Samachar</h3>
                <Link href="" className="absolute right-120">
                  <ChevronRight
                    width={24}
                    height={26}
                    className="rounded-full bg-gray-200 text-black mx-auto hover:bg-gray-300 "
                  />
                </Link>
              </div>
              <div className="flex gap-10 ">
                <div>
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
                <div className="-mt-10">
                  <AdSidebar ads={secondaryAD} />
                </div>
              </div>
            </section>
            <div className="border mt-10 w-full border-gray-300"></div>
            <section className="mt-20">
              <div className="flex max-w-full">
                <h3 className="text-blue-700  text-3xl font-bold ">बिजनेस</h3>
                <NavLinkRow links={categoryLinks} />
                <Link href="" className="absolute right-120">
                  <ChevronRight
                    width={24}
                    height={26}
                    className="rounded-full bg-gray-200 text-black mx-auto hover:bg-gray-300 "
                  />
                </Link>
              </div>
              <div className="flex gap-10 ">
                <div>
                  <div className="mt-2">
                    <Samachar sam={business} bgColor="bg-blue-500" />
                  </div>
                  <div className="mt-10">
                    <NewsGrid items={businessnews} />
                  </div>
                </div>
                <div className="-mt-10">
                  <NewsLinkList />
                </div>
              </div>
            </section>
            <div className="border mt-10 w-full border-gray-300"></div>
            <section className="mt-20">
              <div className="flex max-w-full">
                <h3 className="text-blue-700  text-3xl font-bold ">
                  प्रदेश समाचार
                </h3>
                //{" "}
                <NavLinkRow
                  links={PradeshLinks}
                  linkClassName="text-lg bg-gray-300 rounded-full px-3 py-2 text-blue-700 hover:text-white font-bold text-center "
                  containerClassName="px-10 space-x-6"
                />
                <Link href="" className="absolute right-160">
                  <ChevronRight
                    width={24}
                    height={26}
                    className="rounded-full bg-gray-200 text-black mx-auto hover:bg-gray-300 "
                  />
                </Link>
              </div>
              <div className="flex gap-10 ">
                <div>
                  <div className="mt-2">
                    <Samachar sam={business} />
                  </div>
                  <div>
                    <CardNews cards={pradeshsamacharcard} />
                  </div>
                </div>
                <div className="-mt-10">
                  <NewsTradingList />
                </div>
              </div>
            </section>
            <div className="border mt-10 w-full border-gray-400"></div>
            <AdBanner ad={mitsubishi}/>
          </div>
        </div>
      </div>
      <FooterLinkColumn />
    </div>
  );
}
