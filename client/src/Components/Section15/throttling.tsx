import useMousePosition from "./useMousePosition";

const Throttling = () => {
  const { x, y } = useMousePosition({ process: "throttle" });
  return (
    <div>
      Mouse position: <div>x:{x}</div> <div>y:{y}</div>
    </div>
  );
};

export default Throttling;
