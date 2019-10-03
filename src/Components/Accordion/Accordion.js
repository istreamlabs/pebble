import React, {
  Children,
  cloneElement,
  isValidElement,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';

const propTypes = {
  /**
   * Allow multiple panels to be open at once
   */
  allowMultiple: PropTypes.bool,
  /**
   * Array of AccordionPanels
   */
  children: PropTypes.node,
  /**
   * additional classes to add to container
   */
  className: PropTypes.string,
  /**
   * Zero-based index(es) of panels that should be opened
   */
  defaultIndex: PropTypes.number,
  /**
   * Callback function that will be called when the active panel(s) change.
   * It will pass the index of the active panel, or an array of indexes if allowMultiple is true
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  allowMultiple: false,
};

/**
 * Display a list of options that expand/collapse to reveal more information.
 *
 * ---
 */

function Accordion(props) {
  const {
    allowMultiple,
    className,
    children,
    defaultIndex,
    onChange,
    ...rest
  } = props;
  const classes = classNames('accordion', className);

  const initialState = allowMultiple
    ? defaultIndex || []
    : defaultIndex;

  const [active, setActive] = useState(initialState);

  const getActiveCondition = itemIndex => {
    if (Array.isArray(active)) {
      return active.includes(itemIndex);
    }
    return active === itemIndex;
  };

  const handlePanelChange = selectedIndex => {
    if (allowMultiple) {
      const activeIndex = active.indexOf(selectedIndex);
      let nextActive = [...active];

      // the selected panel is already active
      if (activeIndex > -1) {
        nextActive.splice(activeIndex, 1);
      } else {
        nextActive = [...active, selectedIndex];
      }
      setActive(nextActive);
      onChange && onChange(nextActive);
    } else {
      if (selectedIndex === active) {
        setActive(null);
      } else {
        setActive(selectedIndex);
      }
      onChange && onChange(selectedIndex);
    }
  };

  const clones = Children.map(children, (child, childIndex) => {
    if (!isValidElement(child)) return;

    return cloneElement(child, {
      open: getActiveCondition(childIndex),
      onPanelChange: () => handlePanelChange(childIndex),
    });
  });

  return (
    <Block className={classes} {...rest} displayBlock>
      {clones}
    </Block>
  );
}

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;
Accordion.displayName = 'Accordion';

export default Accordion;
