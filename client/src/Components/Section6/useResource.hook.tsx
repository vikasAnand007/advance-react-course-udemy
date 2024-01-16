import { useEffect, useState } from "react";
import { getDataFromServer } from "../../utils/helpers";

const useResource = (url: string) => {
  const [resourceData, setResourceData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const data = await getDataFromServer(url);
      setResourceData(data);
    })();
  }, [url]);

  return resourceData;
};

export default useResource;
