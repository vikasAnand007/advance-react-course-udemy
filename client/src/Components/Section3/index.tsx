import styled from "styled-components";
import CurrentUserLoader from "./CurrentUserLoader";
import UserInfo from "./UserInfo";
import UserLoader from "./UserLoader";
import ResourceLoader from "./ResourceLoader";
import { API_URI } from "../../Config";
import BookInfo from "./BookInfo";
import DataSource from "./DataSource";
import { getDataFromServer } from "../../utils/helpers";
import RenderPropDataSource from "./RenderPropDataSource";

const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Section3 = () => {
  return (
    <Container>
      <div>
        current user
        <CurrentUserLoader>
          <UserInfo />
        </CurrentUserLoader>
      </div>
      <div>
        user with id 2
        <UserLoader userId={2}>
          <UserInfo />
        </UserLoader>
      </div>
      <div>
        user with id 3
        <UserLoader userId={3}>
          <UserInfo />
        </UserLoader>
      </div>
      <div>
        user 4 with resourceloader
        <ResourceLoader resourceName="user" resourceUrl={`${API_URI}/user/4`}>
          <UserInfo />
        </ResourceLoader>
      </div>
      <div>
        book 1 with resourceloader
        <ResourceLoader resourceName="book" resourceUrl={`${API_URI}/book/1`}>
          <BookInfo />
        </ResourceLoader>
      </div>
      <div>
        book 2 with dataSource
        <DataSource
          resourceName="book"
          getData={async () => await getDataFromServer("/book/2")}
        >
          <BookInfo />
        </DataSource>
      </div>
      <div>
        book 3 with render prop
        <RenderPropDataSource
          getData={async () => await getDataFromServer("/book/3")}
          render={(resourceData) => <BookInfo book={resourceData} />}
        />
      </div>
    </Container>
  );
};

export default Section3;
