import { PropsWithChildren } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type TActionMenuProps = PropsWithChildren<{
  label: string;
}>;

export const ActionMenu = ({ children, label }: TActionMenuProps) => {
  return (
    <details className="relative inline-block text-left">
      <summary className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {label}
        <ChevronDownIcon
          className="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </summary>

      <ul className="py-1 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {children}
      </ul>
    </details>
  );
};
