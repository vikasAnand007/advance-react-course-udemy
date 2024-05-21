import { QueryClient, QueryClientProvider } from "react-query";
import { Child, Container } from "../../Styled/StyledComponents";
import { GlobalStyles } from "./utils/global.style";
import BuildingButtons from "./buildingButtons";

const queryClient = new QueryClient();

const Section18 = () => {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Container>
          <div>
            Extensible foundations
            <Child></Child>
          </div>
          <div>
            Button component
            <Child>
              <BuildingButtons />
            </Child>
          </div>
        </Container>
      </QueryClientProvider>
    </>
  );
};

export default Section18;
