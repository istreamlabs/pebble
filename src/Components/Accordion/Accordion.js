import React, {
  Children,
  cloneElement,
  isValidElement,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Icon from '../Icon/Icon';

const propTypes = {
  allowMultiple: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultIndex: PropTypes.number,
  onChange: PropTypes.func,
};

/**
 * Display a list of options that expand/collapse to reveal more information
 *
 * ---
 */

const defaultProps = {
  allowMultiple: false,
};

function Accordion({
  /**
   * Allow multiple panels to be open at once
   */
  allowMultiple,
  /**
   * additional classes to add to container
   */
  className,
  /**
   * Array of AccordionPanels
   */
  children,
  /**
   * Zero-based index(es) of panels that should be opened
   */
  defaultIndex,
  /**
   * Callback function that will be called when the active panel(s) change.
   * It will send an number of the active panel, or an array of indexes if allowMultiple is true
   */
  onChange,
  ...rest
}) {
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
    } else {
      if (selectedIndex === active) {
        setActive(null);
      } else {
        setActive(selectedIndex);
      }
    }

    onChange && onChange(active);
  };

  const clones = Children.map(children, (child, childIndex) => {
    if (!isValidElement(child)) return;

    return cloneElement(child, {
      active: getActiveCondition(childIndex),
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

// /////////////////////////////////////////////

export const AccordionPanel = ({
  children,
  label,
  active,
  onPanelChange,
  ...rest
}) => {
  const arrowIcon = active ? 'arrow-small-up' : 'arrow-small-down';

  return (
    <Block displayBlock>
      <button
        type="button"
        role="tab"
        aria-selected={active}
        aria-expanded={active}
        onClick={onPanelChange}
        className="w-100 p-0 bn bg-blue-lighter-hover"
        style={{
          outline: 0,
        }}
      >
        {typeof label === 'string' ? (
          <Block
            textSize="5"
            color="neutral-600"
            padding={[4]}
            flex
            justify="between"
            border="bottom"
            className="fw-700"
          >
            <div>{label}</div>
            <Icon name={arrowIcon} />
          </Block>
        ) : (
          label(arrowIcon)
        )}
      </button>
      {active && <Block {...rest}>{children}</Block>}
    </Block>
  );
};

AccordionPanel.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
  active: PropTypes.bool,
  onPanelChange: PropTypes.func,
};

AccordionPanel.displayName = 'AccordionPanel';
