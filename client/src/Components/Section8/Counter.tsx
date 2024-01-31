import { useEffect, useState } from "react";
import { eventEmitter } from "./Parent";

const Counter = () => {
  const [count, setCount] = useState(10);

  const increase = () => {
    setCount((val) => val + 1);
  };
  const decrease = () => {
    setCount((val) => val - 1);
  };

  useEffect(() => {
    eventEmitter.on("inc", increase);
    eventEmitter.on("dec", decrease);

    return () => {
      eventEmitter.off("inc", increase);
      eventEmitter.off("dec", decrease);
    };
  }, []);
  return <div>Counter : {count}</div>;
};

export default Counter;
