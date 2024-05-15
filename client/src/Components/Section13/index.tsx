import { QueryClient, QueryClientProvider } from "react-query";
import { Child, Container } from "../../Styled/StyledComponents";
import Books from "./69/books";
import UpdateBooks from "./70/updateBooks";
import BooksWithPagination from "./71/booksWithPagination";

const queryClient = new QueryClient();

const Section13 = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <div>
          Fetching Data with react query
          <Child>
            <Books />
          </Child>
        </div>
        <div>
          Updating Data with react query
          <Child>
            <UpdateBooks />
          </Child>
        </div>
        <div>
          Books with pagination
          <Child>
            <BooksWithPagination />
          </Child>
        </div>
      </Container>
    </QueryClientProvider>
  );
};

export default Section13;
