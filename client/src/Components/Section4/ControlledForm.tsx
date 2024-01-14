import { useState } from "react";

// Here the state and behaviour of "input" element is managed from state of "ControlledForm" component.

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(name);
    console.log(age);
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ControlledForm;
