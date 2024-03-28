import * as React from "react";

import { cn } from "~/lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Large = ({ children, className }: Props) => {
  return <p className={cn("text-lg font-semibold", className)}>{children}</p>;
};

export { Large };
