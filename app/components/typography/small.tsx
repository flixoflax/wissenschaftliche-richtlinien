import * as React from 'react';
import { cn } from '~/lib/utils';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const Small = ({ children, className }: Props) => {
  return (
    <small className={cn('text-sm font-medium leading-none', className)}>
      {children}
    </small>
  );
};

export { Small };
