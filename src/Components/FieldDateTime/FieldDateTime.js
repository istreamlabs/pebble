import './FieldDateTime.scss';

import Block from '../Block/Block';
import Icon from '../Icon/Icon';
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
   * Filter the selectable dates based on custom criteria
   * @param {string} date a UTC ISO 8601 string (https://en.wikipedia.org/wiki/ISO_8601) of the selected date
   * @returns {boolean} true to allow the date to be selected
   */
  filterDate: PropTypes.func,
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
   * Earliest date allowed to be selected. Note: the time of the value is ignored. Can be anything that can be converted to a valid javascript date object
   * @example
   * <FieldDateTime minDate='2019-06-25T12:00:00.000Z' ... />
   * @example
   * <FieldDateTime minDate={subDays(new Date(), 5)} ... />
   */
  minDate: PropTypes.object,
  /**
   * Latest date allowed to be selected. Note: the time of the value is ignored. Can be anything that can be converted to a valid javascript date object
   * @example
   * <FieldDateTime maxDate='2019-06-26T12:00:00.000Z' ... />
   * @example
   * <FieldDateTime maxDate={addDays(new Date(), 5)} ... />
   */
  maxDate: PropTypes.object,
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
  width: dimensionType,
  /**
   * Whether to use a portal
   *
   * An example can be found https://react-select.com/advanced#portaling
   */
  withPortal: PropTypes.bool,
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
  timeFormat: 'HH:mm ',
  withPortal: false,
};

/**
 * Allows for choosing a date and/or time with a visual calendar.
 */
class FieldDateTime extends React.PureComponent {
  // static clientOffset = `UTC + ${new Date().getTimezoneOffset() / 60}`;

  renderLabel() {
    const {
      isInvalid,
      disabled,
      id,
      hideLabel,
      label
    } = this.props;

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

  renderValidationTextMarkup() {
    const { isInvalid, validationText } = this.props;
    if (!isInvalid || validationText === undefined) return;

    return (
      <Text appearance="danger" size="6" className="db pt-2">
        {validationText}
      </Text>
    );
  }

  renderAlternativeDateTimeDisplay() {
    const {
      disabled,
      value,
      selectLocalDateTime,
      includeTime
    } = this.props;
    if (!includeTime) return;
    const momentValue = moment(value);

    const alternativeDateTimeClasses = classNames('FieldDateTime-alternativeDateTime',
      {
        disabled
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
          styles={{
            borderBottomLeftRadius: '.125rem',
          }}
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
    const { onChange, includeTime } = this.props;
    // this code either clears out the time complete, e.g. 00:00:00.000
    // or clears out the seconds since we don't provide that level of granularity in our picker
    if (!includeTime) {
      value.startOf('day');
    } else {
      value.startOf('minute');
    }

    onChange(value.toISOString());
  };

  filterDate = (value) => {
    const { filterDate } = this.props;
    return filterDate ? filterDate(value.toISOString()) : true;
  };

  render() {
    const {
      autoFocus,
      className,
      disabled,
      id,
      includeTime,
      isInvalid,
      isReadOnly,
      size,
      timeFormat,
      value,
      width,
      selectLocalDateTime,
      minDate,
      maxDate,
      withPortal,
    } = this.props;

    const momentValue = moment(value);
    selectLocalDateTime ? momentValue.local() : momentValue.utc();

    const momentMinDate = minDate ? moment(minDate) : undefined;
    const momentMaxDate = maxDate ? moment(maxDate) : undefined;

    const classes = classNames('field-text', className);

    const inputClasses = classNames('FieldDateTime-input', {
      'input-error': isInvalid,
      'input-s': size === 'small',
      'input-m': size === 'medium',
      'input-l': size === 'large',
      'bg-neutral-200': isReadOnly
    });

    const iconClasses = classNames('FieldDateTime-icon', {
      'neutral-400': !isInvalid,
      red: isInvalid,
    });

    return (
      <Block direction="column" className={classes} width={width}>
        {this.renderLabel()}
        <Block width="100" className="relative">
          <Block
            className="FieldDateTime-timezone input-prefix justify-end fw-700 fs-6"
            alignItems="center"
            width="60px"
            onClick={() => {}}
          >
            {`${selectLocalDateTime ? 'Local' : 'UTC'}`}
          </Block>
          <DatePicker
            autoFocus={autoFocus}
            id={id}
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
            popperPlacement="bottom-start"
            filterDate={this.filterDate}
            minDate={momentMinDate}
            maxDate={momentMaxDate}
            withPortal={withPortal}
          />
          <label htmlFor={id}>
            <Icon
              name={includeTime ? 'date-time' : 'calendar'}
              accessabilityLabel="open picker"
              className={iconClasses}
            />
          </label>
        </Block>
        {this.renderAlternativeDateTimeDisplay()}
        {this.renderHelpTextMarkup()}
        {this.renderValidationTextMarkup()}
      </Block>
    );
  }
}

FieldDateTime.propTypes = propTypes;

FieldDateTime.defaultProps = defaultProps;

export default FieldDateTime;


// TODO: clicking utc or local opens picker
