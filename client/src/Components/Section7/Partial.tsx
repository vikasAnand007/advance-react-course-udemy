import { ButtonPropsType, ButtonPropsTypeWoChildren } from "../../Types";
import { Button } from "./Composition";

const partialButton = (
  Component: React.FC<ButtonPropsType>,
  partialProps: ButtonPropsTypeWoChildren
) => {
  return (props: any) => {
    return <Component {...props} {...partialProps} />;
  };
};

export const PartialButton = partialButton(Button, {});
export const PartialDangerButton = partialButton(Button, { variant: "error" });
export const PartialInfoButton = partialButton(Button, { variant: "info" });
export const PartialSmallDangerButton = partialButton(PartialDangerButton, {
  size: "small",
});
export const PartialLargeInfoButton = partialButton(PartialInfoButton, {
  size: "large",
});
export const PartialCustomButton = partialButton(Button, {
  variant: "success",
  size: "medium",
});
