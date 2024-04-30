import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwinds.ts';

export type H5 = HTMLAttributes<HTMLHeadingElement>;

export const H5: FC<PropsWithChildren<H5>> = ({ children, className }) => {
  const classes = cn('typography typography-h5', className);

  return <h5 className={classes}>{children}</h5>;
};
