import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  level?: "primary" | "secondary";
};

export const Button = ({ level = "primary", ...props }: TButtonProps) => (
  <button
    type="button"
    className={clsx(
      "w-full rounded-md my-2 py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400",
      level === "primary" && "bg-indigo-600 text-white hover:bg-indigo-500",
      level === "secondary" &&
        "bg-white-400 text-black hover:bg-grey-100 border border-black"
    )}
    {...props}
  />
);
