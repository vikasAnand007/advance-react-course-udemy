import { Grid } from "./styled";

const Card = () => {
  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Card
    </div>
  );
};
const GridImplement = () => {
  return (
    <div style={{width: "96vw"}}>
      <Grid minItemWidth="20rem" gap="xl">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
};

export default GridImplement;
