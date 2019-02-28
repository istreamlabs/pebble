import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button/Button';

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
      navigation,
      onNavigationToggle,
      title,
    } = this.props;

    const navigationMarkup = navigation ? (
      <div
        className="navigation"
        onKeyDown={this.handleNavKeydown}
        id={APP_FRAME_NAV}
        key="NavContent"
      >
        {navigation}
      </div>
    ) : null;

    const skipClassName = classNames(
      'skip',
      isSkipFocused && 'focused',
    );

    const skipToContent = (
      <div className={skipClassName}>
        <Button
          onClick={this.handleClick}
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
        <header>
          <div>{title}</div>
          <Button
            icon="menu"
            accessibilityLabel="toggle main menu"
            onClick={onNavigationToggle}
          />
        </header>
        {navigationMarkup}
        <main
          className="main"
          id={APP_FRAME_MAIN}
        >
          {children}
        </main>
      </div>
    );
  }

  handleClick = () => {
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
  navigation: PropTypes.node,
  navigation: ({ navigation }) => {
    if (navigation === undefined || (navigation && navigation.type !== MainMenu)) {
      return new Error('Frame expects navigation to be a MainMenu instance.');
    }
  },
  /**
   * A callback function to handle clicking the mobile navigation toggle button
   */
  onNavigationToggle: PropTypes.func,
  onNavigationToggle: PropTypes.func.isRequired,
  /**
   * Is the mobile nav currently open
   */
  isShowingMobileNav: PropTypes.bool,
  isShowingMobileNav: PropTypes.bool.isRequired,
  /**
  * Contents of the frame
  */
  children: PropTypes.node,
  /**
   * Title text that appears in mobile header
   */
  title: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Frame;
