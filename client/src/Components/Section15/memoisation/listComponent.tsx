import React, { memo } from "react";

const ListComponent = ({
  list,
  deleteItem,
}: {
  list: { name: string }[];
  deleteItem: (a: string) => void;
}) => {
  console.log("list component renders");
  return (
    <div>
      {list.map((e: { name: string }) => (
        <p key={e.name}>
          {e.name} <button onClick={() => deleteItem(e.name)}>X</button>
        </p>
      ))}
    </div>
  );
};

// wrapping in memo so that, it only re-renders when prop is changed.
export default memo(ListComponent);
