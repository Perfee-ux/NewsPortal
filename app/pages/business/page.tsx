import Navbar from "@/components/Nav/navbar";
import FooterLinkColumn from "@/components/Nav/Footer";
import ArticleHeader from "@/components/shared/NewsItems/TextNews";
import { businessNews } from "@/data/shared/articleHeader";
import Samachar from "@/components/shared/samachar/samachargrid";
import { deepal } from "@/data/cards/samachar";
import NewsGrid from "@/components/shared/NewsGris";
import { swasthaNews } from "@/data/shared/NewsItems";
import NewsLinkList from "@/components/shared/NewsItems/corporatenews";
import { BusinessNewsLink } from "@/data/shared/NewsLinkItem";
import CardSlider from "@/components/sliders/cardslider";
import { auto } from "@/data/cards/samachar";
import { slidernews } from "@/data/cards/newscards";
import NewsTradingList from "@/components/shared/NewsItems/Trading";
import { TradingLink } from "@/data/shared/Tradinglist";
import { antarastryaNews } from "@/data/shared/NewsItems";


export default function BusinessPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-[1300px] mx-auto ">
        <ArticleHeader news={businessNews} />
        <section className="flex gap-10">
          <Samachar sam={deepal} />
          <NewsGrid columns={1} items={swasthaNews} size="small" />
        </section>
        <section className="flex gap-10 mt-10">
          <div className="w-400">
            HelloWorld
          </div>
          <NewsLinkList items={BusinessNewsLink} />
        </section>
        <section className="mt-10 mb-10">
          <div className="w-screen absolute left-0 mt-10 mb-10">
            <CardSlider cards={slidernews} title="फिचर" />
          </div>
        </section>
        <section className="mt-140">
          <h3 className="text-3xl text-blue-600 font-bold mb-5">अटो</h3>
          <div className="flex">
            <div className="space-y-8">
              <Samachar sam={auto} />
              <NewsGrid columns={2} items={antarastryaNews}/>
              
            </div>
            
            <NewsTradingList items={TradingLink} />
          </div>
        </section>
      </div>

      <FooterLinkColumn />
    </div>
  );
}
