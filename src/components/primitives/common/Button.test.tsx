import { render, fireEvent } from '@testing-library/react';

import { Button, ButtonProps } from './Button.tsx';

describe('Button component', () => {
  const defaultProps: ButtonProps = {
    children: 'Submit',
    onClick: jest.fn(),
    type: 'button',
    disabled: false,
    loading: false,
    className: 'btn',
    icon: 'icon.svg',
  };

  it('renders button text correctly', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('calls onClick handler when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button {...defaultProps} onClick={onClickMock} />);
    fireEvent.click(getByText('Submit'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('disables button when disabled prop is true', () => {
    const { getByText } = render(<Button {...defaultProps} disabled={true} />);
    const button = getByText('Submit') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it('displays loading text when loading prop is true', () => {
    const { getByText } = render(<Button {...defaultProps} loading={true} />);
    expect(getByText('loading')).toBeInTheDocument();
  });

  it('applies additional classNames correctly', () => {
    const { container } = render(<Button {...defaultProps} className="custom-btn" />);
    const button = container.querySelector('button');
    expect(button).toHaveClass('btn custom-btn');
  });

  it('renders icon when icon prop is provided', () => {
    const { getByAltText } = render(<Button icon="icon.svg">Button with Icon</Button>);
    expect(getByAltText('button-icon')).toBeInTheDocument();
  });

  it('renders children with icon when both icon and children are provided', () => {
    const { getByText, getByAltText } = render(
      <Button {...defaultProps} icon="icon.png">
        Click Me
      </Button>,
    );
    expect(getByAltText('button-icon')).toBeInTheDocument();
    expect(getByText('Click Me')).toBeInTheDocument();
  });
});
