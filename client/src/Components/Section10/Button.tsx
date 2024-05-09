type ButtonPropType<T = object> = {
  children: string;
  As?: React.ElementType;
} & T;


const Button = <T extends Record<string, any>>({
  children,
  As: Component = "button",
  ...otherProps
}: ButtonPropType<T>) => {
  return <Component {...otherProps} style={style}>{children}</Component>;
};

const style = {
    backgroundColor: "blue",
    border: "none",
    outline: "none",
    color: "black",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "5px",
    fontSize: 15
}

export default Button;
