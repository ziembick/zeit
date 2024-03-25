import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import classes from "./index.module.scss";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={classes.nav}>
      {label}
    </Link>
  );
};
