import Image from "next/image";
import Link from "next/link";

export interface Ad {
  id: string;
  image: string;
  href: string;
  alt: string;
}


export const sidead: Ad[] = [
  {
    id: "ime-tiqmo",
    image: "https://www.onlinekhabar.com/wp-content/uploads/2026/04/online-300x200-3.gif",
    href: "https://example.com/ime-offer",
    alt: "IME Tiqmo - उपहार जितौं",
  },
  {
    id: "dav-college",
    image: "https://www.onlinekhabar.com/wp-content/uploads/2026/07/DAV-College_Desktop.gif",
    href: "https://example.com/dav-admission",
    alt: "DAV International College - BSc CSIT Admission Open",
  },
  {
    id: "himalayan-hideaway",
    image: "https://www.onlinekhabar.com/wp-content/uploads/2026/08/OK-AD-REV.-HQ-300x200-1.gif",
    href: "https://www.onlinekhabar.com/wp-content/uploads/2026/08/OK-AD-REV.-HQ-300x200-1.gif",
    alt: "Himalayan Hideaway Resort - Book Now",
  },
];

export const secondaryAD: Ad[] = [
  {
    id: "fertility center",
    image: "https://www.onlinekhabar.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-07-at-11.05.55-AM.jpeg",
    href: "https://example.com/ime-offer",
    alt: "IME Tiqmo - उपहार जितौं",
  },
];

interface AdProp {
  ads?: Ad[];
}


export default function AdSidebar({ ads = sidead }: AdProp) {
  return (
    <div className="flex w-[300px] shrink-0 flex-col gap-4 sticky top-20">
      {ads.map((ad) => (
        <Link
          key={ad.id}
          href={ad.href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="relative block aspect-4/3 w-full overflow-hidden rounded-md hover:opacity-90"
        >
          <Image src={ad.image} alt={ad.alt} fill className="object-cover" />
        </Link>
      ))}
    </div>
  );
}