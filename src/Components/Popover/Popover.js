import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Manager, Popper, Reference } from 'react-popper';
import onClickOutside from 'react-onclickoutside';

import { placementType } from '../../Types';
import useKeyboardEvent from '../../Hooks/UseKeyboardEvent';

const propTypes = {
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
   * Where the popover will appear relative to the trigger
   *
   * One of: `auto`, `auto-start`, `auto-end`, `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`,
   * @type {PropTypes.Requireable<PlacementType>}
   */
  placement: placementType,
};

const defaultProps = {
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
  const { isOpen, children, content, onToggle, placement } = props;
  const [show, setShow] = useState(isOpen);

  const open = () => {
    if (onToggle) {
      onToggle(true);
    }
    setShow(true);
  };

  const close = () => {
    console.log('closing...');
    if (onToggle) {
      onToggle(false);
    }
    setShow(false);
  };

  useKeyboardEvent('Escape', close);

  React.useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  const renderTrigger = ref => {
    return React.cloneElement(children, {
      onClick: e => {
        onTriggerClicked();
        if (children.props.onClick) {
          children.props.onClick(e);
        }
      },
      ref,
      role: 'button',
      'aria-expanded': show,
      'aria-haspopup': true,
    });
  };

  const onTriggerClicked = () => {
    return show ? close() : open();
  };

  // used by onClickOutside HOC
  Popover.handleClickOutside = () => {
    console.log('click outside');

    close();
  };

  return (
    <Manager>
      <Reference>{({ ref }) => renderTrigger(ref)}</Reference>
      {show && (
        <Popper placement={placement}>
          {(ref, style, placement) => (
            <div
              data-testid="popoverRef"
              ref={ref}
              style={style}
              data-placement={placement}
            >
              {content}
            </div>
          )}
        </Popper>
      )}
    </Manager>
  );
};

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

const clickOutsideConfig = {
  handleClickOutside: () => Popover.handleClickOutside,
};

export { Popover as TestablePopOver };

export default onClickOutside(Popover, clickOutsideConfig);
