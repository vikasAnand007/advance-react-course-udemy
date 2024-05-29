import { QueryClient, QueryClientProvider } from "react-query";
import { Child, Container } from "../../Styled/StyledComponents";
import PadPattern from "./padPattern";
import CenterPattern from "./centerPattern";

const queryClient = new QueryClient();

const Section21 = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Container>
          <div>
            Pad Pattern
            <Child>
              <PadPattern />
            </Child>
          </div>
          <br />
          <div>
            Center Pattern
            <Child>
              <CenterPattern />
            </Child>
          </div>
        </Container>
      </QueryClientProvider>
    </>
  );
};

export default Section21;
