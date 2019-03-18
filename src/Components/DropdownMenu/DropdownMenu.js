import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import FocusTrap from 'focus-trap-react';

import Block from '../Block/Block';
import Button from '../Button/Button';

import './DropdownMenu.scss';

/**
 * Creates a dropdown menu with optional groups with headings.
 *
 * ---
 */

export class DropdownMenu extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOverlayOpen: props.open || false,
    };
  }

  onToggle = () => {
    const { isOverlayOpen } = this.state;
    this.setState({ isOverlayOpen: !isOverlayOpen }, () => (isOverlayOpen ? this.handleClose() : this.handleOpen()));
  }

  // used by onClickOutside HOC
  handleClickOutside = () => {
    const { isOverlayOpen } = this.state;

    if (isOverlayOpen) {
      this.setState({ isOverlayOpen: false }, this.handleClose());
    }
  };

  handleClose = () => {
    const { onClose } = this.props;
    onClose && onClose();
  }

  handleOpen = () => {
    const { onOpen } = this.props;
    onOpen && onOpen();
  }

  renderToggle() {
    const {
      fullWidth,
      size,
      toggle,
      toggleClassName,
      disabled
    } = this.props;

    if (typeof toggle === 'string') {
      return (
        <Button
          onClick={this.onToggle}
          icon="arrow-small-down"
          iconAfterText
          className={toggleClassName}
          disabled={disabled}
          aria-haspopup
          fullWidth={fullWidth}
          size={size}
        >
          {toggle}
        </Button>
      );
    }

    return React.cloneElement(toggle, {
      onClick: () => this.onToggle(),
      disabled,
      'aria-haspopup': true,
    });
  }

  renderOverlay = () => {
    const { isOverlayOpen } = this.state;
    const { children, overlayClassName } = this.props;

    const classes = classNames('dropdown-overlay', overlayClassName);

    const overlayContents = (
      <Block
        direction="column"
        className={classes}
        paddingVertical="2"
        role="menu"
        aria-hidden={!isOverlayOpen}
        aria-expanded={!isOverlayOpen}
      >
        {children}
      </Block>
    );

    return isOverlayOpen ? overlayContents : null;
  }

  render() {
    const { isOverlayOpen } = this.state;
    const { className, fullWidth, trapFocus } = this.props;
    const classes = classNames('dropdown-container', {
      'w-100': fullWidth,
    }, className);

    const enableFocusTrap = trapFocus ? isOverlayOpen : false;

    return (
      <FocusTrap
        active={enableFocusTrap}
        focusTrapOptions={{
          clickOutsideDeactivates: true,
        }}
      >
        <div className={classes}>
          {this.renderToggle()}
          {this.renderOverlay()}
        </div>
      </FocusTrap>
    );
  }
}

DropdownMenu.defaultProps = {
  trapFocus: true,
  open: false,
};

DropdownMenu.propTypes = {
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
   * trap focus when the dropdown is open
   */
  trapFocus: PropTypes.bool,
  /**
   * Content that will open and close the dropdown menu. Passing a string will render a Button with a down arrow.
   */
  toggle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export { DropdownMenu as DropdownMenuWithoutOnClickOutside };

export default onClickOutside(DropdownMenu);
