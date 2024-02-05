const ErrorChild = ({ hasError }: { hasError: boolean }) => {
  if (hasError) {
    throw new Error("Custom error");
  }
  return <div>ErrorChild</div>;
};

export default ErrorChild;
