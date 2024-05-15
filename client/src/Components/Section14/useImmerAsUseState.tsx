// import { useState } from "react";
import { useImmer } from "use-immer";
import { data } from "./data";

const UseImmerAsUseState = () => {
  // WITHOUT USE-IMMER ---------------------------------
  //   const [list, setList] = useState(data);
  //   const handleSelect = (ind: number) => {
  //     setList((prev) => {
  //       return [
  //         ...prev.map((e, i) => {
  //           if (i === ind) {
  //             return { ...e, selected: e.selected ? false : true };
  //           } else {
  //             return e;
  //           }
  //         }),
  //       ];
  //     });
  //   };

  // WITH USE-IMMER ---------------------------------
  const [list, setList] = useImmer(data);
  const handleSelect = (ind: number) => {
    setList((prev) => {
      prev[ind].selected = prev[ind].selected ? false : true;
    });
  };

  return (
    <div>
      <h4>List (click to select)</h4>
      <div>
        {list.map((elem, ind) => {
          return (
            <div
              key={ind}
              style={{ cursor: "pointer", marginBottom: "10px" }}
              onClick={() => handleSelect(ind)}
            >
              {elem.title} - {elem.subTitle}{" "}
              {elem.selected ? <i>(Selected)</i> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseImmerAsUseState;
