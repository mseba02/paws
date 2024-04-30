import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwinds.ts';

export type H1 = HTMLAttributes<HTMLHeadingElement>;

export const H1: FC<PropsWithChildren<H1>> = ({ children, className }) => {
  const classes = cn('typography typography-h1', className);

  return <h1 className={classes}>{children}</h1>;
};
