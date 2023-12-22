import React from "react";

const shapes = { round: "rounded-lg" } as const;
const variants = {
  outline: { blue_600: "border-2 border-blue-600 border-solid text-blue-600" },
  fill: {
    blue_gray_50: "bg-blue_gray-50 text-gray-900",
    yellow_100: "bg-yellow-100 text-gray-800",
    blue_600: "bg-blue-600 text-white-A700",
    orange_A400: "bg-orange-A400 text-white-A700",
    white_A700: "bg-white-A700",
    gray_100: "bg-gray-100 text-gray-700",
    black_900: "bg-black-900 text-white-A700",
  },
} as const;
const sizes = {
  xs: "p-2",
  sm: "p-3",
  md: "pl-[9px] pr-2.5 py-[15px]",
  lg: "p-[17px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
