"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  readonly href: string;
  readonly children: React.ReactNode;
}

export default function NavLink(props: Props) {
  const path = usePathname();
  const className = path.includes(props.href) ? "active" : "";

  return (
    <Link href={props.href} className={className}>
      {props.children}
    </Link>
  );
}
