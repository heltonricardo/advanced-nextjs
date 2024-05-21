"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  readonly href: string;
  readonly children: React.ReactNode;
}

export default function NavLink(props: Props) {
  const path = usePathname();

  return (
    <Link href={props.href} className={path.startsWith(props.href) ? "active" : undefined}>
      {props.children}
    </Link>
  );
}
