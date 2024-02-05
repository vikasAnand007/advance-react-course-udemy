// Usecase
// suppose there is an input field which should get focused automatically when mounted

import { useCallback, useEffect, useRef, useState } from "react";

// with using useRef and useEffect ----
const WithUseRef = () => {
  const [show, setShow] = useState(false);
  const inputRef = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, [show]);
  return (
    <div>
      {show && <input ref={inputRef} type="text" />}
      <br />
      <button onClick={() => setShow(true)}>Show</button>
    </div>
  );
};

// with using useCallback as ref ----
const WithUseCallbackRef = () => {
  const [show, setShow] = useState(false);
  const inputRef = useCallback((element: HTMLInputElement) => {
    element.focus();
  }, []);

  return (
    <div>
      {show && <input ref={inputRef} type="text" />}
      <br />
      <button onClick={() => setShow(true)}>Show</button>
    </div>
  );
};

const UseCallbackAsRef = () => {
  return (
    <>
      <WithUseRef />
      <WithUseCallbackRef />
    </>
  );
};

export default UseCallbackAsRef;
