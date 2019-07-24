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
   * default is default YYYY-MM-DD or YYYY-MM-DD{timeFormat}
   * @see https://momentjs.com/docs/#/parsing/string-format/
   */
  dateFormat: PropTypes.string,
  /**
   * If the input should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * Do not include the ability to pick a time, just the day
   */
  excludeTime: PropTypes.bool,
  /**
   * Filter the selectable dates based on custom criteria
   * @param {string} date a UTC ISO 8601 string (https://en.wikipedia.org/wiki/ISO_8601) of the selected date
   * @returns {boolean} true to allow the date to be selected
   */
  filterDate: PropTypes.func,
  /**
   * Additional hint displayed beneath the input
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
   * Applies styling to indicate the input is invalid
   */
  isInvalid: PropTypes.bool,
  /**
   * label for the input
   */
  label: PropTypes.string.isRequired,
  /**
   * Latest date allowed to be selected. Note: the time of the value is ignored. Can be anything that can be converted to a valid javascript date object
   * @example
   * <FieldDateTime maxDate='2019-06-26T12:00:00.000Z' ... />
   * @example
   * <FieldDateTime maxDate={addDays(new Date(), 5)} ... />
   */
  maxDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * Earliest date allowed to be selected. Note: the time of the value is ignored. Can be anything that can be converted to a valid javascript date object
   * @example
   * <FieldDateTime minDate='2019-06-25T12:00:00.000Z' ... />
   * @example
   * <FieldDateTime minDate={subDays(new Date(), 5)} ... />
   */
  minDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  /**
   * Callback function when input is changed
   * @param {string} value a UTC ISO 8601 string (https://en.wikipedia.org/wiki/ISO_8601) of the selected date
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Text to be displayed when there is no value
   */
  placeHolderText: PropTypes.string,
  /**
   * select time in browser's local time zone instead of UTC
   */
  selectLocalDateTime: PropTypes.bool,
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
   * The value a UTC ISO 8601 string (https://en.wikipedia.org/wiki/ISO_8601)
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
  excludeTime: false,
  hideLabel: false,
  isInvalid: false,
  placeHolderText: 'Not set',
  size: 'medium',
  selectLocalDateTime: false,
  timeFormat: 'HH:mm',
  width: '100',
  withPortal: false,
};

/**
 * Allows for choosing a date and/or time with a visual calendar.
 * Presumes UTC as the primary time zone for date/time entry
 */
class FieldDateTime extends React.PureComponent {
  renderLabel() {
    const { disabled, hideLabel, id, isInvalid, label } = this.props;

    return (
      <Label
        disabled={disabled}
        hide={hideLabel}
        id={id}
        invalid={isInvalid}
      >
        {label}
      </Label>
    );
  }

  getDateFormat() {
    const { dateFormat, excludeTime, timeFormat } = this.props;
    return dateFormat !== undefined
      ? dateFormat
      : !excludeTime
      ? `YYYY-MM-DD ${timeFormat}`
      : 'YYYY-MM-DD';
  }

  renderHelpTextMarkup() {
    const { helpText } = this.props;
    if (helpText) {
      return (
        <Text size="6" className="db mt-2">
          {helpText}
        </Text>
      );
    }
  }

  renderValidationTextMarkup() {
    const { isInvalid, validationText } = this.props;
    if (!isInvalid || validationText === undefined) return;

    return (
      <Text appearance="danger" className="db pt-2" size="6">
        {validationText}
      </Text>
    );
  }

  renderAlternativeDateTimeDisplay() {
    const {
      disabled,
      excludeTime,
      selectLocalDateTime,
      size,
      value,
    } = this.props;
    if (excludeTime) return;

    let formatedDate;
    const momentValue = this.convertIsoStringToMoment(value);
    if (momentValue) {
      selectLocalDateTime ? momentValue.utc() : momentValue.local();
      formatedDate = momentValue.format(this.getDateFormat());
    }

    const alternativeDateTimeClasses = classNames(
      'FieldDateTime-alternativeDateTime',
      {
        disabled,
        'input-s': size === 'small',
        'input-m': size === 'medium',
        'input-l': size === 'large',
      },
    );

    const alternativeDateTimeLabelClasses = classNames(
      'bl bb b-neutral-400 justify-end fw-700 fs-6 br0',
      {
        'input-s w3': size === 'small',
        'input-m w3': size === 'medium',
        'input-l w4': size === 'large',
      },
    );

    return (
      <Block>
        <Block
          alignItems="center"
          background="neutral-200"
          className={alternativeDateTimeLabelClasses}
          styles={{
            borderBottomLeftRadius: '.125rem',
          }}
        >
          {`${selectLocalDateTime ? 'UTC' : 'Local'}`}
        </Block>
        <Block
          background={disabled ? 'neutral-300' : 'neutral-200'}
          className={alternativeDateTimeClasses}
          flex
          styles={disabled ? { borderLeft: 0 } : null}
        >
          {formatedDate}
        </Block>
      </Block>
    );
  }

  convertIsoStringToMoment(value) {
    let momentValue;
    if (value !== undefined && value !== null && value !== '') {
      try {
        momentValue = moment(value);
        if (!momentValue.isValid()) {
          throw new Error('invalid isoString');
        }
      } catch {
        throw new Error('invalid isoString');
      }
    }
    return momentValue;
  }

  onChange = value => {
    const { excludeTime, onChange } = this.props;
    // this code either clears out the time complete, e.g. 00:00:00.000
    // or clears out the seconds since we don't provide that level of granularity in our picker
    if (excludeTime) {
      value.startOf('day');
    } else {
      value.startOf('minute');
    }

    onChange(value.toISOString());
  };

  filterDate = value => {
    const { filterDate } = this.props;
    return filterDate ? filterDate(value.toISOString()) : true;
  };

  render() {
    const {
      autoFocus,
      className,
      disabled,
      excludeTime,
      id,
      isInvalid,
      maxDate,
      minDate,
      placeHolderText,
      selectLocalDateTime,
      size,
      timeFormat,
      value,
      width,
      withPortal,
    } = this.props;

    const momentValue = this.convertIsoStringToMoment(value);
    if (momentValue) {
      selectLocalDateTime ? momentValue.local() : momentValue.utc();
    }

    const momentMinDate = minDate ? moment(minDate) : undefined;
    const momentMaxDate = maxDate ? moment(maxDate) : undefined;

    const classes = classNames('field-text', className);

    const inputClasses = classNames('FieldDateTime-input', {
      'input-error': isInvalid,
      'input-s': size === 'small',
      'input-m': size === 'medium',
      'input-l': size === 'large',
      'bg-neutral-200': disabled,
    });

    const iconClasses = classNames('FieldDateTime-icon', {
      'FieldDateTime-icon-s': size === 'small',
      'FieldDateTime-icon-m': size === 'medium',
      'FieldDateTime-icon-l': size === 'large',
      'neutral-400': !isInvalid,
      red: isInvalid,
    });

    const prefixClasses = classNames(
      'FieldDateTime-timezone input-prefix justify-end fw-700 fs-6',
      {
        'input-s w3': size === 'small',
        'input-m w3': size === 'medium',
        'input-l w4': size === 'large',
      },
    );

    // Because we are using an old version of the picker and we would
    // at some point like to replace it we do not want to expose the
    // datepicker API to our consumers so we are selective about what
    // we pass through to the component instead of doing {...rest}
    return (
      <Block direction="column" className={classes} width={width}>
        {this.renderLabel()}
        <Block width="100" className="relative">
          <Block className={prefixClasses} alignItems="center">
            {`${selectLocalDateTime ? 'Local' : 'UTC'}`}
          </Block>
          <DatePicker
            adjustDateOnChange={false}
            autoFocus={autoFocus}
            className={inputClasses}
            calendarClassName="FieldDatePickerCalendar"
            dateFormat={this.getDateFormat()}
            disabledKeyboardNavigation
            disabled={disabled}
            filterDate={this.filterDate}
            id={id}
            minDate={momentMinDate}
            maxDate={momentMaxDate}
            onChange={this.onChange}
            popperPlacement="bottom-start"
            selected={momentValue}
            showTimeSelect={!excludeTime}
            timeFormat={timeFormat}
            utcOffset={0}
            withPortal={withPortal}
            placeholderText={placeHolderText}
          />
          <label htmlFor={id}>
            <Icon
              accessabilityLabel="open picker"
              className={iconClasses}
              name={excludeTime ? 'calendar' : 'date-time'}
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
