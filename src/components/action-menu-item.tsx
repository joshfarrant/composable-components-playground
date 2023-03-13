export type TActionMenuItemProps = {
  href: string;
  label: string;
};

export const ActionMenuItem = ({ href, label }: TActionMenuItemProps) => (
  <li>
    <a href={href} className="text-gray-700 block px-4 py-2 text-sm">
      {label}
    </a>
  </li>
);
