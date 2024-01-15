import { ComponentType } from "react";

const logProps = (Component: ComponentType<any>) => {
  return (props: any) => {
    console.log(props);
    return <Component {...props} />;
  };
};

export default logProps;
