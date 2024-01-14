import { useRef } from "react";

// Here the state and behaviour of "input" element is managed from the element iself (ref is only used to read the values of element).

const UncontrolledForm = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(nameRef?.current?.value);
    console.log(ageRef?.current?.value);
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <input name="name" type="text" placeholder="Name" ref={nameRef} />
      <br />
      <input name="age" type="number" placeholder="Age" ref={ageRef} />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledForm;
