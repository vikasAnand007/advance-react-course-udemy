import { QueryClient, QueryClientProvider } from "react-query";
import { Child, Container } from "../../Styled/StyledComponents";
import LayerImplement from "./layerImplement";
import SplitImplement from "./splitImplementation";
import ColumnImplement from "./columnImplementation";
import GridImplement from "./gridImplement";
import InlineBundleImplement from "./inlineBundleImplement";
import InlinePatternImplement from "./inlinePatternImplement";

const queryClient = new QueryClient();

const Section20 = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Container>
          <div>
            Layers
            <Child>
              <LayerImplement />
            </Child>
          </div>
          <div>
            Split
            <Child>
              <SplitImplement />
            </Child>
          </div>
          <div>
            Column
            <Child>
              <ColumnImplement />
            </Child>
          </div>
          <div>
            Grid
            <Child>
              <GridImplement />
            </Child>
          </div>
          <div>
            Inline bundle (resize screen to see effect)
            <Child>
              <InlineBundleImplement />
            </Child>
          </div>
          <div>
            Inline pattern (resize screen to see effect)
            <Child>
              <InlinePatternImplement />
            </Child>
          </div>
        </Container>
      </QueryClientProvider>
    </>
  );
};

export default Section20;
