import Link from "next/link";
import { NavLink } from "@/data/shared/NavLink";

interface NavLinkRowProps {
  links: NavLink[];
  linkClassName?: string;
  containerClassName?: string;
}

export default function NavLinkRow({
  links,
  linkClassName = "text-gray-900 hover:text-[#2260BF] rounded-xl px-2 py-1 border border-gray-400 text-sm",
  containerClassName = "px-10 space-x-6 ",
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