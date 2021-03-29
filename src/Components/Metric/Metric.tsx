// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Icon from '../Icon/Icon';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Tooltip/Tooltip' was resolved to '/User... Remove this comment to see the full error message
import Text from '../Text/Text';
import Tooltip from '../Tooltip/Tooltip';
import formatters from '../../Utils/Formatters';
import useResponsiveLayout from '../../Hooks/UseResponsiveLayout';

const propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * An object where each key is the range, and the value of the key is the state. Or a custom function that returns one of the following: ["neutral", "warn", "danger", "success"]
   */
  colorRules: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'value' implicitly has an 'any' type.
   * Custom formatter based on javascript [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat). Defaults to formatter.number.
   */
  formatter: PropTypes.func,
  /**
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'cp' implicitly has an 'any' type.
   * Supplemental information about the metric that can be seen via a [Tooltip](/#/Components/Tooltip)
   */
  helpText: PropTypes.node,
  /**
   // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
   * Number of decimal places to display (fixed-point notation)
   */
  precision: PropTypes.number,
  /**
   // @ts-expect-error ts-migrate(2554) FIXME: Expected 1 arguments, but got 2.
   * Content that appears before the value
   */
  prefix: PropTypes.node,
  /**
   * Additional classNames to add to the prefix
   */
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'colorRules' implicitly has an 'any' typ... Remove this comment to see the full error message
  prefixClassName: PropTypes.string,
  /**
   * Controls the text size of the value
   // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
   * @type {PropTypes.Requireable<Size>}
   */
  // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Content that appears after the value
   */
  suffix: PropTypes.node,
  /**
   * Additional classNames to add to the suffix
   */
  suffixClassName: PropTypes.string,
  /**
   // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
   * The label of the metric. Be sure to include unit type if appropriate
   */
  title: PropTypes.node.isRequired,
  /**
   * Value of the metric
   */
  value: PropTypes.node.isRequired,
};

const defaultProps = {
  formatter: formatters.number,
  size: 'large',
};

function isBetween(value, min, max) {
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'size' implicitly has an 'any' type.
  return value >= min && value < max;
}

const COLOR_MAP = {
  neutral: 'neutral-600',
  warn: 'yellow',
  danger: 'red',
  success: 'green',
};

const calculateColorFromValues = (cp, value) => {
  // eslint-disable-next-line no-unused-vars
  for (const k in cp) {
    const min = parseFloat(k.split('-')[0], 10);
    const max = parseFloat(k.split('-')[1], 10);
    const valueColor = cp[k];
    if (isBetween(value, min, max)) {
      return valueColor;
    }
  }
};

// @ts-expect-error ts-migrate(2461) FIXME: Type 'boolean[] | undefined' is not an array type.
const getValueColor = (colorRules, value) => {
  let result;
  if (colorRules) {
    if (typeof colorRules === 'function') {
      result = COLOR_MAP[colorRules(value)];
    } else {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      result = COLOR_MAP[calculateColorFromValues(colorRules, value)];
    }
    if (result === undefined) {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      // eslint-disable-next-line no-console
      console.warn(
        'The colorRules result of',
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        COLOR_MAP[colorRules(value)],
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        'must be one of the following:',
        Object.keys(COLOR_MAP),
      );
    }
  }
  return result;
};

/**
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
 * Returns the font size of the Metric when give size small, medium or large
 * @param {string} size small, medium, large
 */

// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
export const getMetricValueSize = size => {
  switch (size) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    case 'large':
      return 1;
    case 'medium':
      return 2;
    case 'small':
      return 5;
    default:
      return 1;
  }
};

/**
 // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
 * Used to display statistic or metric (e.g. key performance indicator)
 *
 * ---
 */

// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
function Metric(props) {
  const {
    className,
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    colorRules,
    formatter,
    helpText,
    prefix,
    suffixClassName,
    prefixClassName,
    size,
    suffix,
    title,
    value,
  } = props;

  const [isPhone] = useResponsiveLayout();

  const renderValue = () => {
    if (typeof value === 'number' || typeof value === 'string') {
      return (
        <Text responsive bold size={getMetricValueSize(size)}>
          {formatter(value, props)}
        </Text>
      );
    }
    return value;
  };

  return (
    <Block flex direction="column" className={className}>
      <Block itemSpacing="2">
        <Text bold size={isPhone ? 7 : 6} color="neutral-500">
          {title}
        </Text>
        {helpText && (
          <Tooltip content={helpText}>
            <span>
              <Icon name="info-circle" className="neutral-500" />
            </span>
          </Tooltip>
        )}
      </Block>

      <Block
        color={getValueColor(colorRules, value)}
        alignItems="baseline"
        itemSpacing={[1, 1, 2]}
      >
        {prefix && <span className={prefixClassName}>{prefix}</span>}
        {renderValue()}
        {suffix && <span className={suffixClassName}>{suffix}</span>}
      </Block>
    </Block>
  );
}

Metric.propTypes = propTypes;
Metric.defaultProps = defaultProps;
Metric.displayName = 'Metric';
export default Metric;
