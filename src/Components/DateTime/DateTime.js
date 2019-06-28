import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Block from '../Block/Block';
import Text from '../Text/Text';
import TextContainer from '../TextContainer/TextContainer';

const TIME_ZONE_WIDTH = '40px';

const propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Display local date time as the primary
   */
  displayLocalDateTime: PropTypes.bool,
  /**
   * Format used to display text in the input box
   * default is default YYYY-MM-DD or YYYY-MM-DD{timeFormat}
   * @see https://momentjs.com/docs/#/parsing/string-format/
   */
  dateFormat: PropTypes.string,
  /**
   * show date only but no time
   */
  excludeTime: PropTypes.bool,
  /**
   * A label for the time that is displayed
   */
  label: PropTypes.node,
  /**
   * Format used to display time in the time column in the popover
   */
  timeFormat: PropTypes.string,
  /**
   * Show local time zone
   */
  showAlternativeTimeZone: PropTypes.bool,
  /**
   * The value a UTC ISO 8601 string (https://en.wikipedia.org/wiki/ISO_8601)
   */
  value: PropTypes.string,
};

const defaultProps = {
  displayLocalDateTime: false,
  excludeTime: false,
  showAlternativeTimeZone: false,
  timeFormat: 'HH:mm',
};

/**
 * Accepts an [UTC ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string as the value
 * and displays it in a standard or customized format.
 */

class DateTime extends React.PureComponent {
  getDateFormat() {
    const { dateFormat, excludeTime, timeFormat } = this.props;

    return (dateFormat !== undefined
      ? dateFormat
      : !excludeTime
        ? `YYYY-MM-DD ${timeFormat}`
        : 'YYYY-MM-DD');
  }

  renderLabel() {
    const { label } = this.props;

    if (label) {
      return (
        <Text className="db" size="6">{label}</Text>
      );
    }
    return null;
  }

  renderAlternativeDateTimeDisplay() {
    const {
      excludeTime,
      displayLocalDateTime,
      showAlternativeTimeZone,
      value
    } = this.props;

    if (excludeTime || !showAlternativeTimeZone) return;

    const alternativeMomentValue = moment(value);
    // This is confusing but these methods modify the reference instead of returning a new value
    displayLocalDateTime ? alternativeMomentValue.utc() : alternativeMomentValue.local();

    return (
      <Block alignItems="baseline">
        <Block textSize="6" width={TIME_ZONE_WIDTH}>
          {displayLocalDateTime ? 'UTC' : 'local'}
        </Block>
        <div>{`${alternativeMomentValue.format(this.getDateFormat())}`}</div>
      </Block>
    );
  }

  render() {
    const {
      className,
      displayLocalDateTime,
      value,
    } = this.props;

    const momentValue = moment(value);
    displayLocalDateTime ? momentValue.local() : momentValue.utc();

    return (
      <TextContainer tight className={className}>
        {this.renderLabel()}
        <Block alignItems="baseline">
          <Block className="DateTime-timezone" textSize="6" width={TIME_ZONE_WIDTH}>
            {displayLocalDateTime ? 'local' : 'UTC'}
          </Block>
          <Block className="DateTime-value fw-700 fs-4-responsive">
            {`${momentValue.format(this.getDateFormat())}`}
          </Block>
        </Block>
        {this.renderAlternativeDateTimeDisplay()}
      </TextContainer>
    );
  }
}

DateTime.propTypes = propTypes;
DateTime.defaultProps = defaultProps;

export default DateTime;
