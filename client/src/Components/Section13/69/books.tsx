import { useQuery } from "react-query";
import { fetchBooks } from "./bookApis";

const Books = () => {
  const { data, isLoading, isSuccess, isError } = useQuery("books", fetchBooks);

  return (
    <div>
      <h3>Books List</h3>
      {isLoading ? (
        "Loading..."
      ) : isError ? (
        "Some error occured while loading data !"
      ) : isSuccess ? (
        <div>
          {data &&
            data.map((elem: { id: string; title: string }) => {
              return <p key={elem.id}>{elem.title}</p>;
            })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Books;
