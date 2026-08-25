import Link from "next/link";
import { NavLink } from "@/data/shared/NavLink";

interface NavLinkRowProps {
  links: NavLink[];
  linkClassName?: string;
  containerClassName?: string;
}

export default function NavLinkRow({
  links,
  linkClassName = "text-gray-900 hover:text-[#2260BF] rounded-xl px-3 py-1 border border-gray-400 text-xs sm:text-sm shrink-0",
containerClassName = "flex flex-nowrap gap-2 sm:gap-3 px-4 sm:px-10 overflow-x-auto whitespace-nowrap"
}: NavLinkRowProps) {
  return (
    <div className={containerClassName}>
      {links.map((link) => (
        <Link key={link.id} href={link.href} className={linkClassName}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}