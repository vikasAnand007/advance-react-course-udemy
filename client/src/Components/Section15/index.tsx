import { QueryClient, QueryClientProvider } from "react-query";
import { Child, Container } from "../../Styled/StyledComponents";
import CodeSandLL from "./codeSplitting";
import Memoisation from "./memoisation";
import Throttling from "./throttling";
import Debouncing from "./debouncing";

const queryClient = new QueryClient();

const Section15 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <div>
          Code splitting & lazy loading
          <Child>
            <CodeSandLL />
          </Child>
        </div>
        <div>
          Memoisation
          <Child>
            <Memoisation />
          </Child>
        </div>
        <div>
          Throttling
          <Child>
            <Throttling />
          </Child>
        </div>
        <div>
          Debouncing
          <Child>
            <Debouncing />
          </Child>
        </div>
      </Container>
    </QueryClientProvider>
  );
};

export default Section15;
