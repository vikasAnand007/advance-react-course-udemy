import { useEffect } from "react";
import useRequest from "./useRequest";
import { fetchUsers } from "./user.api";
import SmoothLoader from "./smoothLoader";

const UsersWithSmoothLoader = () => {
  const { request, response: userList, state } = useRequest();
  useEffect(() => {
    request(fetchUsers);
  }, []);
  return (
    <div>
      <h3>Users List</h3>
      <button onClick={() => request(fetchUsers)}>Load again</button>
      <br />
      <SmoothLoader show={state === "PENDING"} delay={400}>
        <div>
          {userList &&
            userList.map((elem: { id: string; name: string }) => {
              return <p key={elem.id}>{elem.name}</p>;
            })}
        </div>
      </SmoothLoader>
    </div>
  );
};

export default UsersWithSmoothLoader;
