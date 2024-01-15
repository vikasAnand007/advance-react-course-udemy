import styled from "styled-components";
import logProps from "./logProps.hoc";
import Child1 from "./Child1";
import includeUser from "./includeUser.hoc";
import UserInfo from "../Section3/UserInfo";
import includeEditableUser from "./includeEditableUser.hoc";
import includeResource from "./includeResource.hoc";
import BookInfo from "../Section3/BookInfo";

const LogPropHoc = logProps(Child1);
const IncludeUserHoc = includeUser(UserInfo, 2);
const IncludeEditableUser = includeEditableUser(UserInfo, 3);

const IncludeUserResource = includeResource(UserInfo, "/user/1", "user");
const IncludeBookResource = includeResource(BookInfo, "/book/1", "book");

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Child = styled.div`
  border: 1px solid black;
  padding: 10px;
`;

const Section4 = () => {
  return (
    <Container>
      <div>
        LogProp HOC
        <Child>
          <LogPropHoc name="Vikas" age={26} />
        </Child>
      </div>
      <div>
        Include user HOC
        <Child>
          <IncludeUserHoc />
        </Child>
      </div>
      <div>
        Include editable user HOC
        <Child>
          <IncludeEditableUser />
        </Child>
      </div>
      <div>
        Include user resource
        <Child>
          <IncludeUserResource />
        </Child>
      </div>
      <div>
        Include book resource
        <Child>
          <IncludeBookResource />
        </Child>
      </div>
    </Container>
  );
};

export default Section4;
