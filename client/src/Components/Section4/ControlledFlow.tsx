import React from "react";
import { ControlledFlowPropType } from "../../Types";

const ControlledFlow = ({
  children,
  stepIndex,
  goNext,
}: ControlledFlowPropType) => {
  const currentElement: any = React.Children.toArray(children)[stepIndex];

  if (React.isValidElement(currentElement)) {
    // @ts-expect-error : dont know the cause of error
    return React.cloneElement(currentElement, { goNext });
  }

  return currentElement;
};

export default ControlledFlow;
