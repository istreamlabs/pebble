import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Popper, Reference } from 'react-popper';
import { placementType } from '../../Types';

import './Tooltip.scss';

const propTypes = {
  /**
   * Show the tooltip when the component is initially mounted
   */
  active: PropTypes.bool,
  /**
   * The string or node that triggers the tooltip
   */
  children: PropTypes.node,
  /**
   * Additional classes to add to the tooltip overlay
   */
  className: PropTypes.string,
  /**
   * Text displayed inside the tooltip
   */
  content: PropTypes.string,
  /**
   * Where the overlay menu will appear relative to the toggle
   *
   * One of: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`,
   * @type {PropTypes.Requireable<PlacementType>}
   */
  placement: placementType,
};

const defaultProps = {
  active: false,
  placement: 'top',
};

/**
 * Tooltips provide additional information on hover or focus.
 *
 * ---
 */

export class Tooltip extends React.PureComponent {
  constructor(props) {
    super(props);

    const { active } = this.props;

    this.state = {
      tooltipVisible: active,
    };
  }

  handleMouseEnter = () => {
    this.setState({ tooltipVisible: true });
  };

  handleMouseLeave = () => {
    this.setState({ tooltipVisible: false });
  };

  handleFocus = () => {
    this.setState({ tooltipVisible: true });
  };

  handleBlur = () => {
    this.setState({ tooltipVisible: false });
  };

  renderTrigger = ({ ref }) => {
    const { children } = this.props;

    if (typeof children === 'string') {
      return (
        <span
          ref={ref}
          onMouseEnter={this.handleMouseEnter}
          onFocus={this.handleFocus}
          onMouseLeave={this.handleMouseLeave}
          onBlur={this.handleBlur}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex="0"
        >
          {children}
        </span>
      );
    }

    return React.cloneElement(children, {
      ref,
      onMouseEnter: this.handleMouseEnter,
      onFocus: this.handleFocus,
      onMouseLeave: this.handleMouseLeave,
      onBlur: this.handleBlur,
      tabIndex: 0,
    });
  };

  renderTooltip = ({ ref, placement, style }) => {
    const { className, content } = this.props;
    const classes = classNames('tooltip', className);

    return (
      <span
        className={classes}
        data-placement={placement}
        ref={ref}
        role="tooltip"
        style={style}
      >
        {content}
      </span>
    );
  };

  render() {
    const { placement } = this.props;
    const { tooltipVisible } = this.state;

    return (
      <Manager>
        <Reference>{this.renderTrigger}</Reference>
        {tooltipVisible && (
          <Popper
            placement={placement}
            modifiers={{
              preventOverflow: {
                enabled: true,
              },
              offset: {
                offset: '0, 5px',
              },
            }}
          >
            {this.renderTooltip}
          </Popper>
        )}
      </Manager>
    );
  }
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
