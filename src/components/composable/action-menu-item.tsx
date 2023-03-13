import { PropsWithChildren } from "react";

export type TActionMenuItemProps = PropsWithChildren<{
  href: string;
}>;

export const ActionMenuItem = ({ children, href }: TActionMenuItemProps) => (
  <li>
    <a href={href} className="text-gray-700 block px-4 py-2 text-sm">
      {children}
    </a>
  </li>
);
