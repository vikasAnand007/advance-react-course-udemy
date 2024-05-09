import { ButtonPropsType } from "../../Types";

const buttonSizeMap = {
  small: "10px",
  medium: "15px",
  large: "20px",
};

const variantColorMap = {
  success: "green",
  error: "crimson",
  info: "yellow",
  normal: "white",
};
export const Button = ({
  children,
  size = "medium",
  variant = "normal",
  ...props
}: ButtonPropsType) => {
  return (
    <button
      style={{
        fontSize: buttonSizeMap[size],
        backgroundColor: variantColorMap[variant],
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export const DangerButton = ({ children, ...props }: ButtonPropsType) => {
  return (
    <Button {...props} variant="error">
      {children}
    </Button>
  );
};

export const InfoButton = ({ children, ...props }: ButtonPropsType) => {
  return (
    <Button {...props} variant="info">
      {children}
    </Button>
  );
};

export const SmallDangerButton = ({ children, ...props }: ButtonPropsType) => {
  return (
    <DangerButton {...props} size="small">
      {children}
    </DangerButton>
  );
};

export const LargeInfoButton = ({ children, ...props }: ButtonPropsType) => {
  return (
    <InfoButton {...props} size="large">
      {children}
    </InfoButton>
  );
};
