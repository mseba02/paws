import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwinds.ts';

export type H4 = HTMLAttributes<HTMLHeadingElement>;

export const H4: FC<PropsWithChildren<H4>> = ({ children, className }) => {
  const classes = cn('typography typography-h4', className);

  return <h4 className={classes}>{children}</h4>;
};
