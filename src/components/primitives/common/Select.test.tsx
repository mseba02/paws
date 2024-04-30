import { render, fireEvent } from '@testing-library/react';

import Select from './Select';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

describe('Select Component', () => {
  it('renders select component with options', () => {
    const { getByText } = render(<Select options={options} />);

    expect(getByText('Select')).toBeInTheDocument();

    fireEvent.click(getByText('Select'));

    options.forEach((option) => {
      expect(getByText(option.label)).toBeInTheDocument();
    });
  });

  it('selects an option', () => {
    const handleChange = jest.fn();
    const { getByText } = render(<Select onChange={handleChange} options={options} />);

    fireEvent.click(getByText('Select'));
    fireEvent.click(getByText('Option 1'));
    expect(getByText('Option 1')).toBeInTheDocument();

    expect(handleChange).toHaveBeenCalledWith('1');
  });

  it('filters options based on search term', () => {
    const { getByText, getByPlaceholderText } = render(<Select options={options} />);

    fireEvent.click(getByText('Select'));

    const searchInput = getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'Option 1' } });

    expect(getByText('Option 1')).toBeInTheDocument();
    expect(() => getByText('Option 2')).toThrow();
    expect(() => getByText('Option 3')).toThrow();
  });
});
