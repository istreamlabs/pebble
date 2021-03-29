// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldSelect' was resolved to '/Users/esj... Remove this comment to see the full error message
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

const multiSelectValue = [
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'boysenberry', label: 'Boysenberry' },
  { value: 'bubblegum', label: 'Bubblegum' },
  { value: 'chocolate', label: 'Chocolate' },
];

function FieldSelectExamples() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        id="single"
        options={options}
        isSearchable
        className="mb-5"
        label="Single Select"
        helpText="this is help text"
        placeholder="choose one"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        id="multi"
        options={options}
        multiSelect
        className="mb-5"
        isSearchable
        label="Multi-Select"
        placeholder="choose one or many"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        autoFocus
        id="autofocus"
        options={[]}
        className="mb-5"
        label="Autofocus"
        loading
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        id="error"
        options={options}
        isInvalid
        required
        className="mb-5"
        label="Invalid Select"
        validationText="this selection is required"
        placeholder="choose one"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        hideLabel
        id="hiddenLabel"
        options={options}
        isSearchable
        label="Hidden Label"
        placeholder="hidden label"
        className="mb-5"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        disabled
        id="disabled"
        options={options}
        label="Disabled"
        placeholder="can not edit this"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        creatable
        id="creatable"
        options={options}
        label="Creatable"
        placeholder="Can type new option"
      />
    </>
  );
}

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('FieldSelect', module)
  .addParameters({
    chromatic: { viewports: [479, 959, 1439, 1440] },
  })
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .add('all', () => <FieldSelectExamples />)
  .add('sizes', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        id="small"
        options={options}
        isSearchable
        label="Small"
        size="small"
        className="mb-5"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        id="medium"
        options={options}
        isSearchable
        label="Medium"
        size="medium"
        className="mb-5"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        id="large"
        options={options}
        isSearchable
        label="Large"
        size="large"
        className="mb-5"
      />

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        multiSelect
        id="small"
        options={options}
        isSearchable
        label="Multi-select Small"
        size="small"
        className="mb-5"
        value={multiSelectValue}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        multiSelect
        id="medium"
        options={options}
        isSearchable
        label="Multi-select Medium"
        size="medium"
        className="mb-5"
        value={multiSelectValue}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <FieldSelect
        multiSelect
        id="large"
        options={options}
        isSearchable
        label="Multi-select Large"
        size="large"
        value={multiSelectValue}
      />
    </>
  ))
  .add('open single', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FieldSelect
      id="openSingle"
      options={options}
      showCheckbox
      isSearchable
      label="Checkbox Multi-Select"
      placeholder="choose one or many"
      menuIsOpen
      value={{ value: 'bubblegum', label: 'Bubblegum' }}
    />
  ))
  .add('open multi', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FieldSelect
      id="openMulti"
      options={options}
      multiSelect
      isSearchable
      label="Checkbox Multi-Select"
      placeholder="choose one or many"
      menuIsOpen
      value={multiSelectValue}
    />
  ))
  .add('open multi with checkbox', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <FieldSelect
      id="openMultiCheckbox"
      options={options}
      showCheckbox
      multiSelect
      isSearchable
      label="Checkbox Multi-Select"
      placeholder="choose one or many"
      menuIsOpen
      value={multiSelectValue}
    />
  ));
