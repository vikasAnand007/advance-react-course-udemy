import { Child, Container } from "../../Styled/StyledComponents";
import CompoundComponent from "./CompoundComponent";
import Parent from "./Parent";

const Section8 = () => {
  return (
    <Container>
      <div>
        Compound component
        <Child>
          <CompoundComponent />
        </Child>
      </div>
      <div>
        counter by observer/subscriber pattern
        <Child>
          <Parent />
        </Child>
      </div>
    </Container>
  );
};

export default Section8;
