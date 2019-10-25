import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

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

// const ExampleContent = ({ onDone }) => (
//   <Card width="250px" overflow="visible">
//     <Block
//       background="neutral-200"
//       alignItems="center"
//       justify="between"
//       padding="3"
//     >
//       <Button size="small">Clear</Button>
//       <div className="fw-700">Filters</div>
//       <Button onClick={() => onDone(false)} primary size="small">
//         Done
//       </Button>
//     </Block>
//     <Block
//       displayBlock
//       itemSpacing="3"
//       paddingVertical="5"
//       paddingHorizontal="3"
//     >
//       <FieldText
//         id="q"
//         placeholder="search by name, email"
//         label="search"
//       />
//       <FieldSelect options={options} id="type" label="type" />
//     </Block>
//   </Card>
// );

// function FilterExample() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   const handleDone = () => {
//     setIsOpen(false);
//   };

//   return (
//     <Popover
//       isOpen={isOpen}
//       onToggle={setIsOpen}
//       content={<ExampleContent onDone={handleDone} />}
//     >
//       <Button onClick={() => setIsOpen(!isOpen)}>
//         popover trigger
//       </Button>
//     </Popover>
//   );
// }

storiesOf('Popover', module).add('basic', () => {
  const label = 'placement';
  const options = [
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'right',
    'right-start',
    'right-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
  ];
  const defaultValue = 'bottom';
  const groupId = 'GROUP-ID1';

  const placement = select(label, options, defaultValue, groupId);

  return (
    <Block
      alignItems="center"
      justify="around"
      width="100%"
      height="400px"
      className="m-auto"
    >
      <Popover
        placement={placement}
        content={
          <Block
            displayBlock
            background="white"
            padding="3"
            radius="2"
            className="shadow-1"
          >
            I drink your milkshake!
          </Block>
        }
      >
        <Button>popover trigger</Button>
      </Popover>
      <Popover
        placement={placement}
        content={
          <Block
            displayBlock
            color="neutral-100"
            background="neutral-800"
            padding="3"
            radius="2"
            className="shadow-1"
          >
            I drink your milkshake!
          </Block>
        }
      >
        <Button>popover trigger</Button>
      </Popover>
    </Block>
  );
});
