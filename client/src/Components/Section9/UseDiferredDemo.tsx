import React, { useState, useMemo, useDeferredValue } from "react";

function WoDiferred() {
  const [name, setName] = useState<string>("");

  const LIST_SIZE: number = 10000000;

  const list = useMemo(() => {
    const dataList: string[] = [];
    for (let i: number = 0; i < LIST_SIZE; i++) {
      dataList.push(name);
    }
    return [dataList[0]];
  }, [name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>
        {list.map((item) => {
          return <p>{item}</p>;
        })}
      </p>
    </div>
  );
}

function WithDiferred() {
  const [name, setName] = useState<string>("");
  const deferredName = useDeferredValue(name);

  const LIST_SIZE: number = 10000000;

  const list = useMemo(() => {
    const dataList: string[] = [];
    for (let i: number = 0; i < LIST_SIZE; i++) {
      dataList.push(deferredName);
    }
    return [dataList[0]];
  }, [deferredName]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>
        {list.map((item) => {
          return <p>{item}</p>;
        })}
      </p>
    </div>
  );
}

const UseDiferredDemo = () => {
  return (
    <div>
      <div>
        Without useDeferredValue
        <WoDiferred />
      </div>
      <div>
        With useDeferredValue
        <WithDiferred />
      </div>
    </div>
  );
};

export default UseDiferredDemo;
