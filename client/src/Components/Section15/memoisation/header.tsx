import React, { memo } from "react";

const Header = ({ length }: { length: number }) => {
  console.log("Header re-renders ...")
  return <div>Items (total: {length})</div>;
};

export default memo(Header);
