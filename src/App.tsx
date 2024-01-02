import Left from "./Components/Left";
import Right from "./Components/Right";
import SplitScreen from "./Layouts/SplitScreen";

const App = () => {
  return <SplitScreen Left={Left} Right={Right} />;
};

export default App;
