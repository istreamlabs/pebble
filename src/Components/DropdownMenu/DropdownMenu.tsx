import './DropdownMenu.scss';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-popper' or its correspon... Remove this comment to see the full error message
import { Manager, Popper, Reference } from 'react-popper';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'focus-trap-react' or its corre... Remove this comment to see the full error message
import FocusTrap from 'focus-trap-react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'prop-types' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classNames from 'classnames';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-onclickoutside' or its c... Remove this comment to see the full error message
import onClickOutside from 'react-onclickoutside';
import { placementType } from '../../Types';

const propTypes = {
  /**
   * Additional classNames to add to the container
   */
  className: PropTypes.string,
  /**
   * Additional classNames to add to the default toggle button
   */
  toggleClassName: PropTypes.string,
  /**
   * Additional classNames to add to the dropdown overlay
   */
  overlayClassName: PropTypes.string,
  /**
   * Contents of the component
   */
  children: PropTypes.node,
  /**
   * Whether dropdown is disabled
   */
  disabled: PropTypes.bool,
  /**
   * Takes up the full width of its parent container
   */
  fullWidth: PropTypes.bool,
  /**
   * The name of the [icon](/#/Components/Icon) to add before the toggle label
   */
  icon: PropTypes.string,
  /**
   * Changes the size of all buttons in the group
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Callback when overlay is closed
   */
  onClose: PropTypes.func,
  /**
   * Callback when overlay is open
   */
  onOpen: PropTypes.func,
  /**
   * Whether the drop should be open or not. Will not apply after component is been rendered.
   */
  open: PropTypes.bool,
  /**
   * Where the overlay menu will appear relative to the toggle
   *
   * One of: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`,
   * @type {PropTypes.Requireable<PlacementType>}
   */
  placement: placementType,
  /**
   * trap focus when the dropdown is open
   */
  trapFocus: PropTypes.bool,
  /**
   * Content that will open and close the dropdown menu. Passing a string will render a Button with a down arrow.
   */
  toggle: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    .isRequired,
};

const defaultProps = {
  children: null,
  disabled: false,
  fullWidth: false,
  onOpen: undefined,
  onClose: undefined,
  open: false,
  placement: 'bottom-start',
  size: 'medium',
  trapFocus: true,
};

/**
 * Creates a dropdown menu with optional groups with headings.
 *
 * ---
 */

class DropdownMenu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOverlayOpen: props.open || false,
    };
  }

  componentDidMount() {
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
    document.addEventListener('keydown', this.handleKeydown, false);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.handleKeydown,
      false,
    );
  }

  onToggle = event => {
    const { isOverlayOpen } = this.state;
    this.setState({ isOverlayOpen: !isOverlayOpen }, () =>
      isOverlayOpen
        ? // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
          this.handleClose(event)
        : // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'DropdownM... Remove this comment to see the full error message
          this.handleOpen(event),
    );
  };

  handleOverlayClick = event => {
    const hasMenuItemInTree =
      event &&
      event.target &&
      event.target.closest &&
      event.target.closest('[role=menuitem]');
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
    if (hasMenuItemInTree) {
      this.setState({ isOverlayOpen: false }, () =>
        this.handleClose(event),
      );
    }
  };

  // used by onClickOutside HOC
  handleClickOutside = event => {
    const { isOverlayOpen } = this.state;

    if (isOverlayOpen) {
      this.setState({ isOverlayOpen: false }, () =>
        this.handleClose(event),
      );
    }
  };

  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  handleClose = event => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'DropdownM... Remove this comment to see the full error message
    const { onClose } = this.props;
    onClose && onClose(event);
  };

  handleOpen = event => {
    const { onOpen } = this.props;
    onOpen && onOpen(event);
  };

  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  handleKeydown = event => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'DropdownM... Remove this comment to see the full error message
    const { isOverlayOpen } = this.state;
    const { key } = event;
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
    if (key === 'Escape' && isOverlayOpen) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'DropdownM... Remove this comment to see the full error message
      this.setState({ isOverlayOpen: false }, () =>
        this.handleClose(event),
      );
    }
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  };

  renderToggle = ({ ref }) => {
    const {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'DropdownM... Remove this comment to see the full error message
      fullWidth,
      icon,
      size,
      toggle,
      toggleClassName,
      disabled,
    } = this.props;

    if (typeof toggle === 'string') {
      return (
        <Button
          type="button"
          // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'ref' implicitly has an 'any' type... Remove this comment to see the full error message
          onClick={this.onToggle}
          icon={icon}
          iconAfterText="arrow-small-down"
          // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'DropdownM... Remove this comment to see the full error message
          className={toggleClassName}
          disabled={disabled}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          aria-haspopup
          fullWidth={fullWidth}
          size={size}
          ref={ref}
        >
          {toggle}
        </Button>
      );
    }

    return React.cloneElement(toggle, {
      onClick: this.onToggle,
      disabled,
      'aria-haspopup': true,
      ref,
    });
  };

  renderOverlay = ({ ref, placement, style }) => {
    const { isOverlayOpen } = this.state;
    const { children, overlayClassName } = this.props;

    // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'ref' implicitly has an 'any' type... Remove this comment to see the full error message
    const overlayClasses = classNames(
      'dropdown-overlay',
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'DropdownM... Remove this comment to see the full error message
      'pv-2',
      overlayClassName,
    );

    return (
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'DropdownM... Remove this comment to see the full error message
      <div
        className={overlayClasses}
        role="menu"
        aria-hidden={!isOverlayOpen}
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        aria-expanded={isOverlayOpen}
        ref={ref}
        data-placement={placement}
        style={style}
        onClick={this.handleOverlayClick}
        tabIndex="-1"
      >
        {children}
      </div>
    );
  };

  render() {
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    const { isOverlayOpen } = this.state;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'DropdownM... Remove this comment to see the full error message
    const { className, fullWidth, placement, trapFocus } = this.props;

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'DropdownM... Remove this comment to see the full error message
    const classes = classNames(
      'dropdown-container',
      {
        'w-100': fullWidth,
      },
      className,
    );
    const enableFocusTrap = trapFocus ? isOverlayOpen : false;

    return (
      <FocusTrap
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        active={enableFocusTrap}
        focusTrapOptions={{
          clickOutsideDeactivates: true,
        }}
      >
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div className={classes} onKeyDown={this.handleKeydown}>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Manager>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Reference>{this.renderToggle}</Reference>
            {isOverlayOpen && (
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <Popper
                placement={placement}
                modifiers={{
                  preventOverflow: {
                    enabled: true,
                  },
                }}
              >
                {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
                {this.renderOverlay}
              </Popper>
            )}
          </Manager>
        </div>
      </FocusTrap>
    );
  }
}

DropdownMenu.defaultProps = defaultProps;
DropdownMenu.propTypes = propTypes;
DropdownMenu.displayName = 'DropdownMenu';

export { DropdownMenu as DropdownMenuWithoutOnClickOutside };

export default onClickOutside(DropdownMenu);
