import SplitScreen from "./Layouts/SplitScreen/SplitScreen";
import Left from "./SplitScreen/Left";
import Right from "./SplitScreen/Right";

const Section2 = () => {
  return (
    <>
      Split Screen
      <SplitScreen leftWidth={1} rightWidth={2}>
        <Left />
        <Right />
      </SplitScreen>
    </>
  );
};

export default Section2;
