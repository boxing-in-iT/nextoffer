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
  component: React.ComponentType<{ [key: string]: string | number }>; // Specify the component type
  props?: { [key: string]: string | number }; // props can be string or number, as per your existing structure
}

export type RowValue = Date | string | number | StyledValue | ComponentValue;

export interface Row {
  id: number;
  [key: string]: RowValue;
}
