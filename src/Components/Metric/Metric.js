import React from 'react';
import PropTypes from 'prop-types';

import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import Tooltip from '../Tooltip/Tooltip';
import useResponsiveLayout from '../../Hooks/UseResponsiveLayout';

const propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Custom formatter using javascript [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
   */
  formatter: PropTypes.objectOf(Intl.NumberFormat),
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
  title: PropTypes.node,
  /**
   * Value of the metric
   */
  value: PropTypes.node,
  /**
   * Additional css classes to apply to the value
   */
  valueClass: PropTypes.string,
  /**
   * Color the metric value
   */
  type: PropTypes.oneOf(['danger', 'success']),
};

const defaultProps = {
  precision: 0,
};

/**
 * Used to display statistic or metric (e.g. key performance indicator)
 *
 * ---
 */

function Metric(props) {
  const {
    className,
    formatter,
    helpText,
    precision,
    prefix,
    suffixClassName,
    prefixClassName,
    suffix,
    title,
    value,
    type,
  } = props;

  const [isPhone, isTablet] = useResponsiveLayout();
  const isMobile = isPhone || isTablet;

  let valueColor;
  switch (type) {
    case 'danger':
      valueColor = 'red';
      break;
    case 'success':
      valueColor = 'green';
      break;
    default:
      valueColor = null;
  }

  const getFormattedMetric = () => {
    if (formatter) {
      return formatter.format(value);
    }
    if (typeof value === 'number') {
      return value.toLocaleString(navigator.language, {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
      });
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
        color={valueColor}
        alignItems="baseline"
        itemSpacing={[1, 1, 2]}
      >
        {prefix && <span className={prefixClassName}>{prefix}</span>}
        <Text bold size={isMobile ? 3 : 1}>
          {getFormattedMetric()}
        </Text>
        {suffix && <span className={suffixClassName}>{suffix}</span>}
      </Block>
    </Block>
  );
}

Metric.propTypes = propTypes;
Metric.defaultProps = defaultProps;

export default Metric;
