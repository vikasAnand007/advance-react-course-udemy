import styled from "styled-components";
import { UserInfoProp } from "../../Types";

const Container = styled.div`
  border: 1px solid black;
  width: fit-content;
  padding: 10px;
`;

const UserInfo = ({ user }: UserInfoProp) => {
  if (!user) {
    return null;
  }
  return (
    <Container>
      <p>Id: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </Container>
  );
};

export default UserInfo;
