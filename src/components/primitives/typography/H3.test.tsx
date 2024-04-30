import { render } from '@testing-library/react';

import { H3 } from '@/components/primitives/typography/H3.tsx';

describe('Typography H3 Component', () => {
  const defaultProps: H3 = {
    className: 'custom-class',
  };

  it('renders h3 correctly', () => {
    const { getByText } = render(<H3 {...defaultProps}>Heading 1</H3>);
    expect(getByText('Heading 1')).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    const { container } = render(<H3 {...defaultProps}>Heading 2</H3>);
    const h3Element = container.querySelector('h3');
    expect(h3Element).toHaveClass('typography', 'typography-h3', 'custom-class');
  });

  it('renders without crashing', () => {
    expect(() => render(<H3 {...defaultProps}>Heading 2</H3>)).not.toThrow();
  });
});
