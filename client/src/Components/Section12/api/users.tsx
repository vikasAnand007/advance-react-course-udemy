import { useEffect } from "react";
import useRequest from "./useRequest";
import { fetchUsers } from "./user.api";

const Users = () => {
  const { request, response: userList, state } = useRequest();
  const handleFetch = () => fetchUsers();
  useEffect(() => {
    request(handleFetch);
  }, []);
  return (
    <div>
      <h3>Users List</h3>
      <button onClick={() => request(fetchUsers)}>Load again</button>
      <br />
      {state === "PENDING" ? (
        "Loading..."
      ) : (
        <div>
          {userList &&
            userList.map((elem: { id: string; name: string }) => {
              return <p key={elem.id}>{elem.name}</p>;
            })}
        </div>
      )}
    </div>
  );
};

export default Users;
