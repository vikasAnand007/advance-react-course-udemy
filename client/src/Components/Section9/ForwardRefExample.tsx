import React, { forwardRef, ForwardedRef, HTMLProps } from "react";

const Children = forwardRef(
  (props: HTMLProps<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) => {
    return <input {...props} ref={ref} />;
  }
);

const ForwardRefExample = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const printHandler = () => {
    console.log(inputRef?.current?.value);
  };

  return (
    <div>
      <Children ref={inputRef} />
      <button onClick={printHandler}>Print</button>
    </div>
  );
};

export default ForwardRefExample;
