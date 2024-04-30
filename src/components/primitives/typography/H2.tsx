import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwinds.ts';

export type H2 = HTMLAttributes<HTMLHeadingElement>;

export const H2: FC<PropsWithChildren<H2>> = ({ children, className }) => {
  const classes = cn('typography typography-h2', className);

  return <h2 className={classes}>{children}</h2>;
};
