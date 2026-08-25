import Link from "next/link";
import { SamacharID } from "@/data/cards/samachar";
import { samachar1 } from "@/data/cards/samachar";


interface samacharProp {
  sam?: SamacharID[];
  bgColor?: string;
}

export default function Samachar({ sam = samachar1, bgColor = "bg-gray-200" }: samacharProp) {
  const isColored = bgColor !== "bg-gray-200";
  const isGradient = bgColor === "blue";

  return (
    <div>
      {sam.map((item) => (
          <div key={item.href} className="rounded p-3 sm:p-4 flex flex-col sm:flex-row max-w-full h-auto sm:h-[440px] ">
            <img src={item.image} alt={item.title} className="w-full h-56 sm:h-auto sm:w-1/2 rounded object-cover" />
          <div
            className={`w-full sm:w-1/2 flex flex-col justify-center items-center text-center rounded p-4 px-6 sm:px-10 space-y-3 sm:space-y-6 ${
              isGradient ? "" : bgColor
            } ${isColored ? "text-white" : ""}`}
            style={
              isGradient
                ? { background: "linear-gradient(269.83deg, #6c60fa 0.8%, #1685f8 69.59%)" }
                : undefined
            }
          >
            <Link
              href={item.href}
              className={`text-xl sm:text-3xl px-4 sm:px-8 ${isColored ? "text-white" : "text-[#2260BF]"}`}
            >
              <h3 className="mt-2 font-semibold">{item.title}</h3>
            </Link>
            <p className={`text-sm sm:text-md ${isColored ? "text-white" : "text-gray-600"}`}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}