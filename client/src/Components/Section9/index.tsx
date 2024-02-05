import { Child, Container } from "../../Styled/StyledComponents";
import EffectVsLayoutEffect from "./EffectVsLayoutEffect";
import ErrorParent from "./ErrorParent";
import EventBubbling from "./EventBubbling";
import EventCapturing from "./EventCapturing";
import ForwardRefExample from "./ForwardRefExample";
import KeyProp from "./KeyProp";
import Portals from "./Portals";
import UseCallbackAsRef from "./UseCallbackAsRef";
import UseDiferredDemo from "./UseDiferredDemo";
import UseIdDemo from "./UseIdDemo";
import UseImperetiveHandleDemo from "./UseImperetiveHandleDemo";
import UseTransitionDemo from "./UseTransitionDemo";

const Section9 = () => {
  return (
    <Container>
      <div>
        Modal with portals
        <Child>
          <Portals />
        </Child>
      </div>
      <div>
        forwadRef Use case
        <Child>
          <ForwardRefExample />
        </Child>
      </div>
      <div>
        Error Boundry
        <Child>
          <ErrorParent />
        </Child>
      </div>
      <div>
        Key Prop Use case
        <Child>
          <KeyProp />
        </Child>
      </div>
      <div>
        Event Bubbling
        <Child>
          <EventBubbling />
        </Child>
      </div>
      <div>
        Event Capturing
        <Child>
          <EventCapturing />
        </Child>
      </div>
      <div>
        useEffect v/s useLayoutEffect
        <Child>
          <EffectVsLayoutEffect />
        </Child>
      </div>
      <div>
        useId hook
        <Child>
          <UseIdDemo />
        </Child>
      </div>
      <div>
        useCallback as ref
        <Child>
          <UseCallbackAsRef />
        </Child>
      </div>
      <div>
        useImperativeHandle demo
        <Child>
          <UseImperetiveHandleDemo />
        </Child>
      </div>
      <div>
        useDeferredValue demo
        <Child>
          <UseDiferredDemo />
        </Child>
      </div>
      <div>
        useTransition demo
        <Child>
          <UseTransitionDemo />
        </Child>
      </div>
    </Container>
  );
};

export default Section9;
