import CardNews from "@/components/cards/cardnews";
import Navbar from "@/components/Nav/navbar";
import FooterLinkColumn from "@/components/Nav/Footer";
import SubNav from "@/components/Nav/SubNavbar";
import { mainNews } from "@/data/cards/newscards";
import Samachar from "@/components/shared/samachar/samachargrid";
export default function SamacharPage(){
    return(
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <SubNav />
            <div className="max-w-[1300px] mx-auto mt-20">
                <div>
                    <h3 className="text-3xl font-bold text-blue-500 mb-10">राष्ट्रिय समाचार</h3>
                    <Samachar />
                    <CardNews cards={mainNews}/>
                </div>
            </div>
            <FooterLinkColumn />
        </div>
    )
}