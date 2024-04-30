import { render } from '@testing-library/react';

import { H1 } from '@/components/primitives/typography/H1.tsx';

describe('Typography H1 Component', () => {
  const defaultProps: H1 = {
    className: 'custom-class',
  };

  it('renders h1 correctly', () => {
    const { getByText } = render(<H1 {...defaultProps}>Heading 1</H1>);
    expect(getByText('Heading 1')).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    const { container } = render(<H1 {...defaultProps}>Heading 1</H1>);
    const h1Element = container.querySelector('h1');
    expect(h1Element).toHaveClass('typography', 'typography-h1', 'custom-class');
  });

  it('renders without crashing', () => {
    expect(() => render(<H1 {...defaultProps}>Heading 1</H1>)).not.toThrow();
  });
});
