import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Frame.scss';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export const APP_FRAME_MAIN = 'AppFrameMain';
const APP_FRAME_NAV = 'AppFrameNav';
const APP_FRAME_TOP_BAR = 'AppFrameTopBar';
const APP_FRAME_LOADING_BAR = 'AppFrameLoadingBar';

export class Frame extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      skipFocused: false,
      loadingStack: 0,
    };
  }

  render() {
    const {
      skipFocused,
      loadingStack,
    } = this.state;

    const {
      children,
      navigation,
      topBar,
      showMobileNavigation = false,
    } = this.props;

    const navClassName = classNames(
      styles.Navigation,
      showMobileNavigation && styles['Navigation-visible'],
    );

    const mobileNavHidden = !showMobileNavigation;
    const mobileNavShowing = showMobileNavigation;
    const tabIndex = mobileNavShowing ? 0 : -1;

    const navigationMarkup = navigation ? (
      <div
        className={navClassName}
        onKeyDown={this.handleNavKeydown}
        id={APP_FRAME_NAV}
        key="NavContent"
      >
        {navigation}
        <button
          type="button"
          className={styles.NavigationDismiss}
          onClick={this.handleNavigationDismiss}
          aria-hidden={
            mobileNavHidden || (!showMobileNavigation)
          }
          aria-label="show navigation"
          tabIndex={tabIndex}
        >
          <Icon source="close" />
        </button>
      </div>
    ) : null;

    const loadingMarkup = loadingStack > 0 ? (
      <div className={styles.LoadingBar} id={APP_FRAME_LOADING_BAR}>
        Loading
      </div>
    ) : null;

    const topBarMarkup = topBar ? (
      <div
        className={styles.TopBar}
        id={APP_FRAME_TOP_BAR}
      >
        {topBar}
      </div>
    ) : null;

    const skipClassName = classNames(
      'skip',
      skipFocused && styles.focused,
    );

    const skipMarkup = (
      <div className={skipClassName}>
        <Button
          onClick={this.handleClick}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        >
          Skip to content
        </Button>
      </div>
    );

    const frameClassName = classNames(
      'Frame',
      navigation && styles.hasNav,
      topBar && styles.hasTopBar,
    );

    const navigationOverlayMarkup = showMobileNavigation ? (
      <div
        belowNavigation
        onClick={this.handleNavigationDismiss}
        onTouchStart={this.handleNavigationDismiss}
      />
    ) : null;

    return (
      <div
        className={frameClassName}
      >
        {skipMarkup}
        <div>
          {topBarMarkup}
          {navigationMarkup}
        </div>
        {loadingMarkup}
        {navigationOverlayMarkup}
        <main
          className="main"
          id={APP_FRAME_MAIN}
        >
          <div className={styles.Content}>{children}</div>
        </main>
      </div>
    );
  }

  handleClick = () => {
    focusAppFrameMain();
  }

  handleFocus = () => {
    this.setState({ skipFocused: true });
  }

  handleBlur = () => {
    this.setState({ skipFocused: false });
  }

  handleNavigationDismiss = () => {
    const { onNavigationDismiss } = this.props;
    if (onNavigationDismiss != null) {
      onNavigationDismiss();
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
  /** Accepts a top bar component that will be rendered at the top-most portion of an application frame */
  topBar: PropTypes.node,
  /** Accepts a navigation component that will be rendered in the left sidebar of an application frame */
  navigation: PropTypes.node,
  showMobileNavigation: PropTypes.bool,
  /** A callback function to handle clicking the mobile navigation dismiss button */
  onNavigationDismiss: PropTypes.func,
  /**
  * Contents of the frame
  */
  children: PropTypes.node,
};


function focusAppFrameMain() {
  window.location.assign(`${window.location.pathname}#${APP_FRAME_MAIN}`);
}

export default Frame;
