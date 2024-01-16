import styled from "styled-components";
import UserInfo from "../Section3/UserInfo";
import useResource from "./useResource.hook";
import BookInfo from "../Section3/BookInfo";

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Child = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

const Section6 = () => {
  const user = useResource("/user/1");
  const book = useResource("/book/1");
  return (
    <Container>
      <div>
        User data by custom hook
        <Child>
          <UserInfo user={user} />
        </Child>
      </div>
      <div>
        Book data by custom hook
        <Child>
          <BookInfo book={book} />
        </Child>
      </div>
    </Container>
  );
};

export default Section6;
