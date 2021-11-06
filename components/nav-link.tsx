import { classNames } from "@utils/class-names";
import { cloneElement } from "react";
import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";

type NavLinkProps = {
  baseClassName?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  children: React.ReactElement;
} & LinkProps;

/**
 * Custom wrapper over next `<Link>`, intended to avoid the cascade when using tailwindcss classes.
 * @param {string} activeClassName The class to give the element when it is active. This will be joined with the baseClassName.
 * @param {string} inactiveClassName The class to give the element when it is inactive. This will be joined with the baseClassName.
 */
const NavLink = ({
  href,
  children,
  baseClassName = "",
  activeClassName = "",
  inactiveClassName = "",
  ...linkProps
}: NavLinkProps): React.ReactElement => {
  const { asPath } = useRouter();

  return (
    <Link href={href} {...linkProps}>
      {cloneElement(children, {
        className: classNames(
          asPath === href ? activeClassName : inactiveClassName,
          baseClassName
        ),
      })}
    </Link>
  );
};

export { NavLink };
export type { NavLinkProps };
