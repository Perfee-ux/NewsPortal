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
