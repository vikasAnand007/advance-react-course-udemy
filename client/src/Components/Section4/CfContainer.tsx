import { useState } from "react";
import ControlledFlow from "./ControlledFlow";
import { Steps1, Steps2, Steps3 } from "./Steps";
import { GoNextType } from "../../Types";

const CfContainer = () => {
  const [data, setData] = useState({});
  const [stepIndex, setStepIndex] = useState(0);

  const submitHandler = (data: any) => {
    console.log(data);
  };

  const goNext: GoNextType = (dataFromStep, isLast = false) => {
    const newData = {
      ...data,
      ...dataFromStep,
    };
    setData(newData);
    if (isLast) {
      submitHandler(newData);
      return;
    }
    setStepIndex((prev) => prev + 1);
  };

  return (
    <ControlledFlow
      submitHandler={submitHandler}
      stepIndex={stepIndex}
      goNext={goNext}
    >
      <Steps1 />
      <Steps2 />
      <Steps3 />
    </ControlledFlow>
  );
};

export default CfContainer;
