import React from 'react';
import PropTypes from 'prop-types';

import './Dropdown.scss';

export class Dropdown extends React.PureComponent {
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

  handleClose = () => {
    const { onClose } = this.props;
    onClose && onClose();

    document.removeEventListener('click', this.onToggle);
  }

  handleOpen = () => {
    const { onOpen } = this.props;
    onOpen && onOpen();
    document.addEventListener('click', this.onToggle);
  }

  renderToggle() {
    const { children } = this.props;

    return React.cloneElement(children, {
      onClick: () => this.onToggle()
    });
  }

  renderOverlay = () => {
    const { overlay } = this.props;
    const { isOverlayOpen } = this.state;

    const overlayContents = (
      <div className="dropdown-overlay">
        {overlay}
      </div>
    );

    return isOverlayOpen ? overlayContents : null;
  }

  render() {
    return (
      <div className="dropdown-container">
        {this.renderToggle()}
        {this.renderOverlay()}
      </div>
    );
  }
}

Dropdown.propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
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
   * The dropdown menu
   */
  overlay: PropTypes.node.isRequired,
};

export default Dropdown;
