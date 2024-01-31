import React from "react";
import Card from "./Card";

const CompoundComponent = () => {
  return (
    <Card>
      <Card.Header>
        <div>This is header</div>
      </Card.Header>
      <Card.Body>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer.
      </Card.Body>
      <Card.Footer>
        <div>This is footer</div>
      </Card.Footer>
    </Card>
  );
};

export default CompoundComponent;
