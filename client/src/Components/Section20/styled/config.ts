export type AllowedSpaces =
  | "none"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "xxl"
  | "xxxl";
export const spaces = {
  none: "0",
  xs: "0.125rem",
  s: "0.25rem",
  m: "0.5rem",
  l: "1rem",
  xl: "1.5rem",
  xxl: "2rem",
  xxxl: "4rem",
};
export type AllowedFractions =
  | "1/2"
  | "1/3"
  | "1/4"
  | "2/3"
  | "3/4"
  | "auto-start"
  | "auto-end";
export const fractions = {
  "1/2": "1fr 1fr",
  "1/3": "1fr 2fr",
  "1/4": "1fr 3fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};
export type AllowedNumberOfColumns =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type AvailableStreactTypes = "all" | "start" | "end";

export const streachSchema = {
  all: `> * { flex: 1 }`,
  start: `> :first-child { flex: 1 }`,
  end: `> :last-child { flex: 1 }`,
};
