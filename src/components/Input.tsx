import { FC, InputHTMLAttributes } from "react";

import { Input } from "react-daisyui";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: string;
  className?: string;
}

export const InputForm: FC<InputFormProps> = ({ placeholder, type, className }) => {
  return (
    <Input
      className={`text-black bg-form border-2 border-secondary rounded-lg w-full mt-2 ${className}`}
      placeholder={placeholder}
      type={type}
    ></Input>
  );
};
