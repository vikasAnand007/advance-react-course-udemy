import { Child, Container } from "../../Styled/StyledComponents";
import Users from "./api/users";
import UsersWithSmoothLoader from "./api/usersWithSmoothLoader";
import UsersWithAbort from "./api2/users";

const Section12 = () => {
  return (
    <Container>
      <div>
        Building An API layer
        <Child>
          <Users />
        </Child>
      </div>
      <div>
        Without flickering loader
        <br />
        (wont show loader if api response time is less then 400ms)
        <Child>
          <UsersWithSmoothLoader />
        </Child>
      </div>
      <div>
        With request abort feature
        <br />
        (Previous request eill be aborted if new request is made before the response of previous request. See console)
        <Child>
          <UsersWithAbort />
        </Child>
      </div>
    </Container>
  );
};

export default Section12;
