import { useId } from "react";

const Child = () => {
  const uniqueId = useId();
  return (
    <div style={{ marginBottom: "10px" }}>
      <label htmlFor={uniqueId}>Input id: {uniqueId}</label>
      <input id={uniqueId} type="text" />
    </div>
  );
};

const UseIdDemo = () => {
  return (
    <div>
      <Child />
      <Child />
    </div>
  );
};

export default UseIdDemo;
