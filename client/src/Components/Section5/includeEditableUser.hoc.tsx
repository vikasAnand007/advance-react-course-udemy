import { ComponentType, FormEvent, useEffect, useState } from "react";
import { UserType } from "../../Types";
import { getDataFromServer, updateData } from "../../utils/helpers";
import ControlledModal from "../Section4/ControlledModal";

const includeEditableUser = (Component: ComponentType<any>, userId: number) => {
  return (props: any) => {
    const [isEditModelOpen, setIsEditModelOpen] = useState(false);
    const [user, setUser] = useState<null | UserType>(null);

    const [updates, setUpdates] = useState({ username: "" });

    useEffect(() => {
      (async () => {
        const data = await getDataFromServer(`/user/${userId}`);
        setUser(data);
        setUpdates(data);
      })();
    }, []);

    const updateHandler = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await updateData(`/user/${userId}`, { updates });
      setUser(result);
      setIsEditModelOpen(false);
    };

    return (
      <>
        <Component {...props} user={user} />
        <div>
          <button onClick={() => setIsEditModelOpen(true)}>Edit</button>
        </div>
        <ControlledModal
          isOpen={isEditModelOpen}
          onClose={() => setIsEditModelOpen(false)}
        >
          <form onSubmit={updateHandler}>
            <input
              value={updates?.username}
              placeholder="Username"
              onChange={(e) =>
                setUpdates((p) => ({ ...p, username: e.target.value }))
              }
            />
            <input type="submit" value="Update" />
          </form>
        </ControlledModal>
      </>
    );
  };
};

export default includeEditableUser;
