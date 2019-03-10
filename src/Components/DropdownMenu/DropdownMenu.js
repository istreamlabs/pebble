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
    const { trigger, disabled } = this.props;

    if (typeof trigger === 'string') {
      return (
        <Button
          onClick={this.onToggle}
          icon="arrow-small-down"
          iconAfterText
          className="dropdown-toggle"
          disabled={disabled}
        >
          {trigger}
        </Button>
      );
    }

    return React.cloneElement(trigger, {
      onClick: () => this.onToggle()
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
        aria-hidden={!isOverlayOpen}
        paddingVertical="2"
      >
        {children}
      </Block>
    );

    return isOverlayOpen ? overlayContents : null;
  }

  render() {
    const { isOverlayOpen } = this.state;
    const { className, trapFocus } = this.props;
    const classes = classNames('dropdown-container', className);

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
   * Additional classNames to add
   */
  className: PropTypes.string,
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
  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export { DropdownMenu as DropdownMenuWithoutOnClickOutside };

export default onClickOutside(DropdownMenu);
