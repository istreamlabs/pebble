import './FieldDateTime.scss';

import Block from '../Block/Block';
import DatePicker from 'react-datepicker';
import Label from '../Label/Label';
import PropTypes from 'prop-types';
import React from 'react';
import Text from '../Text/Text';
import classNames from 'classnames';
import { dimensionType } from '../../Types';
import moment from 'moment';

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
   * @see https://momentjs.com/docs/#/parsing/string-format/
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
   * The id attribute of the input
   */
  id: PropTypes.string.isRequired,
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
   * Callback function when input is changed\
   * @param {string} value a UTC ISO 8601 string (https://en.wikipedia.org/wiki/ISO_8601) of the selected date
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
  selectLocalDateTime: PropTypes.bool,
  /**
   * The value can be dateTime object or a string
   */
  value: PropTypes.string,
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
  width: dimensionType
};

const defaultProps = {
  autoFocus: false,
  disabled: false,
  isInvalid: false,
  hideLabel: false,
  isReadOnly: false,
  size: 'medium',
  includeTime: true,
  selectLocalDateTime: false,
  timeFormat: 'HH:mm '
};

/**
 * Allows for choosing a date and/or time with a visual calendar.
 */
class FieldDateTime extends React.PureComponent {
  renderLabel() {
    const { isInvalid, disabled, id, hideLabel, label } = this.props;
    return (
      <Label id={id} invalid={isInvalid} disabled={disabled} hide={hideLabel}>
        {label}
      </Label>
    );
  }

  getDateFormat() {
    const { includeTime, dateFormat, timeFormat } = this.props;
    return dateFormat !== undefined
      ? dateFormat
      : includeTime
        ? `YYYY-MM-DD ${timeFormat}`
        : 'YYYY-MM-DD';
  }

  renderHelpTextMarkup() {
    const { helpText } = this.props;
    if (helpText === undefined) return;
    return (
      <Text size="6" className="db mt-2">
        {helpText}
      </Text>
    );
  }

  generateValidationTextMarkup() {
    const { isInvalid, validationText } = this.props;
    if (!isInvalid || validationText === undefined) return;

    return (
      <Text appearance="danger" size="6" className="db pt-2">
        {validationText}
      </Text>
    );
  }

  renderAlternativeDateTimeDisplay() {
    // TODO: if we are not displaying the time what do we do here?
    const { disabled, value, selectLocalDateTime } = this.props;
    const momentValue = moment(value);

    const alternativeDateTimeClasses = classNames('bl bb br',
      {
        'b-neutral-400': !disabled,
        'b-neutral-300 neutral-500': disabled,
      });

    // This is confusing but these methods modify the reference instead of returning a new value
    selectLocalDateTime ? momentValue.utc() : momentValue.local();
    return (
      <Block height="34px">
        <Block
          background="neutral-200"
          paddingHorizontal="2"
          className="bl bb b-neutral-400 justify-end fw-700 fs-6 br0"
          alignItems="center"
          width="60px"
        >
          {`${selectLocalDateTime ? 'UTC' : 'Local'}`}
        </Block>
        <Block
          background={disabled ? 'neutral-300' : 'neutral-200'}
          flex
          paddingVertical="2"
          paddingHorizontal="3"
          className={alternativeDateTimeClasses}
          styles={disabled ? { borderLeft: 0 } : null}
        >
          {`${momentValue.format(this.getDateFormat())}`}
        </Block>
      </Block>
    );
  }

  onChange = (value) => {
    const { onChange } = this.props;
    // TODO: currently this has a non 0 second value. Should we change this?
    // TODO: change label and remove help text for date only. Also clear out time set to 0?
    onChange(value.toISOString());
  };

  render() {
    const {
      autoFocus,
      label,
      className,
      dateFormat,
      disabled,
      id,
      includeTime,
      isInvalid,
      isReadOnly,
      hideLabel,
      onChange,
      size,
      timeFormat,
      validationText,
      value,
      width,
      selectLocalDateTime,
      ...rest
    } = this.props;

    const momentValue = moment(value);
    selectLocalDateTime ? momentValue.local() : momentValue.utc();

    const classes = classNames('field-text', className);

    const inputClasses = classNames('input', {
      'input-error': isInvalid,
      'input-s': size === 'small',
      'input-m': size === 'medium',
      'input-l': size === 'large',
      'bg-neutral-200': isReadOnly
    });

    return (
      <Block direction="column" className={classes} width={width}>
        {this.renderLabel()}
        <Block width="100">
          <Block className="input-prefix justify-end fw-700 fs-6" alignItems="center" width="60px">
            {`${selectLocalDateTime ? 'Local' : 'UTC'}`}
          </Block>
          <DatePicker
            disabledKeyboardNavigation
            disabled={disabled}
            adjustDateOnChange={false}
            showTimeSelect={includeTime}
            selected={momentValue}
            className={inputClasses}
            utcOffset={0}
            dateFormat={this.getDateFormat()}
            timeFormat={timeFormat}
            calendarClassName="FieldDatePickerCalendar"
            onChange={this.onChange}
            {...rest}
          />
        </Block>

        {this.renderAlternativeDateTimeDisplay()}
        {this.renderHelpTextMarkup()}
        {this.generateValidationTextMarkup()}
      </Block>
    );
  }
}

FieldDateTime.propTypes = propTypes;

FieldDateTime.defaultProps = defaultProps;

export default FieldDateTime;
