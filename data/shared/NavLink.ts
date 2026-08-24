export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export const categoryLinks: NavLink[] = [
  { id: "arthaniti", label: "अर्थनीति", href: "/category/economy" },
  { id: "paryatan", label: "पर्यटन", href: "/category/tourism" },
  { id: "rojgar", label: "रोजगार", href: "/category/employment" },
  { id: "bank-vitta", label: "बैंक / वित्त", href: "/category/bank-finance" },
  { id: "auto", label: "अटो", href: "/category/auto" },
  { id: "corporate", label: "कर्पोरेट", href: "/category/corporate" },
];
export const PradeshLinks: NavLink[] = [
  { id: "a", label: "१", href: "/category/economy" },
  { id: "b", label: "२", href: "/category/tourism" },
  { id: "c", label: "३", href: "/category/employment" },
  { id: "d", label: "४", href: "/category/bank-finance" },
  { id: "e", label: "५", href: "/category/auto" },
  { id: "f", label: "६", href: "/category/corporate" },
  { id: "g", label: "७", href: "/category/corporate" },
];
export const swasthaLinks: NavLink[] = [
  { id: "aljaimer", label: "अल्जाइमर", href: "/category/economy" },
  { id: "ayurved", label: "आयुर्वेद", href: "/category/tourism" },
  { id: "endo", label: "इन्डोक्राइन (हर्मोन रोग)", href: "/category/employment" },
  { id: "hiv", label: "एचआईभी", href: "/category/bank-finance" },
  { id: "netra", label: "नेत्ररोग", href: "/category/auto" },
  { id: "satri", label: "प्रसूति तथा स्त्रीरोग", href: "/category/corporate" },
  { id: "bal", label: "बालरोग", href: "/category/corporate" },
  { id: "mansik", label: "मानसिक स्वास्थ्य (डिप्रेसन, एन्जाइटी)", href: "/category/corporate" },
  { id: "mutra", label: "मिर्गौला तथा मुत्र रोग", href: "/category/corporate" },
];