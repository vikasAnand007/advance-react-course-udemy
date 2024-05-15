import { useCallback, useMemo, useState } from "react";
import { data } from "./data";
import ListComponent from "./listComponent";
import Header from "./header";

const Memoisation = () => {
  const [list, setList] = useState(data);
  const [newItem, setNewIem] = useState("");

  const addToList = () => {
    setList((prev) => [...prev, { name: newItem }]);
    setNewIem("");
  };

  // every time newItem is updated, c0mponent re-renders and "deleteItem" is newly created. Since, "deleteItem" is passed as a prop in "ListComponent", it recognises a change in prop. hence "ListComponent" also get re-rendered. [SO using useCallback to cache the function]
  const deleteItem = useCallback((name: string) => {
    setList((prev) => prev.filter((e) => e.name !== name));
  }, []);

  // every time newItem is updated, c0mponent re-renders and "length" is newly created. Since, "length" is passed as a prop in "Header", it recognises a change in prop. hence "Header" also get re-rendered. [SO using useMemo to cache the value of length]
  const length = useMemo(() => list.length, [list]);

  return (
    <div>
      <Header length={length} />
      <ListComponent list={list} deleteItem={deleteItem} />
      <div>
        <input
          value={newItem}
          type="text"
          onChange={({ target }) => setNewIem(target.value)}
        />
        <button onClick={addToList}>Add</button>
      </div>
    </div>
  );
};

export default Memoisation;
