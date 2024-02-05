import { useState } from "react";

const KeyProp = () => {
  const [shirtMode, setShirtMode] = useState(true);
  return (
    <div>
      <div>Mode: {shirtMode ? "shirt" : "pant"}</div>
      <div>
        Input without key prop
        <br />
        <input type="number" />
        <br />
        Input with key prop
        <br />
        <input key={shirtMode ? "shirt" : "pant"} type="number" />
      </div>
      <div>
        <button
          onClick={() => {
            setShirtMode((prev: boolean) => !prev);
          }}
        >
          Switch
        </button>
      </div>
    </div>
  );
};

export default KeyProp;
