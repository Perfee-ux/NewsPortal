import Link from "next/link";
import { NavLink } from "@/data/shared/NavLink";

interface NavLinkRowProps {
  links: NavLink[];
  linkClassName?: string;
  containerClassName?: string;
}

export default function NavLinkRow({
  links,
  linkClassName = "text-gray-900 hover:text-blue-600",
  containerClassName = "px-10 space-x-8",
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