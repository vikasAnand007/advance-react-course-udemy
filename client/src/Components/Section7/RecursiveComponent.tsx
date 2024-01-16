import { MenuItemType, MenuListType } from "../../Types";

const menuList: MenuListType = [
  {
    name: "menu 1",
    children: [
      {
        name: "menu 1.1",
      },
      {
        name: "menu 1.2",
      },
    ],
  },
  {
    name: "menu 2",
    children: [
      {
        name: "menu 2.1",
        children: [
          {
            name: "menu 2.1.1",
          },
        ],
      },
    ],
  },
  {
    name: "menu 3",
  },
];

const RecursiveComponent = ({ list = menuList }: { list?: MenuListType }) => {
  return (
    <div style={{ marginLeft: "10px" }}>
      {list.map((elem: MenuItemType) => {
        if (elem?.children && elem.children.length > 0) {
          return (
            <li key={elem.name}>
              {elem.name}
              <RecursiveComponent list={elem.children} />
            </li>
          );
        }
        return <li>{elem.name}</li>;
      })}
    </div>
  );
};
export default RecursiveComponent;
