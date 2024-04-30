import { render } from '@testing-library/react';

import { H4 } from '@/components/primitives/typography/H4.tsx';

describe('Typography H4 Component', () => {
  const defaultProps: H4 = {
    className: 'custom-class',
  };

  it('renders H4 correctly', () => {
    const { getByText } = render(<H4 {...defaultProps}>Heading 1</H4>);
    expect(getByText('Heading 1')).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    const { container } = render(<H4 {...defaultProps}>Heading 2</H4>);
    const h4Element = container.querySelector('h4');
    expect(h4Element).toHaveClass('typography', 'typography-h4', 'custom-class');
  });

  it('renders without crashing', () => {
    expect(() => render(<H4 {...defaultProps}>Heading 2</H4>)).not.toThrow();
  });
});
