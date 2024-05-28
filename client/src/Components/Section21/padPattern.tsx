import styled from "styled-components";
import { AllowedSpaces, spaces } from "../Section20/styled/config";

type ParProps = { padding: AllowedSpaces | AllowedSpaces[] };

export const Pad = styled.div<ParProps>`
  padding: ${(props) => {
    return (
      []
        // @ts-expect-error - ssdsd
        .concat(props.padding)
        .map((paddingKey) => spaces[paddingKey])
        .join(" ")
    );
  }};
`;

const PadPattern = () => {
  return (
    <div>
      <Pad padding="l">
        <div>
          <h3>Gift Card</h3>
          <p>This is one of our gift cards you can buy</p>
          <div>
            <Pad as="button" padding={["s", "l"]}>
              buy
            </Pad>
          </div>
        </div>
      </Pad>
      <Pad padding="l">
        <div>
          <p>Includes</p>
          <ul>
            <li>This is inclsion number 1</li>
            <li>
              This is inclsion number 2, which comes after inclusion number 1
            </li>
            <li>This is inclsion number 3</li>
          </ul>
        </div>
      </Pad>
    </div>
  );
};

export default PadPattern;
