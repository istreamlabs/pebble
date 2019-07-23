import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Overlay from '../Overlay/Overlay';
import ToastContainer from '../ToastContainer/ToastContainer';

import './Frame.scss';

export const APP_FRAME_MAIN = 'AppFrameMain';
const APP_FRAME_NAV = 'AppFrameNav';

const propTypes = {
  /**
   * Contents of the frame
   */
  children: PropTypes.node,
  /**
   * Component that will be rendered in the left sidebar of an application frame
   */
  navigation: PropTypes.node.isRequired,
  /**
   * A callback function that is called when the navigation is toggled
   */
  onNavigationToggle: PropTypes.func,
  /**
   * Title text that appears in header and MainMenu
   */
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  children: null,
  onNavigationToggle: () => {},
};

/**
 * The frame component provides UI structure for iStreamPlanet applications.
 * * It wraps [main navigation](/#/Components/MainMenu) and main content
 * * Includes a container for displaying [Toast](/#/Components/Toast) notifications
 * * Adds a header with a navigation toggle button for mobile-sized viewports
 *
 * ---
 */

export class Frame extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isSkipFocused: false,
      isShowingMobileNav: false,
      navCollapsed: false,
    };

    this.mainContent = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.handleKeyDown,
      false,
    );
  }

  handleSkipToMain = () => {
    this.mainContent.current.setAttribute('tabindex', '-1');
    this.mainContent.current.focus();
  };

  handleBlurMain = () => {
    this.mainContent.current.removeAttribute('tabindex');
  };

  handleFocus = () => {
    this.setState({ isSkipFocused: true });
  };

  handleBlur = () => {
    this.setState({ isSkipFocused: false });
  };

  handleNavigationToggle = () => {
    const { onNavigationToggle } = this.props;
    const { isShowingMobileNav } = this.state;
    this.setState({ isShowingMobileNav: !isShowingMobileNav }, () => {
      if (onNavigationToggle) {
        onNavigationToggle(!isShowingMobileNav);
      }
    });
  };

  handleNavigationDismiss = () => {
    const { onNavigationToggle } = this.props;
    const { isShowingMobileNav } = this.state;
    if (isShowingMobileNav) {
      this.setState({ isShowingMobileNav: false }, () => {
        if (onNavigationToggle) {
          onNavigationToggle(false);
        }
      });
    }
  };

  handleKeyDown = event => {
    const { code } = event;

    if (code === 'Escape') {
      this.handleNavigationDismiss();
    }
    if (code === 'Backslash') {
      this.handleNavigationMinimize();
    }
  };

  handleNavigationMinimize = () => {
    const { navCollapsed } = this.state;
    this.setState({ navCollapsed: !navCollapsed });
  };

  renderSkipToContent = () => {
    const { isSkipFocused } = this.state;

    const skipClassName = classNames(
      'skip',
      isSkipFocused && 'focused',
    );

    return (
      <div className={skipClassName}>
        <Button
          onClick={this.handleSkipToMain}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          id="skipBtn"
        >
          Skip to content
        </Button>
      </div>
    );
  };

  renderNavigation = () => {
    const { navigation } = this.props;
    const { isShowingMobileNav, navCollapsed } = this.state;

    const navigationClasses = classNames('navigation', {
      open: isShowingMobileNav,
      relative: !isShowingMobileNav,
    });

    return (
      <FocusTrap
        active={isShowingMobileNav}
        focusTrapOptions={{
          clickOutsideDeactivates: true,
        }}
      >
        <div
          className={navigationClasses}
          onKeyDown={this.handleKeyDown}
          onClick={this.handleOnClick}
          id={APP_FRAME_NAV}
          key="NavContent"
        >
          {navCollapsed && (
            <Block
              styles={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: 'absolute',
                zIndex: 1,
              }}
              tabIndex="-1"
              onMouseOver={() =>
                this.setState({ navCollapsed: false })
              }
              onFocus
            />
          )}
          {navigation}
          {isShowingMobileNav && (
            <Button
              className="frame-close-nav shadow-2"
              icon="remove-circle"
              onClick={this.handleNavigationDismiss}
              accessibilityLabel="close menu"
              plain
              size="large"
            />
          )}
        </div>
      </FocusTrap>
    );
  };

  renderOverlay = () => {
    const { navigation } = this.props;
    const { isShowingMobileNav } = this.state;

    if (navigation && isShowingMobileNav) {
      return (
        <Overlay
          onClick={this.handleNavigationDismiss}
          styles={{ zIndex: 99 }}
        />
      );
    }
    return null;
  };

  handleOnClick = ({ target }) => {
    if (target.tagName.toLowerCase() === 'a' && target.href) {
      this.handleNavigationDismiss();
    }
  };

  render() {
    const { children, title } = this.props;
    const { navCollapsed } = this.state;

    const frameClasses = classNames('frame', {
      'frame-collapse-main-menu': navCollapsed,
    });

    return (
      <div className={frameClasses}>
        {this.renderSkipToContent()}
        <header className="frame-header ph-4 ph-5-ns ph-6-m ph-7-l">
          <Button
            icon="menu"
            accessibilityLabel="toggle main menu"
            onClick={this.handleNavigationToggle}
          />
          <div>{title}</div>
        </header>
        {this.renderNavigation()}
        {this.renderOverlay()}
        <main
          className="main"
          id={APP_FRAME_MAIN}
          ref={this.mainContent}
          onBlur={this.handleBlurMain}
        >
          <ToastContainer enableMultiContainer />
          {children}
        </main>
      </div>
    );
  }
}

Frame.propTypes = propTypes;
Frame.defaultProps = defaultProps;

export default Frame;
