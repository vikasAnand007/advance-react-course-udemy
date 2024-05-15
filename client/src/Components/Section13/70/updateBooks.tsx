import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { postBook, resetBooks } from "../69/bookApis";

const UpdateBooks = () => {
  const [newTitle, setNewTitle] = useState("");
  const queryClient = useQueryClient();

  const addBookMutation = useMutation(postBook);
  const resetBookMutation = useMutation(resetBooks);

  const onSubmit = () => {
    if (!newTitle) {
      alert("Please add title.");
      return;
    }
    addBookMutation.mutate(
      { title: newTitle },
      {
        onSuccess: () => {
          setNewTitle("");
          queryClient.invalidateQueries("books");
        },
      }
    );
  };

  const onReset = () => {
    resetBookMutation.mutate(
      {},
      {
        onSuccess: () => {
          queryClient.invalidateQueries("books");
        },
      }
    );
  };

  return (
    <div>
      <input
        type="text"
        value={newTitle}
        onChange={({ target }) => setNewTitle(target.value)}
      />
      <br />
      <button onClick={onSubmit}>Add</button>
      <br />
      <br />
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default UpdateBooks;
