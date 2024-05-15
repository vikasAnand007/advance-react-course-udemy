import { QueryClient, QueryClientProvider } from "react-query";
import { Child, Container } from "../../Styled/StyledComponents";
import UseImmerAsUseState from "./useImmerAsUseState";
import UseImmerReducerAsUseReducer from "./useImmerReducerAsUseReducer";
import ContextProvider from "./context";

const queryClient = new QueryClient();

const Section14 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <div>
          Immutable updates with useImmer
          <Child>
            <UseImmerAsUseState />
          </Child>
        </div>
        <div>
          Immutable updates in reducer with useImmerReducer
          <Child>
            <ContextProvider>
              <UseImmerReducerAsUseReducer />
            </ContextProvider>
          </Child>
        </div>
      </Container>
    </QueryClientProvider>
  );
};

export default Section14;
