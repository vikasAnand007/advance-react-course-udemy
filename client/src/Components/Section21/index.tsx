import { QueryClient, QueryClientProvider } from "react-query";
import { Child, Container } from "../../Styled/StyledComponents";
import PadPattern from "./padPattern";

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
        </Container>
      </QueryClientProvider>
    </>
  );
};

export default Section21;
