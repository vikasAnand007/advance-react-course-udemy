import SmallListItem from "../../Components/List/SmallListItem";
import LargeListItem from "../../Components/List/LargeListItem";
import { RagularListPropType } from "../../Types";
import styled from "styled-components";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const RagularList = ({ items, columns, size }: RagularListPropType) => {
  return (
    <StyledTable>
      <tbody>
        {size === "small" &&
          items.map((item) => (
            <SmallListItem key={item.id} item={item} columns={columns} />
          ))}
        {size === "large" &&
          items.map((item) => (
            <LargeListItem key={item.id} item={item} columns={columns} />
          ))}
      </tbody>
    </StyledTable>
  );
};

export default RagularList;
