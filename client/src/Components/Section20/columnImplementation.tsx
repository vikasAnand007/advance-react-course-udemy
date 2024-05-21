import { Column, ColumnContainer, Layer } from "./styled";

const ColumnImplement = () => {
  return (
    <Layer>
      <ColumnContainer columns={12}>
        <Column col={8}>
          <Layer gap="s">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </Layer>
        </Column>
        <Column col={4}>
          <Layer gap="s">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </Layer>
        </Column>
      </ColumnContainer>
      <ColumnContainer columns={12}>
        <Column col={4}>
          <Layer gap="s">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </Layer>
        </Column>
        <Column col={4}>
          <Layer gap="s">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </Layer>
        </Column>
        <Column col={4}>
          <Layer gap="s">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </Layer>
        </Column>
      </ColumnContainer>

      <ColumnContainer columns={6}>
        <Column col={3}>
          <Layer gap="s">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </Layer>
        </Column>
        <Column col={3}>
          <Layer gap="s">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </Layer>
        </Column>
      </ColumnContainer>
      <ColumnContainer columns={2}>
        <Column col={1}>
          <Layer gap="s">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </Layer>
        </Column>
      </ColumnContainer>
    </Layer>
  );
};

export default ColumnImplement;
