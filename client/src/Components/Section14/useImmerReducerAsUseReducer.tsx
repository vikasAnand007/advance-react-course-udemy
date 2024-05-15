import { useSelector, useDispatch } from "./context";

const UseImmerReducerAsUseReducer = () => {
  const list = useSelector();
  const dispatch = useDispatch();
  const handleSelect = (ind: number) => {
    dispatch({
      type: "SELECT",
      payload: ind,
    });
  };

  return (
    <div>
      <h4>List (click to select)</h4>
      <div>
        {list.map((elem: any, ind: number) => {
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

export default UseImmerReducerAsUseReducer;
