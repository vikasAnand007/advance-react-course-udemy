import React, { useEffect, useState } from "react";
import { DataSourcePropType, UserType } from "../../Types";

const DataSource = ({
  getData,
  resourceName,
  children,
}: DataSourcePropType) => {
  const [resourceData, setResourceData] = useState<any | UserType>(null);
  useEffect(() => {
    (async () => {
      const data = await getData();
      setResourceData(data);
    })();
  }, [getData]);
  return (
    <>
      {resourceData ? (
        <>
          {React.Children.map(children, (elem, ind) => {
            if (React.isValidElement(elem)) {
              return React.cloneElement(elem, {
                [resourceName]: resourceData,
                key: ind,
              });
            }
            return elem;
          })}
        </>
      ) : (
        <span style={{ border: "1px solid black" }}>Data not loaded !</span>
      )}
    </>
  );
};

export default DataSource;
