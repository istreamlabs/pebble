import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import FieldSelect from './FieldSelect';

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

function FieldSelectExamples() {
  return (
    <>
      <FieldSelect
        id="single"
        options={options}
        isSearchable
        className="mb-5"
        label="Single Select"
        helpText="this is help text"
        placeholder="choose one"
      />

      <FieldSelect
        id="multi"
        options={options}
        multiSelect
        className="mb-5"
        isSearchable
        label="Multi-Select"
        placeholder="choose one or many"
      />

      <FieldSelect
        id="checkbox"
        options={options}
        showCheckbox
        className="mb-5"
        multiSelect
        isSearchable
        label="Checkbox Multi-Select"
        placeholder="choose one or many"
      />

      <FieldSelect
        autoFocus
        id="autofocus"
        options={[]}
        className="mb-5"
        label="Autofocus"
        loading
      />

      <FieldSelect
        id="error"
        options={options}
        isInvalid
        className="mb-5"
        label="Invalid Select"
        validationText="this selection is required"
        placeholder="choose one"
      />

      <FieldSelect
        hideLabel
        id="hiddenLabel"
        options={options}
        isSearchable
        label="Hidden Label"
        placeholder="hidden label"
        className="mb-5"
      />

      <FieldSelect
        disabled
        id="disabled"
        options={options}
        label="Disabled"
        placeholder="can not edit this"
      />
    </>
  );
}

storiesOf('FieldSelect', module)
  .add('all', () => (
    <FieldSelectExamples />
  ))
  .add('open single', () => (
    <FieldSelect
      id="openSingle"
      options={options}
      showCheckbox
      isSearchable
      label="Checkbox Multi-Select"
      placeholder="choose one or many"
      menuIsOpen
    />
  ))
  .add('open multi', () => (
    <FieldSelect
      id="openMulti"
      options={options}
      multiSelect
      isSearchable
      label="Checkbox Multi-Select"
      placeholder="choose one or many"
      menuIsOpen
    />
  ))
  .add('open multi with checkbox', () => (
    <FieldSelect
      id="openMultiCheckbox"
      options={options}
      showCheckbox
      multiSelect
      isSearchable
      label="Checkbox Multi-Select"
      placeholder="choose one or many"
      menuIsOpen
    />
  ));
