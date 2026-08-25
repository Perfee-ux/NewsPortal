import Image from "next/image";
import Link from "next/link";
import { BannerAd } from "@/data/shared/adsbanner";

export default function AdBanner({ ad }: { ad: BannerAd }) {
  return (
    <Link
      href={ad.href}
      target="_blank"
      rel="noreferrer sponsored"
      className="block w-full overflow-hidden rounded-md hover:opacity-90 mt-6 sm:mt-8 lg:mt-10"
    >
    <Image
        src={ad.mobileImage ?? ad.image}
        alt={ad.alt}
        width={1200}
        height={300}
        className="h-auto w-full object-contain sm:hidden"
      />
      <Image
        src={ad.image}
        alt={ad.alt}
        width={1200}
        height={300}
        className="hidden h-auto w-full object-contain sm:block"
      />
    </Link>
  );
}
