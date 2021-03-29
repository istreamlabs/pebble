// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'prop-types' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'moment' or its corresponding t... Remove this comment to see the full error message
import moment from 'moment';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classNames from 'classnames';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Text from '../Text/Text';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TextContainer/TextContainer' was resolv... Remove this comment to see the full error message
import TextContainer from '../TextContainer/TextContainer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Tooltip/Tooltip' was resolved to '/User... Remove this comment to see the full error message
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
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'DateTime'... Remove this comment to see the full error message
      ? `YYYY-MM-DD ${timeFormat}`
      : 'YYYY-MM-DD';
  }

  getFormattedDateTime(timezone) {
    const { value } = this.props;

    const momentValue = moment(value);

    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'timezone' implicitly has an 'any' type.
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
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'DateTime'... Remove this comment to see the full error message
    const {
      excludeTime,
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      displayLocalDateTime,
      hideTimeZone,
      showAlternativeTimeZone,
      size,
    } = this.props;

    if (excludeTime || !showAlternativeTimeZone) return;

    const classes = classNames({
      'fs-6-responsive': size === 'small',
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'DateTime'... Remove this comment to see the full error message
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
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            {displayLocalDateTime ? 'UTC' : 'local'}
          </Block>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        )}
        <div className={classes}>
          {this.getFormattedDateTime(
            displayLocalDateTime ? 'UTC' : 'local',
          )}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </div>
      </Block>
    );
  }

  renderTime() {
    const {
      displayLocalDateTime,
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      showAlternativeTimeZone,
    } = this.props;

    const timeZone = displayLocalDateTime ? 'local' : 'UTC';
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'DateTime'... Remove this comment to see the full error message
    const altTimeZone = displayLocalDateTime ? 'UTC' : 'local';

    if (!showAlternativeTimeZone) {
      return (
        <Tooltip
          content={`${this.getFormattedDateTime(
            altTimeZone,
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          )} ${altTimeZone}`}
        >
          <span
            className="underline-dotted"
            // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            style={{ textDecorationColor: '#C5CDD5' }}
          >
            {this.getFormattedDateTime(timeZone)}
          </span>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </Tooltip>
      );
    }

    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return <span>{this.getFormattedDateTime(timeZone)}</span>;
  }

  render() {
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    const {
      className,
      displayLocalDateTime,
      hideTimeZone,
      showAlternativeTimeZone,
      size,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'DateTime'... Remove this comment to see the full error message
    } = this.props;

    const classes = classNames('DateTime-value', {
      'fs-6-responsive': size === 'small',
      'fs-5-responsive': size === 'medium',
      'fs-4-responsive': size === 'large',
      ' fw-700': showAlternativeTimeZone,
    });

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TextContainer tight className={className}>
        {this.renderLabel()}
        <Block alignItems="baseline">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          {!hideTimeZone && (
            <Block
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              className="DateTime-timezone neutral-500"
              textSize="6"
              width={TIME_ZONE_WIDTH}
            >
              {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              {displayLocalDateTime ? 'local' : 'UTC'}
            </Block>
          )}
          <Block className={classes}>{this.renderTime()}</Block>
        </Block>
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message */}
        {this.renderAlternativeDateTimeDisplay()}
      </TextContainer>
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
    );
  }
}

// @ts-expect-error ts-migrate(2339) FIXME: Property 'displayName' does not exist on type 'typ... Remove this comment to see the full error message
DateTime.propTypes = propTypes;
DateTime.defaultProps = defaultProps;
DateTime.displayName = 'DateTime';

export default DateTime;
