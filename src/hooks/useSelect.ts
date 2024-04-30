import { useState, useRef } from 'react';

export type Option = {
  label: string;
  value: string;
};

export type CustomSelectProps = {
  options: Option[];
  onChange?: (value: string) => void;
  className?: string;
  variant?: 'default' | 'small';
};

const useCustomSelect = ({ options, onChange }: CustomSelectProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    if (onChange) {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  return {
    searchTerm,
    setSearchTerm,
    isOpen,
    setIsOpen,
    selectedOption,
    selectRef,
    filteredOptions,
    handleSelect,
  };
};

export default useCustomSelect;
