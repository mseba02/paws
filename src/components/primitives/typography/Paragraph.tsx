import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwinds.ts';

export type Paragraph = HTMLAttributes<HTMLHeadingElement>;

export const Paragraph: FC<PropsWithChildren<Paragraph>> = ({ children, className }) => {
  const classes = cn('typography typography-paragraph', className);

  return <p className={classes}>{children}</p>;
};
