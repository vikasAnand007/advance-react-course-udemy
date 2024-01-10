import styled from "styled-components";
import { ColumnItem, ListItemPropType } from "../../../Types";

const StyledTd = styled.td`
  font-size: 12px;
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const StyledTr = styled.tr`
  border-bottom: 1px solid black;
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const SmallListItem = ({ item, columns }: ListItemPropType) => {
  return (
    <StyledTr>
      {columns.map((elem: ColumnItem) => {
        return <StyledTd key={elem}>{item[elem]}</StyledTd>;
      })}
    </StyledTr>
  );
};

export default SmallListItem;
