import './Frame.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'focus-trap-react' or its corre... Remove this comment to see the full error message
import FocusTrap from 'focus-trap-react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Overlay/Overlay' was resolved to '/User... Remove this comment to see the full error message
import Overlay from '../Overlay/Overlay';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'prop-types' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TenantMenu/TenantMenu' was resolved to ... Remove this comment to see the full error message
import TenantMenu from '../TenantMenu/TenantMenu';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Text from '../Text/Text';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../ToastContainer/ToastContainer' was reso... Remove this comment to see the full error message
import ToastContainer from '../ToastContainer/ToastContainer';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classNames from 'classnames';
import { getBreakpointLayout } from '../../Utils';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'framer-motion' or its correspo... Remove this comment to see the full error message
import { motion } from 'framer-motion';

export const APP_FRAME_MAIN = 'AppFrameMain';
const APP_FRAME_NAV = 'AppFrameNav';

const propTypes = {
  /**
   * Contents of the frame
   */
  children: PropTypes.node,
  /**
   * Highlight the currently selected organization and set the title to current name and realm
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

    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
    const [isPhone, isTablet] = getBreakpointLayout(window);

    this.state = {
      // @ts-expect-error ts-migrate(2461) FIXME: Type 'boolean[] | undefined' is not an array type.
      isSkipFocused: false,
      isShowingMobileNav: false,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Frame'.
      showTenantMenu: false,
      isMobile: isPhone || isTablet,
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
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Frame'. */}
          <Text bold>{currentTenant.name}</Text>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text color="neutral-500" size="6">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            {currentTenant.realm}
          </Text>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
    const { isMobile } = this.state;
    const [isPhone, isTablet] = getBreakpointLayout(window);
    const newBreakpoint = isPhone || isTablet;
    if (newBreakpoint !== isMobile) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Frame'.
      this.setState({ isMobile: newBreakpoint });
    }
  // @ts-expect-error ts-migrate(2461) FIXME: Type 'boolean[] | undefined' is not an array type.
  };

  handleNavigationToggle = () => {
    const { onNavigationToggle } = this.props;
    const { isShowingMobileNav } = this.state;
    this.setState({ isShowingMobileNav: !isShowingMobileNav }, () => {
      if (onNavigationToggle) {
        onNavigationToggle(!isShowingMobileNav);
      }
    });
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Frame'.
  };

  handleNavigationDismiss = () => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Frame'.
    const { onNavigationToggle } = this.props;
    const { isShowingMobileNav, showTenantMenu } = this.state;
    if (isShowingMobileNav) {
      this.setState({ isShowingMobileNav: false }, () => {
        if (onNavigationToggle) {
          onNavigationToggle(false);
        }
      });
    }
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Frame'.
    if (showTenantMenu) {
      this.setState({ showTenantMenu: false });
    }
  };
// @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Frame'.

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
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Frame'.
      isSkipFocused && 'focused',
    );

    return (
      <div className={skipClassName}>
        <Button
          // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
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

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Frame'.
  renderHeader = () => {
    const { tenants } = this.props;
    const { isMobile } = this.state;

    if (isMobile) {
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <header className="frame-header ph-4 ph-5-ns ph-6-m ph-7-l">
          <Block alignItems="center">
            {this.getFrameTitle()}
            {tenants && (
              // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
              <Button
                plain
                size="large"
                // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Frame'.
                className="ml-3"
                // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Frame'.
                accessibilityLabel="show organization menu"
                // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                icon="menu-dots"
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                onClick={this.handleTenantMenuToggle}
              />
            )}
          </Block>
          <Button
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            icon="menu"
            accessibilityLabel="toggle main menu"
            onClick={this.handleNavigationToggle}
          />

          {this.renderTenantMenu()}
        </header>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      );
    }
  };

  renderMainMenu = () => {
    const { navigation, tenants } = this.props;
    const {
      isShowingMobileNav,
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      isMobile,
      showTenantMenu,
    } = this.state;

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Frame'.
    const navigationClasses = classNames('navigation', {
      open: isShowingMobileNav,
    });

    // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Frame'.
    const mobileCloseMainMenuBtn = (
      <Button
        icon="remove"
        onClick={this.handleNavigationDismiss}
        accessibilityLabel="close menu"
      />
    );

    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const menu = React.cloneElement(navigation, {
      onShowTenantMenu: tenants ? this.handleTenantMenuToggle : null,
      title: this.getFrameTitle(),
      mobileHeaderContent: mobileCloseMainMenuBtn,
    });

    if (isMobile) {
      return (
        <FocusTrap
          active={isShowingMobileNav && !showTenantMenu}
          focusTrapOptions={{
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            clickOutsideDeactivates: true,
          }}
        >
          <div
            className={navigationClasses}
            onKeyDown={this.handleNavKeydown}
            // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            onClick={this.handleOnClick}
            id={APP_FRAME_NAV}
            key="NavContent"
          >
            {menu}
          </div>
        </FocusTrap>
      );
    }

    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    return (
      <motion.div
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        className={navigationClasses}
        onKeyDown={this.handleNavKeydown}
        onClick={this.handleOnClick}
        id={APP_FRAME_NAV}
        key="NavContent"
      >
        {this.renderTenantMenu()}
        {menu}
      </motion.div>
    );
  };

  renderTenantMenu = () => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Frame'.
    const { tenants, currentTenant } = this.props;
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Frame'.
    const { showTenantMenu } = this.state;

    if (showTenantMenu) {
      return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FocusTrap
          active={showTenantMenu}
          focusTrapOptions={{
            clickOutsideDeactivates: true,
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              bottom: 0,
            }}
          >
            <motion.nav
              animate={{
                x: ['0px', '250px'],
              }}
              transition={{
                duration: 0.25,
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                ease: 'easeOut',
              }}
              className="frame-tenant-menu-container"
            >
              <TenantMenu
                tenants={tenants}
                // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
                onCloseTenantMenu={this.handleTenantMenuToggle}
                currentTenantId={(currentTenant || {}).id}
              />
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'state' does not exist on type 'Frame'. */}
            </motion.nav>
          </div>
        </FocusTrap>
      );
    }
  };

  renderOverlay = () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const {
      isShowingMobileNav,
      showTenantMenu,
      isMobile,
    } = this.state;

    // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'target' implicitly has an 'any' t... Remove this comment to see the full error message
    if (showTenantMenu || (isMobile && isShowingMobileNav)) {
      return (
        <Overlay
          onClick={this.handleNavigationDismiss}
          style={{ zIndex: 99 }}
        />
      );
    }
  };

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Frame'.
  handleOnClick = ({ target }) => {
    if (target.tagName.toLowerCase() === 'a' && target.href) {
      this.handleNavigationDismiss();
    }
  };

  render() {
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    const { children } = this.props;
    return (
      <div className="frame">
        {this.renderSkipToContent()}
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        {this.renderHeader()}
        {this.renderMainMenu()}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        {this.renderOverlay()}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
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
Frame.displayName = 'Frame';

export default Frame;
