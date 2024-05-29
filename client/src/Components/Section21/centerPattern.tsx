import React from "react";
import styled from "styled-components";
import { Layer } from "../Section20/styled/index";

type CenterProps = {
  maxWidth: string;
  centerText?: boolean;
  centerChildren?: boolean;
};

const Center = styled.div<CenterProps>`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-inline-size: ${(props: any) => props.maxWidth};

  ${(props) => (props?.centerText ? `text-align: center;` : "")}
  ${(props) =>
    props?.centerChildren
      ? `
  display: flex;
  flex-direction: column;
  align-items: center;
  `
      : ""}
`;

const CenterPattern = () => {
  return (
    <>
      <div style={{ width: "100vw", border: "1px solid red" }}>
        <Center maxWidth="100ch">
          <h2>I am a title!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </Center>
      </div>
      <div style={{ width: "100vw", border: "1px solid red" }}>
        <Center as={Layer} gap="xs" maxWidth="100ch">
          <h2>I am a title!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </Center>
      </div>
      <div style={{ width: "100vw", border: "1px solid red" }}>
        <Center maxWidth="100ch" centerChildren>
          <h2>I am a title!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </Center>
      </div>
      <div style={{ width: "100vw", border: "1px solid red" }}>
        <Center maxWidth="100ch" centerText>
          <h2>I am a title!</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </Center>
      </div>
    </>
  );
};

export default CenterPattern;
