import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Overlay from '../Overlay/Overlay';
import TenantMenu from '../TenantMenu/TenantMenu';
import Text from '../Text/Text';
import ToastContainer from '../ToastContainer/ToastContainer';

import { getBreakpointLayout } from '../../Utils';

import './Frame.scss';

export const APP_FRAME_MAIN = 'AppFrameMain';
const APP_FRAME_NAV = 'AppFrameNav';

const propTypes = {
  /**
   * Contents of the frame
   */
  children: PropTypes.node,
  /**
   * Highlight the currently selected tenant and set the title to current name and realm
   * in the header on mobile viewports and top of the MainMenu on desktop
   */
  currentTenant: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    realm: PropTypes.string,
    url: PropTypes.string,
  }),
  /**
   * Component that will be rendered in the left sidebar of an application frame
   */
  navigation: PropTypes.node.isRequired,
  /**
   * A callback function that is called when the navigation is toggled
   */
  onNavigationToggle: PropTypes.func,
  /**
   * A list of tenants the current user has access to
   */
  tenants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      realm: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  /**
   * Title text that appears in header and MainMenu on mobile
   */
  title: PropTypes.string,
};

const defaultProps = {
  children: null,
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
      showTenantMenu: false,
      breakpoints: getBreakpointLayout(),
    };

    this.mainContent = React.createRef();
  }

  componentDidMount() {
    document.addEventListener(
      'keydown',
      this.handleNavKeydown,
      false,
    );
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.handleNavKeydown,
      false,
    );
    window.removeEventListener('resize', this.handleResize);
  }

  getFrameTitle = () => {
    const { currentTenant, title } = this.props;

    if (currentTenant) {
      return (
        <Block direction="column">
          <Text bold>{currentTenant.name}</Text>
          <Text size="6">{currentTenant.realm}</Text>
        </Block>
      );
    }

    if (title) {
      return title;
    }
  };

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

  handleResize = () => {
    this.setState({ breakpoints: getBreakpointLayout() });
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
    const { isShowingMobileNav, showTenantMenu } = this.state;
    if (isShowingMobileNav) {
      this.setState({ isShowingMobileNav: false }, () => {
        if (onNavigationToggle) {
          onNavigationToggle(false);
        }
      });
    }
    if (showTenantMenu) {
      this.setState({ showTenantMenu: false });
    }
  };

  handleTenantMenuToggle = () => {
    const { showTenantMenu } = this.state;
    this.setState({ showTenantMenu: !showTenantMenu });
  };

  handleNavKeydown = event => {
    const { key } = event;
    if (key === 'Escape') {
      this.handleNavigationDismiss();
    }
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

  renderHeader = () => {
    const { breakpoints } = this.state;
    const [isPhone, isTablet] = breakpoints;
    const isMobile = isPhone || isTablet;

    if (isMobile) {
      return (
        <header className="frame-header ph-4 ph-5-ns ph-6-m ph-7-l">
          <Block alignItems="center">
            {this.getFrameTitle()}
            <Button
              plain
              className="ml-3"
              accessibilityLabel="show tenant menu"
              icon="menu-dots"
              onClick={this.handleTenantMenuToggle}
              size="large"
            />
          </Block>
          <Button
            icon="menu"
            accessibilityLabel="toggle main menu"
            onClick={this.handleNavigationToggle}
          />

          {this.renderTenantMenu()}
        </header>
      );
    }
  };

  renderMainMenu = () => {
    const { navigation, tenants } = this.props;
    const {
      isShowingMobileNav,
      breakpoints,
      showTenantMenu,
    } = this.state;
    const [isPhone, isTablet] = breakpoints;
    const isMobile = isPhone || isTablet;

    const navigationClasses = classNames('navigation', {
      open: isShowingMobileNav,
    });

    const mobileCloseMainMenuBtn = (
      <Button
        icon="remove"
        onClick={this.handleNavigationDismiss}
        accessibilityLabel="close menu"
      />
    );

    const menu = tenants
      ? React.cloneElement(navigation, {
          onShowTenantMenu: () => this.handleTenantMenuToggle(),
          title: this.getFrameTitle(),
          mobileHeaderContent: mobileCloseMainMenuBtn,
        })
      : React.cloneElement(navigation, {
          title: this.getFrameTitle(),
          mobileHeaderContent: mobileCloseMainMenuBtn,
        });

    if (isMobile) {
      return (
        <FocusTrap
          active={isShowingMobileNav && !showTenantMenu}
          focusTrapOptions={{
            clickOutsideDeactivates: true,
          }}
        >
          <div
            className={navigationClasses}
            onKeyDown={this.handleNavKeydown}
            onClick={this.handleOnClick}
            id={APP_FRAME_NAV}
            key="NavContent"
          >
            {menu}
          </div>
        </FocusTrap>
      );
    }

    return (
      <div
        className={navigationClasses}
        onKeyDown={this.handleNavKeydown}
        onClick={this.handleOnClick}
        id={APP_FRAME_NAV}
        key="NavContent"
      >
        {this.renderTenantMenu()}
        {menu}
      </div>
    );
  };

  renderTenantMenu = () => {
    const { tenants } = this.props;
    const { showTenantMenu } = this.state;

    if (showTenantMenu) {
      return (
        <FocusTrap
          active={showTenantMenu}
          focusTrapOptions={{
            clickOutsideDeactivates: true,
          }}
        >
          <Block
            direction="column"
            className="frame-tenant-menu-container"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <TenantMenu
              tenants={tenants}
              onCloseTenantMenu={this.handleTenantMenuToggle}
            />
          </Block>
        </FocusTrap>
      );
    }
  };

  renderOverlay = () => {
    const { navigation, tenants } = this.props;
    const {
      isShowingMobileNav,
      showTenantMenu,
      breakpoints,
    } = this.state;
    const [isPhone, isTablet] = breakpoints;
    const isMobile = isPhone || isTablet;

    // on desktop, do not show overlay if TenantMenu is not shown
    if (!isMobile && !showTenantMenu) {
      return null;
    }

    if (
      (navigation && isShowingMobileNav) ||
      (tenants && showTenantMenu)
    ) {
      return (
        <Overlay
          onClick={this.handleNavigationDismiss}
          style={{ zIndex: 99 }}
        />
      );
    }
  };

  handleOnClick = ({ target }) => {
    if (target.tagName.toLowerCase() === 'a' && target.href) {
      this.handleNavigationDismiss();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <div className="frame">
        {this.renderSkipToContent()}
        {this.renderHeader()}
        {this.renderMainMenu()}
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
