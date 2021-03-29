// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'prop-types' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classNames from 'classnames';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-popper' or its correspon... Remove this comment to see the full error message
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

    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
    const { active } = this.props;

    this.state = {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Tooltip'.
      tooltipVisible: active,
    };
  }

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Tooltip'.
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
          // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'ref' implicitly has an 'any' type... Remove this comment to see the full error message
          ref={ref}
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Tooltip'.
          onMouseEnter={this.handleMouseEnter}
          onFocus={this.handleFocus}
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
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
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      onMouseEnter: this.handleMouseEnter,
      onFocus: this.handleFocus,
      onMouseLeave: this.handleMouseLeave,
      onBlur: this.handleBlur,
      tabIndex: 0,
    });
  };

  renderTooltip = ({ ref, placement, style }) => {
    const { className, content } = this.props;
    // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'ref' implicitly has an 'any' type... Remove this comment to see the full error message
    const classes = classNames('tooltip', className);

    // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'placement' implicitly has an 'any... Remove this comment to see the full error message
    return (
      <div
        className={classes}
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Tooltip'.
        data-tooltip-placement={placement}
        ref={ref}
        role="tooltip"
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        style={style}
      >
        {content}
      </div>
    );
  };

  render() {
    const { placement } = this.props;
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    const { tooltipVisible } = this.state;

    return (
      <Manager>
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Tooltip'. */}
        <Reference>{this.renderTrigger}</Reference>
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Tooltip'. */}
        {tooltipVisible && (
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Popper
            placement={placement}
            modifiers={{
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
Tooltip.displayName = 'Tooltip';

export default Tooltip;
