import { ReactElement, ReactNode } from "react";

export type ListItemType = {
  id: number;
  name: string;
  gender: number;
  age: number;
  birthplace: string;
  residence: string;
};

export type ColumnItem =
  | "id"
  | "name"
  | "gender"
  | "age"
  | "birthplace"
  | "residence";
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

export type Section = {
  title: string;
  component?: React.FC;
};

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type SectionList = Section[];

export type UserInfoProp = {
  user?: UserType;
};

// "ReactElement<UserInfoProp>" will ensure that UserComponentWraperPropType only accepts those children which accept "user" prop.
export type UserComponentWraperPropType = {
  children: ReactElement<UserInfoProp> | ReactElement<UserInfoProp>[];
};
