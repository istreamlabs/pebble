// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-select' or its correspon... Remove this comment to see the full error message
import classNames from 'classnames';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-select/creatable' or its... Remove this comment to see the full error message
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/ClearIndicator' was resolved ... Remove this comment to see the full error message
import { dimensionType } from '../../Types';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/DropdownIndicator' was resolv... Remove this comment to see the full error message
import ClearIndicator from './Components/ClearIndicator';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/MultiValueRemove' was resolve... Remove this comment to see the full error message
import DropdownIndicator from './Components/DropdownIndicator';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Option' was resolved to '/Use... Remove this comment to see the full error message
import MultiValueRemove from './Components/MultiValueRemove';
import Option from './Components/Option';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import './FieldSelect.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Label/Label' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Label from '../Label/Label';
import Text from '../Text/Text';

const propTypes = {
  /**
   * Sets aria-label attribute.
   */
  ariaLabel: PropTypes.string,
  /**
   * Sets aria-labelledby attribute.
   */
  ariaLabelledby: PropTypes.string,
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
  closeMenuOnSelect: PropTypes.bool,
  /**
   * Allow creating new options along with choosing existing options
   */
  creatable: PropTypes.bool,
  /**
   * If the select should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * Additional hint displayed beneath the input
   */
  helpText: PropTypes.node,
  /**
   * visually hide the label, but keep it accessible for screenreaders
   */
  hideLabel: PropTypes.bool,
  /**
   // @ts-expect-error ts-migrate(2749) FIXME: 'dimensionType' refers to a value, but is being us... Remove this comment to see the full error message
   * Applies styling to indicate the input is invalid
   */
  isInvalid: PropTypes.bool,
  /**
   * If the value of the select can be read, but not changed
   */
  isReadOnly: PropTypes.bool,
  /**
   * The id attribute of the container
   */
  id: PropTypes.string.isRequired,
  /**
   * The label for the checkbox
   */
  label: PropTypes.string.isRequired,
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
   * Whether the menu should use a portal, and where it should attach
   *
   * An example can be found https://react-select.com/advanced#portaling
   */
  menuPortalTarget: PropTypes.instanceOf(Element),
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
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * Callback function when select is changed
   */
  onChange: PropTypes.func,
  /**
   * Array of options to populate the select menu
   */
  options: PropTypes.arrayOf(PropTypes.object),
  /**
   * A short hint that is displayed when there is no value
   */
  placeholder: PropTypes.string,
  /**
   * If the input should be required.
   */
  required: PropTypes.bool,
  /**
   * Display a checkbox before each option
   */
  showCheckbox: PropTypes.bool,
  /**
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * Changes the size of the input, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Text to display if the input is invalid.
   * The text should explain why the input is invalid.
   */
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  validationText: PropTypes.string,
  /**
   * The value(s) of select
   */
  value: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  /**
   * A valid css width (%, px, em, rem).
   *
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * Or one of: 1, 2, 3, 4, 5, 6, 7, 8, 9, '1', '2', '3', '4', '5', '6', '7', '8', '9', 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100, '10', '20', '25', '30', '33', '34', '40', '50', '60', '70', '75', '80', '90', '100'
   *
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * For responsive behavior, pass an array with length up to 4, with one of the above values.
   */
  width: dimensionType,
};

const defaultProps = {
  autoFocus: false,
  closeMenuOnSelect: true,
  creatable: false,
  disabled: false,
  hideLabel: false,
  isInvalid: false,
  isReadOnly: false,
  loading: false,
  menuPlacement: 'bottom',
  multiSelect: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  options: [],
  required: false,
  showCheckbox: false,
  size: 'medium',
  width: '100%',
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
  creatable,
  disabled,
  helpText,
  hideLabel,
  id,
  isInvalid,
  label,
  menuPlacement,
  menuPortalTarget,
  multiSelect,
  required,
  showCheckbox,
  size,
  validationText,
  value,
  width,
  ...rest
}) {
  const selectClassNames = classNames('fieldSelect', {
    invalid: isInvalid,
    'control-s': size === 'small',
    'control-m': size === 'medium',
    'control-l': size === 'large',
  });

  const components = {
    ...(showCheckbox && multiSelect && { Option }),
    ClearIndicator,
    DropdownIndicator,
    MultiValueRemove,
  };

  const selectMarkup = () => {
    const SelectComponent = creatable ? CreatableSelect : Select;
    return (
      <SelectComponent
        inputId={id}
        name={id}
        className={selectClassNames}
        classNamePrefix="pebble"
        isMulti={multiSelect}
        isDisabled={disabled}
        closeMenuOnSelect={
          !multiSelect ? closeMenuOnSelect : !multiSelect
        }
        hideSelectedOptions={false}
        menuPortalTarget={menuPortalTarget}
        menuPlacement={menuPlacement}
        components={components}
        value={value}
        {...rest}
      />
    );
  };

  const getLabel = () => (
    <Label
      id={id}
      invalid={isInvalid}
      disabled={disabled}
      hide={hideLabel}
      required={required}
    >
      {label}
    </Label>
  );

  const helpTextMarkup = () => {
    if (helpText) {
      return (
        <Text size="6" className="db mt-2">
          {helpText}
        </Text>
      );
    }
    return null;
  };

  const getValidationTextMarkup = () => {
    if (!isInvalid || validationText === undefined) return;

    return (
      <Text appearance="danger" size="6" className="db pt-2">
        {validationText}
      </Text>
    );
  };

  const classes = classNames(
    'relative',
    {
      invalid: isInvalid,
    },
    className,
  );

  return (
    <Block direction="column" className={classes} width={width}>
      {getLabel()}
      {selectMarkup()}
      {helpTextMarkup()}
      {getValidationTextMarkup()}
    </Block>
  );
}

FieldSelect.propTypes = propTypes;
FieldSelect.defaultProps = defaultProps;
FieldSelect.displayName = 'FieldSelect';

export default FieldSelect;
