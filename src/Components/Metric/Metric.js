import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
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
   * An object where each key is the range, and the value of the key is the state.
   */
  colorPoints: PropTypes.object,
  /**
   * Custom formatter using javascript [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
   */
  formatter: PropTypes.func,
  /**
   * Supplemental information about the metric
   */
  helpText: PropTypes.node,
  /**
   * Number of decimal places to display (fixed-point notation)
   */
  precision: PropTypes.number,
  /**
   * Content that appears before the value
   */
  prefix: PropTypes.node,
  /**
   * Additional classNames to add to the prefix
   */
  prefixClassName: PropTypes.string,
  /**
   * Content that appears after the value
   */
  suffix: PropTypes.node,
  /**
   * Additional classNames to add to the suffix
   */
  suffixClassName: PropTypes.string,
  /**
   * The label of the metric. Be sure to include unit type if appropriate
   */
  title: PropTypes.node.isRequired,
  /**
   * Value of the metric
   */
  value: PropTypes.node.isRequired,
  /**
   * Additional css classes to apply to the value
   */
  valueClass: PropTypes.string,
};

const defaultProps = {
  formatter: formatters.number,
};

function isBetween(value, min, max) {
  return value >= min && value < max;
}

const COLOR_MAP = {
  neutral: 'neutral-600',
  warn: 'yellow',
  danger: 'red',
  success: 'green',
};

/**
 * Used to display statistic or metric (e.g. key performance indicator)
 *
 * ---
 */

function Metric(props) {
  const {
    className,
    colorPoints,
    formatter,
    helpText,
    prefix,
    suffixClassName,
    prefixClassName,
    suffix,
    title,
    value,
  } = props;

  const [isPhone, isTablet] = useResponsiveLayout();
  const isMobile = isPhone || isTablet;

  const renderValue = () => {
    if (typeof value === 'number' || typeof value === 'string') {
      return (
        <Text bold size={isMobile ? 3 : 1}>
          {formatter(value, props)}
        </Text>
      );
    }
    return value;
  };

  const getValueColor = () => {
    if (colorPoints) {
      for (const key in colorPoints) {
        if (colorPoints.hasOwnProperty(key)) {
          const min = parseFloat(key.split('-')[0], 10);
          const max = parseFloat(key.split('-')[1], 10);
          const valueColor = colorPoints[key];
          console.log(min, max, valueColor);

          if (isBetween(value, min, max)) {
            return COLOR_MAP[valueColor];
          }
        }
      }
    }
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
        color={getValueColor()}
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

export default Metric;
