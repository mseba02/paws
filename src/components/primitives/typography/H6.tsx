import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwinds.ts';

export type H6 = HTMLAttributes<HTMLHeadingElement>;

export const H6: FC<PropsWithChildren<H6>> = ({ children, className }) => {
  const classes = cn('typography typography-h6', className);

  return <h6 className={classes}>{children}</h6>;
};
