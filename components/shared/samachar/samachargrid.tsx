import Link from "next/link";
export interface SamacharID {
  image: string;
  title: string;
  description: string;
  href: string;
}

export const samachar1: SamacharID[] = [
  {
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2026/08/Sita-badi-3-768x449.jpg",
    title: "भृकुटीमण्डपमा मन्त्री सिता बादीको अनुगमन",
    description:
      "मन्त्री बादीले आज समाज कल्याण परिषद्को टोलीका साथमा भृकुटीमण्डप क्षेत्रको अनुगमन गरेकी हुन् ।",
    href: "",
  },
];


export const business: SamacharID[] = [
  {
    image:
      "https://www.onlinekhabar.com/wp-content/uploads/2025/06/gold-image-generatad-by-ai-768x427.jpg",
    title: "तोलामा ३ हजार ३ सय बढ्यो सुन, सातामै १५ हजार महँगियो",
    description:
      "५ भदौ, काठमाडौं । शुक्रबार सुनको भाउ तोलामा ३ हजार ३ सय रुपैयाँ बढेको छ । नेपाल सुनचाँदी व्यवसायी महासंघले यस दिनका लागि सुनको मूल्य प्रतितोला ३ लाख १६...",
    href: "",
  },
];

interface samacharProp {
  sam?: SamacharID[];
  bgColor?: string;
}

export default function Samachar({ sam = samachar1, bgColor = "bg-gray-200" }: samacharProp) {
  const isColored = bgColor !== "bg-gray-200";

  return (
    <div>
      {sam.map((item) => (
        <div key={item.href} className="rounded p-4 flex max-w-full">
          <img src={item.image} alt={item.title} className="w-1/2 rounded" />
          <div
            className={`w-1/2 flex flex-col justify-center items-center text-center rounded p-4 px-10 space-y-6 ${bgColor} ${
              isColored ? "text-white" : ""
            }`}
          >
            <Link
              href={item.href}
              className={`text-xl px-10 ${isColored ? "text-white" : "text-blue-600"}`}
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
