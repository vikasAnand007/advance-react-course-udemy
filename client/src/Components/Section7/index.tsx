import { Child, Container } from "../../Styled/StyledComponents";
import {
  Button,
  DangerButton,
  InfoButton,
  LargeInfoButton,
  SmallDangerButton,
} from "./Composition";
import { PartialButton, PartialDangerButton, PartialInfoButton, PartialLargeInfoButton, PartialSmallDangerButton } from "./Partial";
import RecursiveComponent from "./RecursiveComponent";

const Section7 = () => {
  return (
    <Container>
      <div>
        Recursive component
        <Child>
          <RecursiveComponent />
        </Child>
      </div>
      <div>
        Composition in FC
        <Child>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <Button>Normal button</Button>
            <DangerButton>Danger button</DangerButton>
            <SmallDangerButton>Small Danger button</SmallDangerButton>
            <InfoButton>Info button</InfoButton>
            <LargeInfoButton>Large Info button</LargeInfoButton>
            <Button variant="success" size="medium">
              Custom button
            </Button>
          </div>
        </Child>
      </div>
      <div>
        Composition with HOC / Partial component
        <Child>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <PartialButton>Normal button</PartialButton>
            <PartialDangerButton>Danger button</PartialDangerButton>
            <PartialSmallDangerButton>Small Danger button</PartialSmallDangerButton>
            <PartialInfoButton>Info button</PartialInfoButton>
            <PartialLargeInfoButton>Large Info button</PartialLargeInfoButton>
            <PartialButton variant="success" size="medium">
              Custom button
            </PartialButton>
          </div>
        </Child>
      </div>
    </Container>
  );
};

export default Section7;
