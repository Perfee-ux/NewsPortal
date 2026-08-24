import Image from "next/image";
import { StorySlide } from "@/data/types";

export default function StorySlideContent({ slide }: { slide: StorySlide }) {
  return (
    <div className="relative h-[80vh] w-[400px] overflow-hidden rounded-lg">
      <Image src={slide.image} alt={slide.caption} fill className="object-cover" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h2 className="text-lg font-semibold text-white">{slide.caption}</h2>
        <p className="text-sm text-gray-300">
          {slide.source} · {slide.timeAgo}
        </p>
      </div>
    </div>
  );
}