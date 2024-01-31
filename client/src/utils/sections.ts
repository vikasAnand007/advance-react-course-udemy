import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";
import Section6 from "../Components/Section6";
import Section7 from "../Components/Section7";
import Section8 from "../Components/Section8";

import { SectionList } from "../Types";

export const sections: SectionList = [
  {
    title: "Section 1 (Introduction)",
  },
  {
    title: "Section 2 (Design patterns: Layout components)",
    component: Section2,
  },
  {
    title: "Section 3 (Design patterns: Container components)",
    component: Section3,
  },
  {
    title: "Section 4 (Controlled and Uncontrolled Components)",
    component: Section4,
  },
  {
    title: "Section 5 (Design patterns: HOCs)",
    component: Section5,
  },
  {
    title: "Section 6 (Design patterns: Custom hooks)",
    component: Section6,
  },
  {
    title: "Section 7 (Design patterns: Functional programming in React)",
    component: Section7,
  },
  {
    title: "Section 8 (Design patterns: More patterns)",
    component: Section8,
  },
];
