import UserInfo from "../Section3/UserInfo";
import useResource from "./useResource.hook";
import BookInfo from "../Section3/BookInfo";
import { Child, Container } from "../../Styled/StyledComponents";



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
