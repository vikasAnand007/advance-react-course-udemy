import mitt from "mitt";
import Buttons from "./Buttons";
import Counter from "./Counter";

export const eventEmitter = mitt();

const Parent = () => {
  return (
    <div>
      <Counter />
      <Buttons />
    </div>
  );
};

export default Parent;
