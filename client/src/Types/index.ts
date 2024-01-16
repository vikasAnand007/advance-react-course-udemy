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

export type SectionList = Section[];

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type BookType = {
  id: number;
  author: string;
  country: string;
  language: string;
  pages: number;
  title: string;
};

export type UserInfoProp = {
  user?: UserType;
};

export type BookInfoProp = {
  book?: BookType;
};

// "ReactElement<UserInfoProp>" will ensure that UserComponentWraperPropType only accepts those children which accept "user" prop.
export type UserComponentWraperPropType = {
  children: ReactElement<UserInfoProp> | ReactElement<UserInfoProp>[];
};

export type ResourceComponentWraperPropType = {
  children:
    | ReactElement<UserInfoProp | BookInfoProp>
    | ReactElement<UserInfoProp | BookInfoProp>[];
};

export type UserLoaderPropType = UserComponentWraperPropType & {
  userId: number;
};

export type ResourceLoaderPropType = ResourceComponentWraperPropType & {
  resourceUrl: string;
  resourceName: string;
};

export type DataSourcePropType = ResourceComponentWraperPropType & {
  getData: () => any;
  resourceName: string;
};
export type RenderPropRenderFunctionType = (params: BookType) => ReactNode;
export type RenderPropDataSourceType = {
  getData: () => any;
  render: RenderPropRenderFunctionType;
};

export type ControlledModalPropType = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export type GoNextType = (p1: any, p2?: boolean) => void;

// export type StepComponentPropType = {
//   goNext?: GoNextType;
// };
export type StepComponentPropType = any;

export type StepComponentType = ReactElement<StepComponentPropType>;

export type UncontrolledFlowPropType = {
  children: StepComponentType | StepComponentType[];
  submitHandler: (p: any) => void;
};

export type ControlledFlowPropType = {
  children: StepComponentType | StepComponentType[];
  submitHandler: (p: any) => void;
  stepIndex: number;
  goNext: GoNextType;
};

export type MenuItemType = {
  name: string;
  children?: MenuListType;
};

export type MenuListType = MenuItemType[];

export type ButtonPropsTypeWoChildren = {
  size?: "small" | "medium" | "large";
  variant?: "success" | "error" | "info" | "normal";
  props?: any;
};

export type ButtonPropsType = {
  children: string;
} & ButtonPropsTypeWoChildren;
