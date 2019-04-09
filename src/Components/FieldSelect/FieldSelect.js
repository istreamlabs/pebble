import React from 'react';
import PropTypes from 'prop-types';

import Select, { components } from 'react-select';

import './FieldSelect.scss';

import classNames from 'classnames';

import Block from '../Block/Block';
import Badge from '../Badge/Badge';
import Text from '../Text/Text';
import Icon from '../Icon/Icon';

/**
 * Allows for the selection of item(s) from a set of options.
 *
 * ---
 */

const ClearIndicator = (props) => {
  const { innerProps: { ref, ...restInnerProps } } = props;
  return (
    <Block {...restInnerProps} ref={ref} paddingHorizontal="3">
      <Icon name="remove-circle" />
    </Block>
  );
};

ClearIndicator.propTypes = {
  innerProps: PropTypes.object,
};

const DropdownIndicator = () => (
  <Block paddingHorizontal="3">
    <Icon name="arrow-small-down" />
  </Block>
);

const MultiValueContainer = props => (
  <Badge className="m-1">
    <components.MultiValueContainer {...props} />
  </Badge>
);

const MultiValueLabel = props => (
  <components.MultiValueLabel {...props} />
);

const MultiValueRemove = props => (
  <components.MultiValueRemove {...props}>
    <Icon name="remove" size="10" />
  </components.MultiValueRemove>
);

const FieldSelect = (
  {
    className,
    id,
    label,
    isInvalid,
    helpText,
    multiSelect,
    value,
    disabled,
    validationText,
    ...rest
  }
) => {
  const selectMarkup = () => (
    <Select
      className="fieldSelect"
      classNamePrefix="pebble"
      isMulti={multiSelect}
      isDisabled={disabled}
      components={{
        ClearIndicator, DropdownIndicator, MultiValueContainer, MultiValueLabel, MultiValueRemove
      }}
      styles={{
        multiValueLabel: base => ({ ...base, padding: 0 }),
        MultiValueContainer: base => ({ ...base, margin: 0 })
      }}
      {...rest}
    />
  );


  const labelMarkup = () => {
    // normal checkbox
    const labelClasses = classNames(
      'db',
      'mb-2',
      'fs-6',
      'fw-700', {
        'neutral-500': disabled,
        red: isInvalid,
      }
    );

    return (
      <Block direction="column">
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      </Block>
    );
  };

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
    <Block direction="column" className={classes}>
      {labelMarkup()}
      {helpTextMarkup()}
      {selectMarkup()}
      {getValidationTextMarkup()}
    </Block>
  );
};

FieldSelect.propTypes = {
  autoFocus: PropTypes.bool,
  /**
   * Additional classes to add
   */
  className: PropTypes.string,
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
   * The id attribute of the input
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
   * Text to display when there are no options
   */
  noOptionsMessage: PropTypes.string,
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
  value: PropTypes.oneOf([
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
   * Applies styling to indicate the input is invalid
   */
  isInvalid: PropTypes.bool,
  /**
   * Text to display if the input is invalid.
   * The text should explain why the input is invalid.
   */
  validationText: PropTypes.string,
};

export default FieldSelect;
