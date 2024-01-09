import Left from "./Components/SplitScreen/Left";
import Right from "./Components/SplitScreen/Right";
import SplitScreen from "./Layouts/SplitScreen/SplitScreen";

const App = () => {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={2}>
        <Left />
        <Right />
      </SplitScreen>
    </>
  );
};

export default App;
