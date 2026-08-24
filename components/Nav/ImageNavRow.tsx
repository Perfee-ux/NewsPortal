import Link from "next/link";
import Image from "next/image";
import { ImageNav } from "@/data/nav/imageNav";

interface ImageNavProps {
    links: ImageNav[];

}

export default function ImgNavRow({ links }: ImageNavProps) {
    return (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-7 text-center">
            {links.map((link) => (
                <Link key={link.id} href={link.href} className="group">
                    <Image
                        src={link.logo}
                        alt={link.label}
                        width={42}
                        height={42}
                        className="w-16 h-16 rounded-full mx-auto "
                    />
                    <span className="mt-2 block text-center text-[12px] text-gray-900 group-hover:text-[#2260BF]">
                        {link.label}
                    </span>
                </Link>
            ))}
        </div>
    );
}