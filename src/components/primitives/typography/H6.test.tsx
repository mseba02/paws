import { render } from '@testing-library/react';

import { H6 } from '@/components/primitives/typography/H6.tsx';

describe('Typography H6 Component', () => {
  const defaultProps: H6 = {
    className: 'custom-class',
  };

  it('renders H6 correctly', () => {
    const { getByText } = render(<H6 {...defaultProps}>Heading 1</H6>);
    expect(getByText('Heading 1')).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    const { container } = render(<H6 {...defaultProps}>Heading 2</H6>);
    const h6Element = container.querySelector('h6');
    expect(h6Element).toHaveClass('typography', 'typography-h6', 'custom-class');
  });

  it('renders without crashing', () => {
    expect(() => render(<H6 {...defaultProps}>Heading 2</H6>)).not.toThrow();
  });
});
