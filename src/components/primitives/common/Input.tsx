import React, { ChangeEvent } from 'react';

import { cn } from '@/utils/tailwinds.ts';

type Input = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  label?: string;
  className?: string;
  htmlFor?: string;
  icon?: string;
  onClickIcon?: () => void;
};

const Input: React.FC<Input> = ({
  value,
  onChange,
  placeholder,
  type = 'text',
  className,
  label,
  htmlFor,
  icon,
  onClickIcon,
}) => {
  const classes = cn('inline-flex justify-between items-center', className);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleButtonClick = () => {
    if (onClickIcon) {
      onClickIcon();
    }
  };
  return (
    <div className={classes}>
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <input
        className="typography typography-input"
        id={htmlFor}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {icon && (
        <button className="-ml-5" onClick={handleButtonClick}>
          <img alt="input icon" src={icon} width={20} />
        </button>
      )}
    </div>
  );
};

export default Input;
