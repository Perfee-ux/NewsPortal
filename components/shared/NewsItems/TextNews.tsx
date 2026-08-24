import Image from "next/image";
import Link from "next/link";
import type { ArticleHeader as ArticleHeaderType } from "@/data/shared/articleHeader";

interface ArticleHeaderProps {
    news: ArticleHeaderType[];
}

export default function ArticleHeader({ news }: ArticleHeaderProps) {
    if (news.length === 0) {
        return null;
    }

    return (
        <div>
            {news.map((article, articleIndex) => {
                const { heading, href, meta = [], image, description } = article;

                return (
                    <article key={`${heading}-${articleIndex}`}>
                        <Link href={href}>
                            <h3 className="text-center text-6xl text-[#28325f] max-w-[1200px] pt-10 mx-auto font-bold tracking-wide leading-relaxed hover:text-blue-800">{heading}</h3>
                        
                        </Link>

                        <div className="mt-10 flex justify-center gap-10">
                            {meta.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex gap-2">
                                    <Image src={item.icon} alt="" width={24} height={24} />
                                    <p className="text-black">{item.label}</p>
                                    
                                </div>
                            ))}
                        </div>
                        <div className="border-b-2 pt-10 max-w-full"></div>

                        {image && (
                            <div className="relative mx-auto mt-8 h-96 w-full max-w-4xl overflow-hidden rounded-lg">
                                <Image src={image} alt={heading} fill className="object-cover" />
                            </div>
                        )}

                        {description && (
                            <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-gray-700">
                                {description}
                            </p>
                        )}
                    </article>
                );
            })}
        </div>
    );
}