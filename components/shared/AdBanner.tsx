import Image from "next/image";
import Link from "next/link";
import { BannerAd } from "@/data/shared/adsbanner";

export default function AdBanner({ ad }:{ ad: BannerAd }){
    return(
        <Link
        href={ad.href}
        target="_blank"
        rel="noreferrer sponsored"
        className="relative block h-25 w-full overflow-hidden rounded-md hover:opacity-90 mt-10"
        >
            <Image src={ad.image} alt={ad.alt} fill className="object-cover" />
        </Link>
    )
}