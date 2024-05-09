import ContextProvider from "./context";
import ContextButtons from "./context/buttons";
import Display from "./context/display";

const OptimisedContext = () => {
  return (
    <ContextProvider>
      <Display />
      <ContextButtons />
    </ContextProvider>
  );
};

export default OptimisedContext;
