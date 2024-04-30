import { render } from '@testing-library/react';

import { Paragraph } from '@/components/primitives/typography/Paragraph.tsx';

describe('Typography Paragraph Component', () => {
  const defaultProps: Paragraph = {
    className: 'custom-class',
  };

  it('renders H6 correctly', () => {
    const { getByText } = render(<Paragraph {...defaultProps}>Heading 1</Paragraph>);
    expect(getByText('Heading 1')).toBeInTheDocument();
  });

  it('applies className correctly', () => {
    const { container } = render(<Paragraph {...defaultProps}>Heading 2</Paragraph>);
    const pElement = container.querySelector('p');
    expect(pElement).toHaveClass('typography', 'typography-paragraph', 'custom-class');
  });

  it('renders without crashing', () => {
    expect(() => render(<Paragraph {...defaultProps}>Heading 2</Paragraph>)).not.toThrow();
  });
});
