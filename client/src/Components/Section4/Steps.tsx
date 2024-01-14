import { useState } from "react";
import { StepComponentPropType } from "../../Types";

export const Steps1 = ({ goNext }: StepComponentPropType) => {
  const [name, setName] = useState("");
  return (
    <div>
      Step #1
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button
          onClick={() => {
            goNext && goNext({ name });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const Steps2 = ({ goNext }: StepComponentPropType) => {
  const [age, setAge] = useState("");
  return (
    <div>
      Step #2
      <div>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <button
          onClick={() => {
            goNext && goNext({ age });
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const Steps3 = ({ goNext }: StepComponentPropType) => {
  const [email, setEmail] = useState("");
  return (
    <div>
      Step #3
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button
          onClick={() => {
            goNext && goNext({ email }, true);
          }}
        >
          Steps
        </button>
      </div>
    </div>
  );
};
