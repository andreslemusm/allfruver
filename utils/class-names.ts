export const classNames = (...classes: Array<string | boolean>): string =>
  classes.filter(Boolean).join(" ");
