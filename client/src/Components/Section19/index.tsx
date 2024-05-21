import { QueryClient, QueryClientProvider } from "react-query";
import { Child, Container } from "../../Styled/StyledComponents";
import IncapsulatingStyles from "./incapsulatingStyles";
import StyleReusability from "./styleReusability";

const queryClient = new QueryClient();

const Section19 = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Container>
          <div>
            Incapsulating styles
            <Child>
              <IncapsulatingStyles />
            </Child>
          </div>
          <div>
            Style Reusability
            <Child>
              <StyleReusability />
            </Child>
          </div>
        </Container>
      </QueryClientProvider>
    </>
  );
};

export default Section19;
