import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Child = forwardRef((props, ref) => {
  const [fruit] = useState("Mango");

  useImperativeHandle(
    ref,
    () => {
      return {
        fruitName: fruit,
      };
    },
    []
  );
  return <div {...props}>child</div>;
});

const UseImperetiveHandleDemo = () => {
  const childRef = useRef<null | { fruitName: string }>(null);
  return (
    <div>
      <div>Fruit name in parent: {childRef?.current?.fruitName}</div>
      <Child ref={childRef} />
    </div>
  );
};

export default UseImperetiveHandleDemo;
