import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "filled" | "outline" | "text";
type ButtonType = "submit" | "button";
export type ButtonProps = {
  /**
   * the variant of the button to use
   * @default 'filled'
   * the type of the button to use
   * @default "button"
   */

  variant?: ButtonVariant;
  type?: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonStyles: { [key in ButtonVariant]: string } = {
  filled: "bg-primary-600 text-white border border-primary-600",
  outline: "bg-transparent text-primary-600 border border-primary-600",
  text: "bg-transparent text-primary-600 border-none",
};
const Button = ({
  variant = "filled",
  type = "button",
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center px-4 py-2 whitespace-nowrap rounded-md small-medium  disabled:pointer-events-none disabled:opacity-50",
        ButtonStyles[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
