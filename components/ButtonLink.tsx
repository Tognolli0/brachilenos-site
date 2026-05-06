import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "light" | "outlineLight";
  className?: string;
};

export function ButtonLink({ href, children, icon: Icon, variant = "primary", className = "" }: ButtonLinkProps) {
  const base =
    "focus-ring inline-flex min-h-12 w-full items-center justify-center gap-2 border px-5 text-center text-sm font-extrabold leading-tight transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 sm:w-auto";
  const variants = {
    primary: "border-[#071f3b] bg-[#071f3b] text-white hover:bg-[#0b345b]",
    secondary: "border-[#071f3b] bg-white text-[#071f3b] hover:bg-[#f8faf9]",
    light: "border-white bg-white text-[#071f3b] hover:bg-[#f8faf9]",
    outlineLight: "border-white bg-transparent text-white hover:bg-white hover:text-[#071f3b]",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {Icon ? <Icon aria-hidden className="h-5 w-5 shrink-0" /> : null}
      <span>{children}</span>
    </Link>
  );
}
