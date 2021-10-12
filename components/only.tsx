import { Fragment } from "react";
import { breakpoints, useBreakpoint } from "@utils/hooks";

type OnlyProps = {
  on: `${keyof typeof breakpoints}${"Up" | "Down"}`;
  children: React.ReactNode;
};

/**
 * @example
 * // Only show if my window is bigger than the lg breakpoint.
 * <Only on="lgUp">
 *   <SuperAdminSettings />
 * </Only>
 *
 * @example
 * // Only show if my window is smaller than the lg breakpoint.
 * <Only on="lgDown">
 *   <SuperAdminSettings />
 * </Only>
 */
export const Only = ({
  on,
  children,
}: OnlyProps): React.ReactElement | null => {
  const isMatch = useBreakpoint(on);

  return isMatch ? <Fragment>{children}</Fragment> : null;
};
