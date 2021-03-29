import './Popover.scss';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-popper' or its correspon... Remove this comment to see the full error message
import { Manager, Popper, Reference } from 'react-popper';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState } from 'react';
import { colorType, placementType } from '../../Types';

import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'focus-trap-react' or its corre... Remove this comment to see the full error message
import FocusTrap from 'focus-trap-react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-merge-refs' or its corre... Remove this comment to see the full error message
import classNames from 'classnames';
import mergeRefs from 'react-merge-refs';
// @ts-expect-error ts-migrate(2749) FIXME: 'colorType' refers to a value, but is being used a... Remove this comment to see the full error message
import useKeyboardEvent from '../../Hooks/UseKeyboardEvent';

const propTypes = {
  /**
   * The color of the popover arrow. If not specified, the arrow will be colored the same as the background of the `content`
   */
  arrowColor: colorType,
  /**
   * Additional classes to add
   */
  className: PropTypes.string,
  /**
   // @ts-expect-error ts-migrate(2749) FIXME: 'placementType' refers to a value, but is being us... Remove this comment to see the full error message
   * Automatically close after the given amount of milliseconds
   */
  closeAfter: PropTypes.number,
  /**
   * Whether the popover is initially open
   */
  isOpen: PropTypes.bool,
  /**
   * The node that triggers the popover. Should be a button for full accessability
   */
  children: PropTypes.node.isRequired,
  /**
   * Close the popover when `content` is clicked
   */
  closeOnContentClick: PropTypes.bool,
  /**
   * The content of the popover
   */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
    .isRequired,
  /**
   * Hide the popover arrow
   */
  hideArrow: PropTypes.bool,
  /**
   * Callback when the popover is toggled
   */
  onToggle: PropTypes.func,
  /**
   * Where the popover will appear relative to the trigger.
   * This will automatically adjust if there is not enough room
   * to properly display the popover in the specified placement
   *
   * One of: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`,
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
   * @type {PropTypes.Requireable<PlacementType>}
   */
  placement: placementType,
  /**
   * If the Popover contains form inputs or other focusable elements,
   * trap focus within the popover while it is visible
   */
  trapFocus: PropTypes.bool,
};

const defaultProps = {
  closeOnContentClick: false,
  hideArrow: false,
  isOpen: false,
  placement: 'bottom',
};

/**
 * A popover is a non-modal dialog that floats around a trigger.
 * It is used to display contextual information and should be triggered with a button for full accessibility.
 *
 * ---
 */

const Popover = props => {
  const {
    arrowColor,
    children,
    className,
    closeAfter,
    closeOnContentClick,
    content,
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'ref' implicitly has an 'any' type.
    hideArrow,
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'className' implicitly has an 'any' type... Remove this comment to see the full error message
    isOpen,
    onToggle,
    placement,
    trapFocus,
  } = props;
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'e' implicitly has an 'any' type.
  const [showing, setShowing] = useState(isOpen);

  const popoverRef = React.useRef();
  const triggerRef = React.useRef();

  const open = () => {
    if (onToggle) {
      onToggle(true);
    }
    setShowing(true);
    document.body.addEventListener('click', onBodyClick, false);
  };

  const close = () => {
    if (onToggle) {
      onToggle(false);
    }
    setShowing(false);
    document.body.removeEventListener('click', onBodyClick, false);
  };

  useKeyboardEvent('Escape', close);

  const onBodyClick = e => {
    const popover = popoverRef.current;
    const trigger = triggerRef.current;

    if (!popover || !trigger) {
      return;
    }

    if (e.target === trigger || trigger.contains(e.target)) {
      return;
    }

    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    if (e.target === popover || popover.contains(e.target)) {
      if (closeOnContentClick) {
        close();
      // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'children' implicitly has an 'any' type.
      }
      return;
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    }

    close();
  };

  React.useEffect(() => {
    if (showing && closeAfter) {
      const timer = setTimeout(close, closeAfter);
      return () => {
        clearTimeout(timer);
      };
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    }
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  }, [showing]);

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  React.useEffect(() => {
    // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'ref' implicitly has an 'any' type... Remove this comment to see the full error message
    setShowing(isOpen);
  }, [isOpen]);

  const renderTrigger = (ref, className) => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return React.cloneElement(children, {
      onClick: e => {
        // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'ref' implicitly has an 'any' type... Remove this comment to see the full error message
        onTriggerClicked();
        // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'arrowProps' implicitly has an 'an... Remove this comment to see the full error message
        if (children.props.onClick) {
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          children.props.onClick(e);
        }
      },
      className: classNames(className, children.props.className),
      ref: mergeRefs([ref, triggerRef]),
      role: 'button',
      'aria-expanded': showing,
      'aria-haspopup': true,
    });
  };

  const onTriggerClicked = () => {
    return showing ? close() : open();
  };

  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  let backgroundColor = 'white';

  if (content.props && content.props.background) {
    backgroundColor = content.props.background;
  }

  if (arrowColor !== undefined) {
    backgroundColor = arrowColor;
  }

  const arrowClasses = classNames('popover-arrow', {
    [`bg-${backgroundColor}`]: backgroundColor,
  });

  const popperStyle = {
    zIndex: 2,
  };

  return (
    <ConditionalWrapper
      condition={trapFocus}
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      wrapper={children => (
        <FocusTrap
          active={showing}
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          focusTrapOptions={{
            clickOutsideDeactivates: true,
          }}
        >
          {children}
        </FocusTrap>
      )}
    >
      <div>
        <Manager>
          <Reference>
            {({ ref }) => renderTrigger(ref, className)}
          </Reference>
          {showing && (
            <Popper placement={placement}>
              {({ ref, style, placement, arrowProps }) => (
                <div
                  role="dialog"
                  aria-modal="false"
                  aria-hidden={!showing}
                  style={{ ...style, ...popperStyle }}
                  data-placement={placement}
                  ref={mergeRefs([ref, popoverRef])}
                >
                  {!hideArrow && (
                    <div
                      data-testid="popover-arrow"
                      role="presentation"
                      className={arrowClasses}
                      ref={arrowProps.ref}
                      style={arrowProps.style}
                    />
                  )}
                  {typeof content === 'function'
                    ? content(onTriggerClicked)
                    : content}
                </div>
              )}
            </Popper>
          )}
        </Manager>
      </div>
    </ConditionalWrapper>
  );
};

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
