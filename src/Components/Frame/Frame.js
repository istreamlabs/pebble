import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';

import Button from '../Button/Button';
import MainMenu from '../MainMenu/MainMenu';
import Overlay from '../Overlay/Overlay';

import './Frame.scss';

export const APP_FRAME_MAIN = 'AppFrameMain';
const APP_FRAME_NAV = 'AppFrameNav';

function focusAppFrameMain() {
  window.location.assign(`${window.location.pathname}#${APP_FRAME_MAIN}`);
}

/**
 * The frame component provides UI structure for iStreamPlanet applications.
 * It wraps [main navigation](/#/Components/MainMenu) and main content,
 * and adds a header with a navigation toggle button for mobile-sized viewports.
 *
 * ---
 */

export class Frame extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      isSkipFocused: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleNavKeydown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleNavKeydown, false);
  }

  render() {
    const {
      isSkipFocused,
    } = this.state;

    const {
      children,
      isShowingMobileNav,
      navigation,
      onNavigationToggle,
      title,
    } = this.props;

    const navigationClasses = classNames('navigation', {
      open: isShowingMobileNav
    });

    const navigationMarkup = navigation ? (
      <FocusTrap
        active={isShowingMobileNav}
        focusTrapOptions={{
          clickOutsideDeactivates: true,
        }}
      >
        <div
          className={navigationClasses}
          onKeyDown={this.handleNavKeydown}
          id={APP_FRAME_NAV}
          key="NavContent"
        >
          {navigation}
          {isShowingMobileNav && (
          <Button
            className="frame-close-nav"
            icon="remove-circle"
            onClick={this.handleNavigationDismiss}
            accessibilityLabel="close menu"
            plain
            size="large"
          />
          )}
        </div>
      </FocusTrap>
    ) : null;

    const navigationOverlayMarkup = navigation && isShowingMobileNav ? (
      <Overlay onClick={this.handleNavigationDismiss} />
    ) : null;

    const skipClassName = classNames(
      'skip',
      isSkipFocused && 'focused',
    );

    const skipToContent = (
      <div className={skipClassName}>
        <Button
          onClick={this.handleSkipToContent}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          id="skipBtn"
        >
          Skip to content
        </Button>
      </div>
    );

    return (
      <div className="frame">
        {skipToContent}
        <header className="frame-header">
          <Button
            icon="menu"
            accessibilityLabel="toggle main menu"
            onClick={onNavigationToggle}
          />
          <div>{title}</div>
        </header>
        {navigationMarkup}
        {navigationOverlayMarkup}
        <main
          className="main"
          id={APP_FRAME_MAIN}
        >
          {children}
        </main>
      </div>
    );
  }

  handleSkipToContent = () => {
    focusAppFrameMain();
  }

  handleFocus = () => {
    this.setState({ isSkipFocused: true });
  }

  handleBlur = () => {
    this.setState({ isSkipFocused: false });
  }

  handleNavigationDismiss = () => {
    const { isShowingMobileNav, onNavigationToggle } = this.props;
    if (onNavigationToggle != null && isShowingMobileNav) {
      onNavigationToggle();
    }
  }

  handleNavKeydown = (event) => {
    const { key } = event;
    if (key === 'Escape') {
      this.handleNavigationDismiss();
    }
  }
}

Frame.propTypes = {
  /**
   * Component that will be rendered in the left sidebar of an application frame
   */
  navigation: ({ navigation }) => {
    if (navigation === undefined || (navigation && navigation.type !== MainMenu)) {
      return new Error('Frame expects navigation to be a MainMenu instance.');
    }
  },
  /**
   * A callback function to handle clicking the mobile navigation toggle button
   */
  onNavigationToggle: PropTypes.func.isRequired,
  /**
   * Is the mobile nav currently open
   */
  isShowingMobileNav: PropTypes.bool.isRequired,
  /**
  * Contents of the frame
  */
  children: PropTypes.node,
  /**
   * Title text that appears in header and MainMenu
   */
  title: PropTypes.string.isRequired,
};

export default Frame;
