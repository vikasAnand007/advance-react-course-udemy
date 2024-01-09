import { useEffect, useState } from "react";
import { getData } from "../../utils/helpers";
import RagularList from "../../Layouts/List/RagularList";
import Modal from "../Modal/Modal";

const Left = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getData(setApiData);
  }, []);
  return (
    <>
      <RagularList items={apiData} size="small" columns={["name", "gender"]} />
      <Modal>
        <h3>Modal Title</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </Modal>
    </>
  );
};

export default Left;
