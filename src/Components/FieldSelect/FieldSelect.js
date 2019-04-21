import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Select from 'react-select';

import { dimensionType } from '../../Types';

import ClearIndicator from './Components/ClearIndicator';
import DropdownIndicator from './Components/DropdownIndicator';
import MultiValueRemove from './Components/MultiValueRemove';
import Option from './Components/Option';

import './FieldSelect.scss';

import Block from '../Block/Block';
import Label from '../Label/Label';
import Text from '../Text/Text';

const propTypes = {
  /**
   * Display a checkbox before each option
   */
  showCheckbox: PropTypes.bool,
  /**
   * Automatically focus the select box
   */
  autoFocus: PropTypes.bool,
  /**
   * Additional classes to add
   */
  className: PropTypes.string,
  /**
   * Close the menu when a user selects an option
   */
  closeMenuOnSelect: PropTypes.string,
  /**
   * Sets aria-label attribute.
   */
  ariaLabel: PropTypes.string,
  /**
   * Sets aria-labelledby attribute.
   */
  ariaLabelledby: PropTypes.string,
  /**
   * If the select should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * If the value of the select can be read, but not changed
   */
  isReadOnly: PropTypes.bool,
  /**
   * The id attribute of the container
   */
  id: PropTypes.string.isRequired,
  /**
   * is the select in a loading state
   */
  loading: PropTypes.bool,
  /**
   * Test to display when loading
   */
  loadingMessage: PropTypes.string,
  /**
   * Set the menu to open
   */
  menuIsOpen: PropTypes.bool,
  /**
   * Default placement of the menu in relation to the control. 'auto' will flip when there isn't enough space below the control.
   */
  menuPlacement: PropTypes.oneOf(['auto', 'top', 'bottom']),
  /**
   * Support multiple selected options
   */
  multiSelect: PropTypes.bool,
  /**
   * Callback function when select is blurred
   */
  onBlur: PropTypes.func,
  /**
   * Callback function when select is focused
   */
  onFocus: PropTypes.func,
  /**
   * Callback function when select is changed
   */
  onChange: PropTypes.func,
  /**
   * Array of options to populate the select menu
   */
  options: PropTypes.arrayOf(PropTypes.object),
  /**
   * The value(s) of select
   */
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]),
  /**
   * Additional hint displayed beneath the label
   */
  helpText: PropTypes.string,
  /**
   * The label for the checkbox
   */
  label: PropTypes.string.isRequired,
  /**
   * visually hide the label, but keep it accessible for screenreaders
   */
  hideLabel: PropTypes.bool,
  /**
   * Applies styling to indicate the input is invalid
   */
  isInvalid: PropTypes.bool,
  /**
   * Text to display if the input is invalid.
   * The text should explain why the input is invalid.
   */
  validationText: PropTypes.string,
  /**
   * A valid css width (%, px, em, rem).
   *
   * Or one of: 1, 2, 3, 4, 5, 6, 7, 8, 9, '1', '2', '3', '4', '5', '6', '7', '8', '9', 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100, '10', '20', '25', '30', '33', '34', '40', '50', '60', '70', '75', '80', '90', '100'
   *
   * For responsive behavior, pass an array with length up to 4, with one of the above values.
   */
  width: dimensionType,
};

/**
 * Allows for the selection of item(s) from a set of options.
 * This is a wrapper of [React Select](https://react-select.com).
 *
 * ---
 */

function FieldSelect({
  className,
  closeMenuOnSelect,
  id,
  label,
  isInvalid,
  helpText,
  hideLabel,
  multiSelect,
  value,
  disabled,
  showCheckbox,
  validationText,
  width,
  ...rest
}) {
  const selectClassNames = classNames('fieldSelect', {
    invalid: isInvalid,
  });

  const components = {
    ...((showCheckbox && multiSelect) && { Option }), ClearIndicator, DropdownIndicator, MultiValueRemove
  };

  const selectMarkup = () => (
    <Select
      inputId={id}
      name={id}
      className={selectClassNames}
      classNamePrefix="pebble"
      isMulti={multiSelect}
      isDisabled={disabled}
      closeMenuOnSelect={closeMenuOnSelect || (!multiSelect)}
      hideSelectedOptions={false}
      components={components}
      value={value}
      {...rest}
    />
  );

  const getLabel = () => (
    <Label
      id={id}
      invalid={isInvalid}
      disabled={disabled}
      hide={hideLabel}
    >
      {label}
    </Label>
  );

  const helpTextMarkup = () => {
    if (helpText === undefined) return;
    return (
      <Text size="6" appearance="muted" className="db mb-2">{helpText}</Text>
    );
  };

  const getValidationTextMarkup = () => {
    if (!isInvalid || validationText === undefined) return;

    return (
      <Text appearance="danger" size="6" className="db pt-2">{validationText}</Text>
    );
  };

  const classes = classNames('relative',
    {
      invalid: isInvalid,
      'o-50': disabled
    },
    className);

  return (
    <Block direction="column" className={classes} width={width}>
      {getLabel()}
      {helpTextMarkup()}
      {selectMarkup()}
      {getValidationTextMarkup()}
    </Block>
  );
}

FieldSelect.propTypes = propTypes;

export default FieldSelect;
