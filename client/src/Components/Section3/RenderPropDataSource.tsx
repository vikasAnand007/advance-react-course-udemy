import { useEffect, useState } from "react";
import { RenderPropDataSourceType, UserType } from "../../Types";

const RenderPropDataSource = ({
  getData,
  render,
}: RenderPropDataSourceType) => {
  const [resourceData, setResourceData] = useState<any | UserType>(null);
  useEffect(() => {
    (async () => {
      const data = await getData();
      setResourceData(data);
    })();
  }, [getData]);
  return render(resourceData);
};

export default RenderPropDataSource;
