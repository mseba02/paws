import { Button } from '@/components/primitives/common/Button.tsx';
import Input from '@/components/primitives/common/Input.tsx';
import Select from '@/components/primitives/common/Select.tsx';
import { H1 } from '@/components/primitives/typography/H1.tsx';
import { H2 } from '@/components/primitives/typography/H2.tsx';
import { H3 } from '@/components/primitives/typography/H3.tsx';
import { H4 } from '@/components/primitives/typography/H4.tsx';
import { H5 } from '@/components/primitives/typography/H5.tsx';
import { H6 } from '@/components/primitives/typography/H6.tsx';
import { Paragraph } from '@/components/primitives/typography/Paragraph.tsx';

import ButtonIcon from './assets/react.svg';

export default function App() {
  return (
    <div className="ml-1">
      <H1>Primary Button - H1</H1>
      <Button className="btn-primary">text</Button>
      <H2>Secondary Button - H2</H2>
      <Button className="btn-secondary" icon={ButtonIcon}>
        text
      </Button>
      <H3>Title-H3</H3>
      <H4>Title-H4</H4>
      <H5>Title-H5</H5>
      <H6>Title-H6</H6>
      <Paragraph>Paragraph</Paragraph>
      <Input className="mb-2" icon={ButtonIcon} onClickIcon={() => alert('ok')} placeholder="Input" />
      <Paragraph>example select</Paragraph>
      <Select
        options={[
          { value: '1', label: 'Option 1' },
          { value: '2', label: 'Option 2' },
          { value: '3', label: 'Option 3' },
        ]}
        variant="small"
      />
    </div>
  );
}
