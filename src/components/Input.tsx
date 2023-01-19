import { FC, InputHTMLAttributes, useState } from "react";

import { Input } from "react-daisyui";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string | number;
}

export const InputStd: FC<InputFormProps> = ({ placeholder, className }) => {
  return (
    <Input
      className={`w-full rounded-xl border-2 border-secondary h-12 mb-5 ${className}`}
      placeholder={placeholder}
    ></Input>
  );
};

export const InputForm: FC<InputFormProps> = ({
  placeholder,
  type,
  className,
  name,
  value,
}) => {
  return (
    <Input
      className={`text-black bg-form border-2 border-secondary rounded-lg w-full mt-2 ${className}`}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
    ></Input>
  );
};

export const InputFile = () => {
  return (
    <div className="p-20">
      <form>
        <label>
          <input
            type="file"
            className="text-sm 
          file:mr-5 file:py-2 file:px-6
          file:rounded-lg file:border-0
          file:text-sm file:font-medium
          file:bg-secondary
          hover:file:cursor-pointer 
        "
          />
        </label>
      </form>
    </div>
  );
};

export const InputFormEdit = () => {
  const [val, setVal] = useState<string | number>("prev value");
  const editVal = (e: any) => {
    setVal(e.target.value);
  };

  return (
    <Input
      className={`text-black bg-form border-2 border-secondary rounded-lg w-full mt-2 `}
      onChange={editVal}
      value={val}
    />
  );
};
