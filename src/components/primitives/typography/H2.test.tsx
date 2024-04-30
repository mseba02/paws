import { render } from '@testing-library/react';

import { H2 } from '@/components/primitives/typography/H2.tsx';

describe('Typography H2 Component', () => {
  const defaultProps: H2 = {
    className: 'custom-class',
  };

  it('renders h2 correctly', () => {
    const { getByText } = render(<H2 {...defaultProps}>Heading 1</H2>);
    expect(getByText('Heading 1')).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    const { container } = render(<H2 {...defaultProps}>Heading 2</H2>);
    const h2Element = container.querySelector('h2');
    expect(h2Element).toHaveClass('typography', 'typography-h2', 'custom-class');
  });

  it('renders without crashing', () => {
    expect(() => render(<H2 {...defaultProps}>Heading 1</H2>)).not.toThrow();
  });
});
