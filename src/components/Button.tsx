import { FC, ButtonHTMLAttributes } from "react";

import { Button } from "react-daisyui";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | JSX.Element;
  className?: string;
  disabled?: boolean;
}

export const ButtonPrimary: FC<ButtonProps> = ({
  label,
  className,
  disabled,
}) => {
  return (
    <Button
      disabled={disabled}
      className={`w-full bg-primary text-white mt-4 hover:bg-accent ${className}`}
    >
      {label}
    </Button>
  );
};
export const ButtonSecondary: FC<ButtonProps> = ({ label, className }) => {
  return (
    <Button
      className={`w-full bg-secondary text-white mt-4 hover:bg-zinc-800 ${className}`}
    >
      {label}
    </Button>
  );
};
export const ButtonAccent: FC<ButtonProps> = ({ label, className }) => {
  return (
    <Button className={`w-full mt-4 text-white bg-accent ${className}`}>
      {label}
    </Button>
  );
};
