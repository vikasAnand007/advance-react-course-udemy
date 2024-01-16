import { useEffect, useState } from "react";
import { getData } from "../../../utils/helpers";
import RagularList from "../Layouts/List/RagularList";

const Right = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getData(setApiData);
  }, []);
  return (
    <>
      Right Section
      <RagularList
        items={apiData}
        size="large"
        columns={["name", "gender", "age", "birthplace", "residence"]}
      />
    </>
  );
};

export default Right;
