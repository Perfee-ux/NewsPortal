import Link from "next/link";

const newsLinks = [
  { label: "समाज", href: "/samaj" },
  { label: "विचार/ब्लग", href: "/bichar-blog" },
  { label: "साहित्य", href: "/sahitya" },
  { label: "अन्तर्वार्ता", href: "/interview" },
  { label: "खेलकुद", href: "/sports" },
  { label: "जीवनशैली/स्वास्थ्य", href: "/lifestyle" },
  { label: "प्रवास", href: "/prabhas" },
  { label: "अन्तर्राष्ट्रिय", href: "/international" },
];

const businessLinks = [
  { label: "बजार", href: "/bajar" },
  { label: "पर्यटन", href: "/paryatan" },
  { label: "रोजगार", href: "/rojgar" },
  { label: "बैंक / वित्त", href: "/bank-finance" },
  { label: "अटो", href: "/auto" },
  { label: "सूचना-प्रविधि", href: "/technology" },
];

const sportsLinks = [
  { label: "एन्पिएल २०८१", href: "/npl" },
  { label: "ICC Men T20 World Cup 2024", href: "/icc-t20" },
  { label: "IPL 2024", href: "/ipl-2024" },
  { label: "Aaha RARA Pokhara gold cup", href: "/aaha-rara" },
  { label: "Nepal Super League - 2080", href: "/nsl" },
];

const onlineListLinks = [
  { label: "नेपालका ५० प्रभावशाली महिला", href: "/women" },
  { label: "२०८०", href: "/2080" },
  { label: "२०८१", href: "/2081" },
  { label: "२०८२", href: "/2082" },
  { label: "चालीस मुनीका चालीस", href: "/forty-under-forty" },
  { label: "मेरो कथा", href: "/mero-katha" },
  { label: "फ्रन्टलाइन हिरोज", href: "/frontline-heroes" },
];

const specialLinks = [
  { label: "सहकारी संकट विशेष", href: "/cooperative-crisis" },
  { label: "लघुवित्त संकट विशेष", href: "/microfinance" },
  { label: "संसद विघटन विशेष", href: "/parliament" },
  { label: "निर्वाचन २०७४", href: "/election-2074" },
  { label: "स्थानीय चुनाव २०७९", href: "/local-election" },
  { label: "निर्वाचन २०७९", href: "/election-2079" },
  { label: "निर्वाचन २०८२", href: "/election-2082" },
];

const onlineKhabarLinks = [
  { label: "हाम्रो टिम", href: "/team" },
  { label: "प्रयोगका सर्त", href: "/terms" },
  { label: "विज्ञापन", href: "/advertisement" },
  { label: "प्राइभेसी पोलिसी", href: "/privacy" },
  { label: "सम्पर्क", href: "/contact" },
];

export const footerColumns = [
  { title: "समाचार", links: newsLinks },
  { title: "बिजनेस", links: businessLinks },
  { title: "खेलकुद", links: sportsLinks },
  { title: "अनलाइन सूची", links: onlineListLinks },
  { title: "विशेष", links: specialLinks },
  { title: "अनलाइनखबर", links: onlineKhabarLinks },
];

export default function FooterLinkColumn() {
  return (
    <footer className="px-20 py-12 bg-blue-50 mt-20">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="mb-5 text-lg font-bold text-blue-600">
              {column.title}
            </h3>

            <ul className="space-y-4">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

<div className="mt-12 border-t border-gray-300 pt-8 flex flex-row items-center justify-center gap-6 mx-auto bg-blue-100">
        <div className="flex gap-10 text-gray-600">
          <img
            src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/main-logo-new.svg"
            className="w-64"
          />
          <div className="w-px h-16 bg-gray-700"></div>
          <div className="space-y-2">
            <p className="text-[12px]">तथा प्रबन्ध निर्देशक:</p>
            <p>धर्मराज भुसाल</p>
          </div>
          <div className="w-px h-16 bg-gray-700"></div>
          <div className="space-y-2">
            <p className="text-[12px]">तथा प्रबन्ध निर्देशक:</p>
            <p>धर्मराज भुसाल</p>
          </div>
          <div className="w-px h-16 bg-gray-700"></div>

          <div className="space-y-2">
            <p className="text-[12px]">तथा प्रबन्ध निर्देशक:</p>
            <p>धर्मराज भुसाल</p>
          </div>
          <div className="w-px h-16 bg-gray-700"></div>

          <div className="space-y-2">
            <p className="text-[12px]">तथा प्रबन्ध निर्देशक:</p>
            <p>धर्मराज भुसाल</p>
          </div>
          <div className="w-px h-16 bg-gray-700"></div>
        </div>
      </div>
    </footer>
  );
}
