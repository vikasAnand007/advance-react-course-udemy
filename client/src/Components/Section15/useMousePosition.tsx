import { useEffect, useState } from "react";
import { debounce, throttle } from "./helper";

const useMousePosition = (options?: {
  delay?: number;
  process: "throttle" | "debounce";
}) => {
  const delay = options?.delay || 500;
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    let onMouseMove;

    if (options?.process === "debounce") {
      onMouseMove = debounce((e: any) => {
        const { clientX: x, clientY: y } = e;
        setPosition({
          x,
          y,
        });
      }, delay);
    } else {
      onMouseMove = throttle((e: any) => {
        const { clientX: x, clientY: y } = e;
        setPosition({
          x,
          y,
        });
      }, delay);
    }

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return position;
};

export default useMousePosition;
