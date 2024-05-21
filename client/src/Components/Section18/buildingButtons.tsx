import { Button, PrimaryButton } from "./component/button";

const BuildingButtons = () => {
  return (
    <div>
      <Button>Click me !</Button>
      <br />
      <Button disabled>Disabled</Button>
      <br />
      <Button className="large">Large</Button>
      <br />
      <Button className="small">Small</Button>
      <br />
      <PrimaryButton>Primary button</PrimaryButton>
    </div>
  );
};

export default BuildingButtons;
