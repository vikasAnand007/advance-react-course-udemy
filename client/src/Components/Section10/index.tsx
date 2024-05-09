import { Child, Container } from "../../Styled/StyledComponents";
import Button from "./Button";
import OptimisedContext from "./OptimisedContext";

const Section10 = () => {
  return (
    <Container>
      <div>
        Element Prop
        <Child>
          <Button>Button</Button>
          <span style={{ marginRight: "10px" }}></span>
          <Button As="a" href="https://www.youtube.com/">
            Link
          </Button>
        </Child>
      </div>
      <div>
        Optimised context
        <Child>
          <OptimisedContext />
        </Child>
      </div>
    </Container>
  );
};

export default Section10;
