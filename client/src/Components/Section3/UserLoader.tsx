import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URI } from "../../Config";
import { UserLoaderPropType, UserType } from "../../Types";

const UserLoader = ({ userId, children }: UserLoaderPropType) => {
  const [userData, setUserData] = useState<any | UserType>(null);
  useEffect(() => {
    (async () => {
      const data = await axios.get(`${API_URI}/user/${userId}`);
      setUserData(data.data);
    })();
  }, [userId]);
  return (
    <>
      {userData ? (
        <>
          {React.Children.map(children, (elem, ind) => {
            if (React.isValidElement(elem)) {
              return React.cloneElement(elem, { user: userData, key: ind });
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

export default UserLoader;
