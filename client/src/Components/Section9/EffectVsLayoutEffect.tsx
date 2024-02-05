import { useEffect, useLayoutEffect, useState } from "react";

const DemoUseEffect = () => {
  const [color, setColor] = useState("yellow");

  useEffect(() => {
    console.log("uesEffect in hook");
  }, [color]);

  console.log("uesEffect at render");
  return (
    <div>
      <div style={{ padding: "10px", backgroundColor: color }}>{color}</div>
      <button onClick={() => setColor("green")}>Start</button>
    </div>
  );
};

const DemoUseLayoutEffect = () => {
  const [color, setColor] = useState("yellow");

  useLayoutEffect(() => {
    console.log("uesLayoutEffect in hook");
  }, [color]);

  console.log("uesLayoutEffect at render");
  return (
    <div>
      <div style={{ padding: "10px", backgroundColor: color }}>{color}</div>
      <button onClick={() => setColor("green")}>Start</button>
    </div>
  );
};

const EffectVsLayoutEffect = () => {
  return (
    <div>
      <DemoUseEffect />
      <DemoUseLayoutEffect />
    </div>
  );
};

export default EffectVsLayoutEffect;
