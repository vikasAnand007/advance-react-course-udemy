import { useQuery } from "react-query";
import { fetchBooks } from "../69/bookApis";
import { useState } from "react";

const BooksWithPagination = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isSuccess, isError, isPreviousData } =
    useQuery(["booksPagination", page], () => fetchBooks({ page }));

  return (
    <div>
      <h3>Books With Pagination </h3>
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
          <div>
            <button onClick={() => setPage(page <= 1 ? page : page - 1)}>
              prev
            </button>
            <span>{page}</span>
            <button onClick={() => setPage(page >= 3 ? page : page + 1)}>
              next
            </button>
          </div>
          {isFetching && <div>Fetching ....</div>}
          {isPreviousData && <div>Previous data ....</div>}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BooksWithPagination;
