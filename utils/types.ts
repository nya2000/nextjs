import { HTMLInputTypeAttribute } from 'react';

export interface Field {
  label: string;
  id: number;
  required: boolean;
  type: HTMLInputTypeAttribute;
}

export interface FormProps {
  fields: Field[];
  inputClasses?: {
    label?: string;
    input?: string;
    innerWrapper?: string;
    inputWrapper?: string;
  };
  formClasses?: {
    wrapper?: string;
    form?: string;
  };
  onSubmit: (formData: { fieldsData: {} }) => void;
}
