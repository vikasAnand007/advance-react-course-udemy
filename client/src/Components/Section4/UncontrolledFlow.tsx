import React, { useState } from "react";
import { GoNextType, UncontrolledFlowPropType } from "../../Types";

const UncontrolledFlow = ({
  children,
  submitHandler,
}: UncontrolledFlowPropType) => {
  const [data, setData] = useState({});
  const [stepIndex, setStepIndex] = useState(0);

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

  const currentElement: any = React.Children.toArray(children)[stepIndex];

  if (React.isValidElement(currentElement)) {
    return React.cloneElement(currentElement, { goNext });
  }

  return currentElement;
};

export default UncontrolledFlow;
