import { ReactNode } from "react";
import styled from "styled-components";

type PropType = { children: ReactNode };

const CardBody = styled.div`
  border: 1px solid black;
  max-width: 300px;
`;
const CardHeader = styled.div`
  border-bottom: 1px solid black;
  padding: 10px;
`;
const CardFooter = styled.div`
  border-top: 1px solid black;
  padding: 10px;
`;
const CardContent = styled.div`
  padding: 10px;
`;

const Header = ({ children }: PropType) => {
  return <CardHeader>{children}</CardHeader>;
};
const Body = ({ children }: PropType) => {
  return <CardContent>{children}</CardContent>;
};
const Footer = ({ children }: PropType) => {
  return <CardFooter>{children}</CardFooter>;
};

const Card = ({ children }: PropType) => {
  return <CardBody>{children}</CardBody>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
