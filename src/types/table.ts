export interface Column {
  key: string;
  label: string;
}

export interface StyledValue {
  style: {
    color: string;
    backgroundColor?: string;
  };
  value: string;
}

export interface ComponentValue {
  type: "component";
  component: React.FC<{ [key: string]: any }>;
  props?: {
    [key: string]: string | number;
  };
}

export type RowValue = Date | string | number | StyledValue | ComponentValue;

export interface Row {
  id: number;
  [key: string]: RowValue;
}
