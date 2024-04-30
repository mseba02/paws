import React from 'react';

import { Paragraph } from '@/components/primitives/typography/Paragraph.tsx';

import { useOutsideClick } from '@/hooks/useOutsideClick.ts';
import useCustomSelect, { CustomSelectProps } from '@/hooks/useSelect.ts';

import { cn } from '@/utils/tailwinds.ts';

import Arrow from '../../../assets/arrow.svg';

const Select: React.FC<CustomSelectProps> = ({ options, onChange, className, variant = 'default' }) => {
  const { searchTerm, setSearchTerm, isOpen, selectRef, setIsOpen, selectedOption, filteredOptions, handleSelect } =
    useCustomSelect({ options, onChange });
  useOutsideClick(selectRef, () => setIsOpen(false));

  const classes = cn(
    {
      'typography-select-default': variant === 'default',
      'typography-select-small': variant === 'small',
      'typography-select-default-active': isOpen && variant === 'default',
      'typography-select-small-active': isOpen && variant === 'small',
    },
    className,
  );

  return (
    <div ref={selectRef} className={classes}>
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
        <Paragraph className="flex items-center justify-between">
          {selectedOption ? selectedOption.label : 'Select'}
          {variant !== 'small' && (
            <img alt="arrow" className={isOpen ? 'rotate-180 ml-1' : 'ml-1'} src={Arrow} width={15} />
          )}
        </Paragraph>
      </div>
      {isOpen && (
        <div className="options-container">
          {variant !== 'small' && (
            <input
              className="input"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              type="text"
              value={searchTerm}
            />
          )}
          {filteredOptions.map((option) => {
            return (
              <div key={option.value} className="option" onClick={() => handleSelect(option)}>
                {option.value === selectedOption?.value ? <b>{selectedOption.label}</b> : option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
