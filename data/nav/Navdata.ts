import { NavItem } from "../types";

export const navItems: NavItem[] = [
  { label: "होमपेज", href: "/" },
  { label: "समाचार", href: "/pages/samachar" },
  { label: "बिजनेस", href: "/business" },
  {
    label: "जीवनशैली",
    href: "/lifestyle",
    hasMegaMenu: true,
    megaMenuItems: [
      {
        tag: "प्रदेश समाचार",
        title: "बागमतीमा राप्रपाबाट ३ मन्त्री, ४ बजे शपथको तयारी",
        imageUrl: "https://www.onlinekhabar.com/wp-content/uploads/2026/08/nabin-nablo-main-banner-270x170.png",
        href: "/lifestyle/article-1",
      },
      {
        tag: "अन्तर्राष्ट्रिय समाचार",
        title: "मध्य अफ्रिकी गणतन्त्रको सुन खानीमा पहिरो",
        imageUrl: "https://www.onlinekhabar.com/wp-content/uploads/2026/08/date-270x170.jpg",
        href: "/lifestyle/article-2",
      },
    ],
  },
  { label: "मनोरञ्जन", href: "/entertainment" },
  { label: "विचार", href: "/opinion" },
  { label: "खेलकुद", href: "/sports" },
  {
    label: "अन्य",
    hasMegaMenu: true,
    megaMenuItems: [
      {
        tag: "साहित्य",
        title: "श्रवण मुकारूङको चुलो",
        imageUrl: "/images/other-1.jpg",
        href: "/other/article-1",
      },
    ],
  },
];