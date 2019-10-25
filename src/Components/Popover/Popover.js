import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Manager, Popper, Reference } from 'react-popper';
import classNames from 'classnames';

import { placementType } from '../../Types';
import useKeyboardEvent from '../../Hooks/UseKeyboardEvent';

import './Popover.scss';

const propTypes = {
  className: PropTypes.string,
  /**
   * Whether the popover is initially open
   */
  isOpen: PropTypes.bool,
  /**
   * The node that triggers the popover. Should be a button for full accessability
   */
  children: PropTypes.node.isRequired,
  /**
   * The content of the popover
   */
  content: PropTypes.node.isRequired,
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
   * @type {PropTypes.Requireable<PlacementType>}
   */
  placement: placementType,
  /**
   * Hide the popover arrow
   */
  hideArrow: PropTypes.bool,
};

const defaultProps = {
  hideArrow: false,
  isOpen: false,
  placement: 'bottom',
  trigger: 'click',
};

/**
 * A popover is a non-modal dialog that floats around a trigger.
 * It is used to display contextual information and should be triggered with a button for full accessibility.
 *
 * ---
 */

const Popover = props => {
  const {
    isOpen,
    children,
    className,
    content,
    hideArrow,
    onToggle,
    placement,
  } = props;
  const [showing, setShowing] = useState(isOpen);

  const open = () => {
    if (onToggle) {
      onToggle(true);
    }
    setShowing(true);

    // document.body.addEventListener('click', onBodyClick, false);
  };

  const close = () => {
    if (onToggle) {
      onToggle(false);
    }
    setShowing(false);
    // removeBodyListeners();
  };

  useKeyboardEvent('Escape', close);

  React.useEffect(() => {
    setShowing(isOpen);
  }, [isOpen]);

  const renderTrigger = (ref, className) => {
    return React.cloneElement(children, {
      onClick: e => {
        onTriggerClicked();
        if (children.props.onClick) {
          children.props.onClick(e);
        }
      },
      className: classNames(className, children.props.className),
      ref,
      role: 'button',
      'aria-expanded': showing,
      'aria-haspopup': true,
    });
  };

  const onTriggerClicked = () => {
    return showing ? close() : open();
  };

  const arrowClasses = classNames('popover-arrow', {
    'bg-white': content.props.background === undefined,
    [`bg-${content.props.background}`]: content.props.background,
  });

  return (
    <Manager>
      <Reference>
        {({ ref }) => renderTrigger(ref, className)}
      </Reference>
      {showing && (
        <Popper placement={placement}>
          {({ ref, style, placement, arrowProps }) => (
            <>
              <div
                role="dialog"
                aria-modal="false"
                data-testid="popoverRef"
                aria-hidden={!showing}
                style={style}
                data-placement={placement}
                ref={ref}
              >
                {!hideArrow && (
                  <div
                    role="presentation"
                    className={arrowClasses}
                    ref={arrowProps.ref}
                    style={arrowProps.style}
                  />
                )}
                {content}
              </div>
            </>
          )}
        </Popper>
      )}
    </Manager>
  );
};

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;
