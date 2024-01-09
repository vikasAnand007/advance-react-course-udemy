import { ReactNode } from "react";

export type ListItemType = {
  id: number;
  name: string;
  gender: number;
  age: number;
  birthplace: string;
  residence: string;
};

export type ColumnItem = "id" | "name" | "gender" | "age" | "birthplace" | "residence";
export type ColumnItemList = ColumnItem[];

export type ListType = ListItemType[];
export type RagularListPropType = {
  items: ListType;
  columns: ColumnItemList;
  size: "small" | "large";
};
export type ListItemPropType = {
  item: ListItemType;
  columns: ColumnItemList;
};

export type SplitScreenPropTypes = {
  children: [ReactNode, ReactNode];
  leftWidth?: number;
  rightWidth?: number;
};
