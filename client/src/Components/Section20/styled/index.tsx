import styled from "styled-components";
import {
  AllowedFractions,
  AllowedNumberOfColumns,
  AllowedSpaces,
  AvailableStreactTypes,
  fractions,
  spaces,
  streachSchema,
} from "./config";

interface LayerProps {
  gap?: AllowedSpaces;
}

export const Layer = styled.div<LayerProps>`
  --gapInBetween: ${(props) => (props?.gap ? spaces[props.gap] : spaces.l)};
  display: grid;
  gap: var(--gapInBetween);
`;

type SplitProps = LayerProps & {
  fraction?: AllowedFractions;
};

export const Split = styled(Layer)<SplitProps>`
  grid-template-columns: ${(props) =>
    props?.fraction ? fractions[props.fraction] : fractions["1/2"]};
`;

type ColumnContainerProps = LayerProps & {
  columns?: AllowedNumberOfColumns;
};

export const ColumnContainer = styled(Layer)<ColumnContainerProps>`
  grid-template-columns: repeat(${(props) => props?.columns || 1}, 1fr);
`;

type ColumnProps = {
  col?: AllowedNumberOfColumns;
};

export const Column = styled.div<ColumnProps>`
  grid-column: span ${(props) => (props?.col ? props.col : 12)};
`;

type GridProps = LayerProps & {
  minItemWidth?: string;
};

export const Grid = styled(Layer)<GridProps>`
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      min(
        ${(props) => (props?.minItemWidth ? props.minItemWidth : "300px")},
        100%
      ),
      1fr
    )
  );
`;

type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
type AlignItems = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

interface InlineBundleProps {
  gap?: AllowedSpaces;
  justify?: JustifyContent;
  align?: AlignItems;
}

export const InlineBundle = styled.div<InlineBundleProps>`
  --gap: ${(props) => (props?.gap ? spaces[props.gap] : spaces.l)};
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => (props?.justify ? props.justify : "start")};
  align-items: ${(props) => (props?.align ? props.align : "start")};
  gap: var(--gap);
`;

type InlineProps = InlineBundleProps & {
  streach?: AvailableStreactTypes;
};

export const Inline = styled(InlineBundle)<InlineProps>`
  ${(props) => {
    if (!props?.streach) return "";
    const { streach } = props;
    if (typeof streach === "number") {
      return `> :nth-child(${streach + 1}) { flex: 1 }`;
    }
    if (!streachSchema[streach]) return "";
    return streachSchema[streach];
  }};

  > * {
    min-width: fit-content;
    flex-basis: calc((40rem - (100% - var(--gap))) * 999);
  }
`;
