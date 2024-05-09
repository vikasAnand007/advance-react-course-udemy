import { useSelector } from ".";

const Display = () => {
  const {
    state: { count },
  } = useSelector();
  return <div>{count}</div>;
};

export default Display;
