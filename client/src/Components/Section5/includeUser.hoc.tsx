import { ComponentType, useEffect, useState } from "react";
import { UserType } from "../../Types";
import { getDataFromServer } from "../../utils/helpers";

const includeUser = (Component: ComponentType<any>, userId: number) => {
  return (props: any) => {
    const [user, setUser] = useState<any | UserType>(null);

    useEffect(() => {
      (async () => {
        const data = await getDataFromServer(`/user/${userId}`);
        setUser(data);
      })();
    }, []);

    return <Component {...props} user={user} />;
  };
};

export default includeUser;
