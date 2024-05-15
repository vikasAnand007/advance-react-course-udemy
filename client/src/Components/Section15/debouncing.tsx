import useMousePosition from "./useMousePosition";

const Debouncing = () => {
  const { x, y } = useMousePosition({ process: "debounce" });
  return (
    <div>
      Mouse position: <div>x:{x}</div> <div>y:{y}</div>
    </div>
  );
};

export default Debouncing;
