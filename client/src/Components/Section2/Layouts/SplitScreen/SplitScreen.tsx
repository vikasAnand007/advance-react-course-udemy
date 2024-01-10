import { styled } from "styled-components";
import { SplitScreenPropTypes } from "../../../../Types";

type PanelProps = {
  flex: number;
};

const Container = styled.div`
  display: flex;
`;

const PanelLeft = styled.div<PanelProps>`
  flex: ${(p) => p.flex};
  background-color: gray;
  padding: 10px;
`;
const PanelRight = styled.div<PanelProps>`
  flex: ${(p) => p.flex};
  background-color: #c0c0c0;
  padding: 10px;
`;

// Version 1 -----------------------
// type PropTypes = {
//   Left: React.FunctionComponent;
//   Right: React.FunctionComponent;
//   leftWidth?: number;
//   rightWidth?: number;
// };
// const SplitScreen = ({
//   Left,
//   Right,
//   leftWidth = 1,
//   rightWidth = 1,
// }: PropTypes) => {
//   return (
//     <Container>
//       <PanelLeft flex={leftWidth}>
//         <Left />
//       </PanelLeft>
//       <PanelRight flex={rightWidth}>
//         <Right />
//       </PanelRight>
//     </Container>
//   );
// };

// Version 2 -----------------------
const SplitScreen = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
}: SplitScreenPropTypes) => {
  const [left, right] = children;
  return (
    <Container>
      <PanelLeft flex={leftWidth}>{left}</PanelLeft>
      <PanelRight flex={rightWidth}>{right}</PanelRight>
    </Container>
  );
};

export default SplitScreen;
