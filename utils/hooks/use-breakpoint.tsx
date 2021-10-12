import { useMediaQuery } from "./use-media-query";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const useBreakpoint = (
  breakpointQuery: `${keyof typeof breakpoints}${"Up" | "Down"}`
): boolean => {
  const isUp = breakpointQuery.endsWith("Up");

  const breakpoint = (
    isUp ? breakpointQuery.slice(0, -2) : breakpointQuery.slice(0, -4)
  ) as keyof typeof breakpoints;

  const isMatch = useMediaQuery(
    `(${isUp ? "min" : "max"}-width: ${
      isUp ? breakpoints[breakpoint] : breakpoints[breakpoint] - 1
    }px)`
  );

  return isMatch;
};

export { breakpoints, useBreakpoint };
