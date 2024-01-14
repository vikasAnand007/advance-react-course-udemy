import { Steps1, Steps2, Steps3 } from "./Steps";
import UncontrolledFlow from "./UncontrolledFlow";

const UfContainer = () => {
  const submitHandler = (data: any) => {
    console.log(data);
  };

  return (
    <UncontrolledFlow submitHandler={submitHandler}>
      <Steps1 />
      <Steps2 />
      <Steps3 />
    </UncontrolledFlow>
  );
};

export default UfContainer;
