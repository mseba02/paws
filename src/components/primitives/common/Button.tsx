import React, { ButtonHTMLAttributes, FC, MouseEvent } from 'react';

import { cn } from '@/utils/tailwinds.ts';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  icon?: string;
};

export const Button: FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  onClick = () => null,
  type = 'button',
  disabled = false,
  loading = false,
  className,
  icon,
  ...rest
}) => {
  const classes = cn('btn btn-primary', className);
  const handleClick = (props: MouseEvent<HTMLButtonElement>) => !disabled && onClick(props);

  return (
    <button {...{ onClick: handleClick, disabled, type, ...rest }} className={classes}>
      {loading ? (
        'loading'
      ) : icon ? (
        <>
          {<img alt="button-icon" src={icon} />} {children}
        </>
      ) : (
        children
      )}
    </button>
  );
};
