import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;
const PanelLeft = styled.div`
  flex: 1;
  background-color: gray;
`;
const PanelRight = styled.div`
  flex: 1;
  background-color: #c0c0c0;
`;

type PropTypes = {
  Left: React.FunctionComponent;
  Right: React.FunctionComponent;
};
const SplitScreen = ({ Left, Right }: PropTypes) => {
  return (
    <Container>
      <PanelLeft>
        <Left />
      </PanelLeft>
      <PanelRight>
        <Right />
      </PanelRight>
    </Container>
  );
};

export default SplitScreen;
