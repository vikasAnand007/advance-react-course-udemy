import { ComponentType, useEffect, useState } from "react";
import { getDataFromServer } from "../../utils/helpers";

const includeResource = (
  Component: ComponentType<any>,
  url: string,
  resourceName: string
) => {
  return (props: any) => {
    const [resource, setResource] = useState<any>(null);

    useEffect(() => {
      (async () => {
        const data = await getDataFromServer(url);
        setResource(data);
      })();
    }, []);

    const childrenProps = {
      [resourceName]: resource,
    };

    return <Component {...props} {...childrenProps} />;
  };
};

export default includeResource;
