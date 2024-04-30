import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input component', () => {
  const defaultProps = {
    label: 'Test Label',
    htmlFor: 'test-id',
    placeholder: 'Test Placeholder',
    className: 'test-class',
    type: 'text',
    value: 'Test Value',
    onChange: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with provided props', () => {
    const { getByLabelText } = render(<Input {...defaultProps} />);

    const inputElement = getByLabelText('Test Label');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', 'test-id');
    expect(inputElement).toHaveAttribute('placeholder', 'Test Placeholder');
    expect(inputElement).toHaveValue('Test Value');
  });

  it('renders label if provided', () => {
    const { getByText } = render(<Input {...defaultProps} />);

    const labelElement = getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', 'test-id');
  });

  it('does not render label if not provided', () => {
    const { queryByLabelText } = render(<Input {...defaultProps} label={undefined} />);

    expect(queryByLabelText('Test Label')).toBeNull();
  });

  it('triggers onChange event with input value', () => {
    const { getByLabelText } = render(<Input {...defaultProps} />);

    const inputElement = getByLabelText('Test Label');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
    expect(defaultProps.onChange).toHaveBeenCalledWith('New Value');
  });

  it('does not trigger onChange event if onChange is not provided', () => {
    const { getByLabelText } = render(<Input {...defaultProps} onChange={undefined} />);

    const inputElement = getByLabelText('Test Label');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(defaultProps.onChange).not.toHaveBeenCalled();
  });
});
