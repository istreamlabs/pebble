import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import Block from '../Block/Block';
import Text from '../Text/Text';
import TextContainer from '../TextContainer/TextContainer';
import Tooltip from '../Tooltip/Tooltip';

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
   * hide the time zone text
   */
  hideTimeZone: PropTypes.bool,
  /**
   * A label for the time that is displayed
   */
  label: PropTypes.node,
  /**
   * Format used to display time in the time column in the popover
   */
  timeFormat: PropTypes.string,
  /**
   * Show local time zone beneath the UTC time.
   * UTC time is displayed beneath the local time if `displayLocalDateTime` is true.
   *
   * When `false` a [Tooltip](/#/Components/Tooltip) will display the alternative date time on hover.
   */
  showAlternativeTimeZone: PropTypes.bool,
  /**
   * Changes the font size of the date time display value
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The value a UTC ISO 8601 string (https://en.wikipedia.org/wiki/ISO_8601)
   */
  value: PropTypes.string,
};

const defaultProps = {
  displayLocalDateTime: false,
  excludeTime: false,
  hideTimeZone: false,
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

    return dateFormat !== undefined
      ? dateFormat
      : !excludeTime
      ? `YYYY-MM-DD ${timeFormat}`
      : 'YYYY-MM-DD';
  }

  getFormattedDateTime(timezone) {
    const { value } = this.props;

    const momentValue = moment(value);

    // This is confusing but these methods modify the reference instead of returning a new value
    if (timezone === 'UTC') {
      momentValue.utc();
    } else {
      momentValue.local();
    }

    return momentValue.format(this.getDateFormat());
  }

  renderLabel() {
    const { label } = this.props;

    if (label) {
      return (
        <Text className="db" size="6">
          {label}
        </Text>
      );
    }
    return null;
  }

  renderAlternativeDateTimeDisplay() {
    const {
      excludeTime,
      displayLocalDateTime,
      hideTimeZone,
      showAlternativeTimeZone,
      size,
    } = this.props;

    if (excludeTime || !showAlternativeTimeZone) return;

    const classes = classNames({
      'fs-6-responsive': size === 'small',
      'fs-5-responsive': size === 'medium',
      'fs-4-responsive': size === 'large',
    });

    return (
      <Block alignItems="baseline">
        {!hideTimeZone && (
          <Block
            className="neutral-500"
            textSize="6"
            width={TIME_ZONE_WIDTH}
          >
            {displayLocalDateTime ? 'UTC' : 'local'}
          </Block>
        )}
        <div className={classes}>
          {this.getFormattedDateTime(
            displayLocalDateTime ? 'UTC' : 'local',
          )}
        </div>
      </Block>
    );
  }

  renderTime() {
    const {
      displayLocalDateTime,
      showAlternativeTimeZone,
    } = this.props;

    const timeZone = displayLocalDateTime ? 'local' : 'UTC';
    const altTimeZone = displayLocalDateTime ? 'UTC' : 'local';

    if (!showAlternativeTimeZone) {
      return (
        <Tooltip
          content={`${this.getFormattedDateTime(
            altTimeZone,
          )} ${altTimeZone}`}
        >
          <span
            className="underline-dotted"
            style={{ textDecorationColor: '#C5CDD5' }}
          >
            {this.getFormattedDateTime(timeZone)}
          </span>
        </Tooltip>
      );
    }

    return <span>{this.getFormattedDateTime(timeZone)}</span>;
  }

  render() {
    const {
      className,
      displayLocalDateTime,
      hideTimeZone,
      showAlternativeTimeZone,
      size,
    } = this.props;

    const classes = classNames('DateTime-value', {
      'fs-6-responsive': size === 'small',
      'fs-5-responsive': size === 'medium',
      'fs-4-responsive': size === 'large',
      ' fw-700': showAlternativeTimeZone,
    });

    return (
      <TextContainer tight className={className}>
        {this.renderLabel()}
        <Block alignItems="baseline">
          {!hideTimeZone && (
            <Block
              className="DateTime-timezone neutral-500"
              textSize="6"
              width={TIME_ZONE_WIDTH}
            >
              {displayLocalDateTime ? 'local' : 'UTC'}
            </Block>
          )}
          <Block className={classes}>{this.renderTime()}</Block>
        </Block>
        {this.renderAlternativeDateTimeDisplay()}
      </TextContainer>
    );
  }
}

DateTime.propTypes = propTypes;
DateTime.defaultProps = defaultProps;

export default DateTime;
