import * as React from "react";

import { cn } from "~/lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const H1 = ({ children, className }: Props) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export { H1 };
