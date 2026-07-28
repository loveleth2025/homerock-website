import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "outline" | "outline-light";
type Size = "base" | "small";

const variantClasses: Record<Variant, string> = {
  primary: "bg-navy text-white hover:bg-gold hover:text-navy",
  secondary: "bg-cream text-navy border border-navy hover:bg-navy hover:text-white",
  outline: "bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white",
  "outline-light": "bg-transparent text-white border-2 border-white hover:bg-white hover:text-navy",
};

const sizeClasses: Record<Size, string> = {
  base: "px-lg py-md text-base",
  small: "px-md py-sm text-sm",
};

const baseClasses =
  "inline-block rounded-[2px] font-semibold tracking-[0.01em] text-center transition-all duration-200 cursor-pointer active:scale-[0.98]";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "base", className } = props;
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, external, children, ...rest } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { children, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
