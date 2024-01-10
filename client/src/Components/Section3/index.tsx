import CurrentUserLoader from "./CurrentUserLoader";
import UserInfo from "./UserInfo";

const Section3 = () => {
  return (
    <div>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </div>
  );
};

export default Section3;
