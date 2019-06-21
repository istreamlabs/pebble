import './FieldDateTime.scss';

import Block from '../Block/Block';
import DatePicker from 'react-datepicker';
import Label from '../Label/Label';
import PropTypes from 'prop-types';
import React from 'react';
import Text from '../Text/Text';
import classNames from 'classnames';
import { dimensionType } from '../../Types';
import { isValid } from 'ipaddr.js';

const propTypes = {
  /**
   * Automatically focus the input
   */
  autoFocus: PropTypes.bool,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Format used to display text in the input box
   */
  dateFormat: PropTypes.string,
  /**
   * If the input should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * Additional hint displayed beneath the label
   */
  helpText: PropTypes.string,
  /**
   * Visually hide the label
   */
  hideLabel: PropTypes.bool,
  /**
   * Allow the user to pick a time as well as a date
   */
  includeTime: PropTypes.bool,
  /**
   * Applies styling to indicate the input is invalid
   */
  isInvalid: PropTypes.bool,
  /**
   * If the value of the input can be read, but not changed
   */
  isReadOnly: PropTypes.bool,
  /**
   * label for the input
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback function when input is changed
   */
  onChange: PropTypes.func,
  /**
   * Changes the size of the input, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Format used to display time in the time column in the popover
   */
  timeFormat: PropTypes.string,
  /**
   * select time in UTC
   */
  useUTC: PropTypes.bool,
  /**
   * The value can be dateTime object or a string
   */
  value: PropTypes.object,
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

const defaultProps = {
  autoFocus: false,
  disabled: false,
  isInvalid: false,
  hideLabel: false,
  isReadOnly: false,
  size: 'medium',
  includeTime: true,
};

/**
 * Allows for choosing a date and/or time with a visual calendar.
 */

class FieldDateTime extends React.PureComponent {
  static generateLabel({
    isInvalid,
    disabled,
    id,
    hideLabel,
    label
  }) {
    return (
      <Label
        id={id}
        invalid={isInvalid}
        disabled={disabled}
        hide={hideLabel}
      >
        {label}
      </Label>
    );
  }

  static getDateFormat(includeTime, dateFormat) {
    return dateFormat !== undefined ? dateFormat : (includeTime ? 'MMMM d, yyyy h:mm aa' : 'MMMM d, yyyy');
  }


  static generateHelpTextMarkup(helpText) {
    // todo: UTC support should make this show opposite || maybe it's something else too
    if (helpText === undefined) return;
    return (
      <Text size="6" className="db mt-2">{helpText}</Text>
    );
  }

  static generateValidationTextMarkup(isInvalid, validationText) {
    if (!isInvalid || validationText === undefined) return;

    return (
      <Text appearance="danger" size="6" className="db pt-2">{validationText}</Text>
    );
  }

  static foo(value) {
    console.log(value.toISOString());
    return (
      <Block marginTop="3">
        {value.toISOString()}
      </Block>
    );
  }

  render() {
    const {
      autoFocus,
      label,
      className,
      dateFormat,
      includeTime,
      isInvalid,
      isReadOnly,
      helpText,
      hideLabel,
      onChange,
      size,
      timeFormat,
      validationText,
      value,
      width,
      ...rest
    } = this.props;

    const classes = classNames('field-text', className);

    const inputClasses = classNames('input',
      {
        'input-error': isInvalid,
        'input-s': size === 'small',
        'input-m': size === 'medium',
        'input-l': size === 'large',
        'bg-neutral-200': isReadOnly,
      });

    return (
      <Block direction="column" className={classes} width={width}>
        {FieldDateTime.generateLabel(this.props)}
        <DatePicker
          disabledKeyboardNavigation
          adjustDateOnChange={false}
          showTimeSelect={includeTime}
          timeFormat={timeFormat}
          dateFormat={FieldDateTime.getDateFormat(includeTime, dateFormat)}
          selected={value}
          className={inputClasses}
          calendarClassName="FieldDatePickerCalendar"
          onChange={onChange}
          {...rest}
        />
        {FieldDateTime.generateHelpTextMarkup(helpText)}
        {FieldDateTime.generateValidationTextMarkup(isValid, validationText)}
        {FieldDateTime.foo(value)}
      </Block>
    );
  }
}

FieldDateTime.propTypes = propTypes;

FieldDateTime.defaultProps = defaultProps;

export default FieldDateTime;
