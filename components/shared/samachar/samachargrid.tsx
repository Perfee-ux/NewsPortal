import Link from "next/link";
import { SamacharID } from "@/data/cards/samachar";
import { samachar1 } from "@/data/cards/samachar";


interface samacharProp {
  sam?: SamacharID[];
  bgColor?: string;
}

export default function Samachar({ sam = samachar1, bgColor = "bg-gray-200" }: samacharProp) {
  const isColored = bgColor !== "bg-gray-200";

  return (
    <div>
      {sam.map((item) => (
        <div key={item.href} className="rounded p-4 flex max-w-full h-[440px] ">
          <img src={item.image} alt={item.title} className="w-1/2 rounded object-cover" />
          <div
            className={`w-1/2 flex flex-col justify-center items-center text-center rounded p-4 px-10 space-y-6 ${bgColor} ${
              isColored ? "text-white" : ""
            }`}
          >
            <Link
              href={item.href}
              className={`text-xl px-10 ${isColored ? "text-white" : "text-[#2260BF]"}`}
            >
              <h3 className="mt-2 font-semibold">{item.title}</h3>
            </Link>
            <p className={`text-sm ${isColored ? "text-white" : "text-gray-600"}`}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
