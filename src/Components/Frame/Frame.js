import './Frame.scss';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Text from '../Text/Text';
import FocusTrap from 'focus-trap-react';
import Overlay from '../Overlay/Overlay';
import PropTypes from 'prop-types';
import React from 'react';
import TenantMenu from '../TenantMenu/TenantMenu';
import ToastContainer from '../ToastContainer/ToastContainer';
import classNames from 'classnames';
import { tenantType } from '../../Types';

import { motion } from 'framer-motion';

export const APP_FRAME_MAIN = 'AppFrameMain';
const APP_FRAME_NAV = 'AppFrameNav';

const propTypes = {
  /**
   * Contents of the frame
   */
  children: PropTypes.node,
  /**
   * Currently selected tenant
   */
  currentTenant: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    realm: PropTypes.string,
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
   * A list of tenants the user has access to
   */
  tenants: tenantType,
  /**
   * Title text that appears in header and MainMenu on mobile
   */
  title: PropTypes.string.isRequired,
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

const variants = {
  hideTenant: {
    x: '100%',
    transition: {
      ease: 'easeOut',
    },
  },
  showTenant: {
    x: '0',
    transition: {
      ease: 'easeOut',
    },
  },
};

const mainMenuVariants = {
  hideMenu: {
    x: '-100%',
  },
  showMenu: {
    x: '0',
  },
};

function getLayout() {
  if (!window) return [false, false, false, false];

  if (window.innerWidth <= 480) {
    return [true, false, false, false];
  }

  if (window.innerWidth > 480 && window.innerWidth <= 960) {
    return [false, true, false, false];
  }

  if (window.innerWidth > 960 && window.innerWidth <= 1440) {
    return [false, false, true, false];
  }

  if (window.innerWidth > 1440) {
    return [false, false, false, true];
  }
}

export class Frame extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isSkipFocused: false,
      isShowingMobileNav: false,
      showTenantMenu: false,
      responsiveLayout: getLayout(),
    };

    this.mainContent = React.createRef();
  }

  handleResize = () => {
    this.setState({ responsiveLayout: getLayout() });
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    document.addEventListener(
      'keydown',
      this.handleNavKeydown,
      false,
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener(
      'keydown',
      this.handleNavKeydown,
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

  handleTenantToggle = () => {
    const { showTenantMenu } = this.state;
    this.setState({ showTenantMenu: !showTenantMenu });
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

  getMenuVariants = () => {
    const { responsiveLayout } = this.state;
    const [isPhone, isTablet] = responsiveLayout;
    const isMobile = isPhone || isTablet;

    if (isMobile) {
      console.log('mobile');
      return {
        hideMenu: {
          x: '-100%',
        },
        showMenu: {
          x: '0',
        },
      };
    }

    console.log('desktop');
    return {
      hideMenu: {
        x: '0',
      },
      showMenu: {
        x: '0',
      },
    };
  };

  renderNavigation = () => {
    const { currentTenant, tenants, navigation } = this.props;
    const {
      isShowingMobileNav,
      showTenantMenu,
      responsiveLayout,
    } = this.state;

    const [isPhone, isTablet] = responsiveLayout;
    const isDesktop = !isPhone && !isTablet;

    const navigationClasses = classNames('navigation', {
      'shadow-1': !isDesktop && isShowingMobileNav,
    });

    // show the tenant menu toggle button on desktop only
    const menu =
      tenants && tenants.length > 1
        ? React.cloneElement(navigation, {
            title: this.renderTitle(),
            onShowTenantMenu: isDesktop
              ? () => this.handleTenantToggle()
              : null,
          })
        : navigation;

    // on desktop viewports, show the tenant menu in the same position as the menu
    const tenantMenu =
      isDesktop && showTenantMenu ? (
        <Block
          direction="column"
          className="absolute"
          style={{ zIndex: 100 }}
        >
          <TenantMenu
            tenants={tenants}
            currentTenantId={currentTenant.id}
            onCloseTenantMenu={this.handleTenantToggle}
          />
        </Block>
      ) : null;

    return (
      // <FocusTrap
      //   active={isShowingMobileNav}
      //   focusTrapOptions={{
      //     clickOutsideDeactivates: true,
      //   }}
      // >
      <motion.div
        animate={isShowingMobileNav ? 'showMenu' : 'hideMenu'}
        variants={this.getMenuVariants()}
        transition="easeOut"
        onKeyDown={this.handleNavKeydown}
        onClick={this.handleOnClick}
        key="NavContent"
        id={APP_FRAME_NAV}
        className={navigationClasses}
      >
        {menu}
        {tenantMenu}
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
      </motion.div>
      // </FocusTrap>
    );
  };

  renderOverlay = () => {
    const { navigation } = this.props;
    const { isShowingMobileNav, showTenantMenu } = this.state;

    if (navigation && isShowingMobileNav) {
      return (
        <Overlay
          onClick={this.handleNavigationDismiss}
          style={{ zIndex: 99 }}
        />
      );
    }
    if (showTenantMenu) {
      return (
        <Overlay
          onClick={this.handleTenantToggle}
          style={{ zIndex: 99 }}
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

  renderTitle = () => {
    const { currentTenant, title } = this.props;

    if (currentTenant) {
      return (
        <Block direction="column">
          <Text bold>{currentTenant.name}</Text>
          <Text color="neutral-600" size="6">
            {currentTenant.realm}
          </Text>
        </Block>
      );
    }

    return title;
  };

  renderTenantMenu = () => {
    const { responsiveLayout } = this.state;
    const { currentTenant, tenants } = this.props;

    const [isPhone, isTablet] = responsiveLayout;
    const isMobile = isPhone || isTablet;

    // on mobile viewports, show teh tenant menu on the right side
    if (isMobile) {
      return (
        // <FocusTrap
        //   active={showTenantMenu}
        //   focusTrapOptions={{
        //     clickOutsideDeactivates: true,
        //   }}
        // >
        <motion.div
          variants={variants}
          className="frame-tenant-nav-container"
        >
          <TenantMenu
            tenants={tenants}
            currentTenantId={currentTenant.id}
            onCloseTenantMenu={this.handleTenantToggle}
          />
        </motion.div>
        // </FocusTrap>
      );
    }
  };

  render() {
    const { children } = this.props;
    const { showTenantMenu } = this.state;

    return (
      <motion.div
        animate={showTenantMenu ? 'showTenant' : 'hideTenant'}
        className="frame"
      >
        {this.renderSkipToContent()}
        <header className="frame-header ph-4 ph-5-ns ph-6-m ph-7-l">
          <Button
            icon="menu"
            accessibilityLabel="toggle main menu"
            onClick={this.handleNavigationToggle}
          />
          <Block>
            {this.renderTitle()}
            <Button
              icon="menu-dots"
              onClick={this.handleTenantToggle}
              accessibilityLabel="toggle tenant menu"
            />
          </Block>
        </header>
        {this.renderNavigation()}
        {this.renderTenantMenu()}
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
      </motion.div>
    );
  }
}

Frame.propTypes = propTypes;
Frame.defaultProps = defaultProps;

export default Frame;
