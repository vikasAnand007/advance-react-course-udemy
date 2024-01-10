import axios from "axios";
import React, { useEffect, useState } from "react";
import { ResourceLoaderPropType, UserType } from "../../Types";

const ResourceLoader = ({
  resourceUrl,
  resourceName,
  children,
}: ResourceLoaderPropType) => {
  const [resourceData, setResourceData] = useState<any | UserType>(null);
  useEffect(() => {
    (async () => {
      const data = await axios.get(resourceUrl);
      setResourceData(data.data);
    })();
  }, [resourceUrl]);
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

export default ResourceLoader;
