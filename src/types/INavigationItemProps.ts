import { FC, SVGProps } from "react";

export type SVGReactComponent = FC<SVGProps<SVGSVGElement>>;

export interface INavigationItem {
  id: number;
  label: string;
  path: string;
  icon: SVGReactComponent; // This allows images, icons, or JSX components
}

export type INavigationItemProps = Omit<INavigationItem, "id">;
