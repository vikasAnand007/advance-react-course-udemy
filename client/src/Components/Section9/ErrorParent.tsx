import { useState } from "react";
import ErrorBoundary from "./ErrorBoundry";
import ErrorChild from "./ErrorChild";

const Fallback = () => {
  return (
    <div style={{ border: "1px solid red", padding: "5px", color: "red" }}>
      Some error occured
    </div>
  );
};

const ErrorParent = () => {
  const [hasError, setHasError] = useState(false);

  const generateError = () => {
    setHasError(true);
  };
  return (
    <div>
      Parent Component{" "}
      <div>
        <button onClick={generateError}>Generate error</button>
      </div>
      <div style={{ padding: "10px", backgroundColor: "gray" }}>
        <ErrorBoundary Fallback={<Fallback />}>
          <ErrorChild hasError={hasError} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default ErrorParent;
