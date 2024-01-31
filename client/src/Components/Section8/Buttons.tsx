import { eventEmitter } from "./Parent";

const Buttons = () => {
  return (
    <div>
      <button onClick={() => eventEmitter.emit("inc")}>+</button>
      <button onClick={() => eventEmitter.emit("dec")}>-</button>
    </div>
  );
};

export default Buttons;
