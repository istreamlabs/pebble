import React from 'react';
import { storiesOf } from '@storybook/react';

import Popover from './Popover';
import Button from '../Button/Button';
import Block from '../Block/Block';
import Card from '../Card/Card';
import FieldText from '../FieldText/FieldText';
import FieldSelect from '../FieldSelect/FieldSelect';

const options = [
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'boysenberry', label: 'Boysenberry' },
  { value: 'bubblegum', label: 'Bubblegum' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'green-tea', label: 'Green Tea' },
  { value: 'lychee', label: 'Lychee' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const SimpleContent = (
  <Card>
    <Block padding="3">Popover Content</Block>
  </Card>
);

const ExampleContent = ({ onDone }) => (
  <Card overflow="visible">
    <Block
      background="neutral-200"
      alignItems="center"
      justify="between"
      padding="3"
    >
      <Button size="small">Clear</Button>
      <div className="fw-700">Filters</div>
      <Button onClick={() => onDone(false)} primary size="small">
        Done
      </Button>
    </Block>
    <Block
      displayBlock
      itemSpacing="3"
      paddingVertical="5"
      paddingHorizontal="3"
    >
      <FieldText
        id="q"
        placeholder="search by name, email"
        label="search"
      />
      <FieldSelect options={options} id="type" label="type" />
    </Block>
  </Card>
);

function FilterExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDone = () => {
    setIsOpen(false);
  };

  return (
    <Popover
      isOpen={isOpen}
      onToggle={setIsOpen}
      content={<ExampleContent onDone={handleDone} />}
    >
      <Button onClick={() => setIsOpen(!isOpen)}>
        popover trigger
      </Button>
    </Popover>
  );
}

storiesOf('Popover', module)
  .add('basic', () => <FilterExample />)
  .add('isOpen', () => (
    <Popover isOpen className="mb-4" content={SimpleContent}>
      <Button>popover trigger</Button>
    </Popover>
  ))
  .add('placement', () => (
    <Block
      width="100%"
      padding="8"
      justify="center"
      alignItems="center"
    >
      <Popover
        isOpen
        className="mb-4"
        content={SimpleContent}
        placement="top"
      >
        <Button>popover trigger</Button>
      </Popover>
    </Block>
  ));
