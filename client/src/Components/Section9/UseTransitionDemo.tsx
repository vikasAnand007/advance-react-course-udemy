import React, { useState, useTransition } from "react";

function WithTransition() {
  const [name, setName] = useState<string>("");
  const [lists, setLists] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const LIST_SIZE: number = 10000000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);

    startTransition(() => {
      const dataList: string[] = [];
      for (let i: number = 0; i < LIST_SIZE; i++) {
        dataList.push(value);
      }
      setLists([dataList[0]]);
    });
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        lists.map((list: string) => {
          return <div key={list}>{list}</div>;
        })
      )}
    </div>
  );
}

function WoTransition() {
  const [name, setName] = useState<string>("");
  const [lists, setLists] = useState<string[]>([]);
  const LIST_SIZE: number = 10000000;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);

    const dataList: string[] = [];
    for (let i: number = 0; i < LIST_SIZE; i++) {
      dataList.push(value);
    }
    setLists([dataList[0]]);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      {lists.map((list: string) => {
        return <div key={list}>{list}</div>;
      })}
    </div>
  );
}

const UseTransitionDemo = () => {
  return (
    <div>
      <div>
        Without useTransition
        <WoTransition />
      </div>
      <div>
        With useTransition
        <WithTransition />
      </div>
    </div>
  );
};

export default UseTransitionDemo;
