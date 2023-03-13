import type { ReactNode } from "react";

type TProductListProps = {
  children: ReactNode;
};

export const ProductList = ({ children }: TProductListProps) => {
  return (
    <div className="mx-auto max-w-2xl grid grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4 lg:max-w-7xl xl:gap-x-8">
      {children}
    </div>
  );
};
