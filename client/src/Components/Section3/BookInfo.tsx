import styled from "styled-components";
import { BookInfoProp } from "../../Types";

const Container = styled.div`
  border: 1px solid black;
  width: fit-content;
  padding: 10px;
`;

const BookInfo = ({ book }: BookInfoProp) => {
  if (!book) {
    return null;
  }
  return (
    <Container>
      <p>Id: {book.id}</p>
      <p>Author: {book.author}</p>
      <p>Country: {book.country}</p>
      <p>Language: {book.language}</p>
      <p>Page count: {book.pages}</p>
      <p>Title: {book.title}</p>
    </Container>
  );
};

export default BookInfo;
