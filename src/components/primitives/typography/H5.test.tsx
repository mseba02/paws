import { render } from '@testing-library/react';

import { H5 } from '@/components/primitives/typography/H5.tsx';

describe('Typography H5 Component', () => {
  const defaultProps: H5 = {
    className: 'custom-class',
  };

  it('renders H5 correctly', () => {
    const { getByText } = render(<H5 {...defaultProps}>Heading 1</H5>);
    expect(getByText('Heading 1')).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    const { container } = render(<H5 {...defaultProps}>Heading 2</H5>);
    const h5Element = container.querySelector('h5');
    expect(h5Element).toHaveClass('typography', 'typography-h5', 'custom-class');
  });

  it('renders without crashing', () => {
    expect(() => render(<H5 {...defaultProps}>Heading 2</H5>)).not.toThrow();
  });
});
