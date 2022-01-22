export type TComponent = {
  fieldName: string;
  isStrict: boolean;  
  type?: string;
  placeholder?: string;
  component?: JSX.Element;
};

export type TComponents = {
  firstName: TComponent;
  middleName: TComponent;
  lastName: TComponent;
  email: TComponent;
  phone: TComponent;
};

export type TCreateFieldProps<T = string> = {
  isCorrect: boolean;
  value: T;
};

export type TFieldsProps = {
  firstName: TCreateFieldProps;
  middleName: TCreateFieldProps;
  lastName: TCreateFieldProps;
  email: TCreateFieldProps;
  phone: TCreateFieldProps;
};

