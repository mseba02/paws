import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwinds.ts';

export type H3 = HTMLAttributes<HTMLHeadingElement>;

export const H3: FC<PropsWithChildren<H3>> = ({ children, className }) => {
  const classes = cn('typography typography-h3', className);

  return <h3 className={classes}>{children}</h3>;
};
