import styled from "styled-components";
import { ColumnItem, ListItemPropType } from "../../Types";

const StyledTd = styled.td`
  font-size: 16px;
  border: 1px solid #8a8a8a;
  text-align: left;
  padding: 8px;
`;

const StyledTr = styled.tr`
  border: 1px solid #8a8a8a;
  text-align: left;
  padding: 8px;
  &:nth-child(even){
    background-color: #dddddd;
  }
`;

const LargeListItem = ({ item, columns }: ListItemPropType) => {
  return (
    <StyledTr>
      {columns.map((elem: ColumnItem) => {
        return <StyledTd key={elem}>{item[elem]}</StyledTd>;
      })}
    </StyledTr>
  );
};

export default LargeListItem;
