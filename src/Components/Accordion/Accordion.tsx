import React, {
  Children,
  cloneElement,
  isValidElement,
  useState,
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
} from 'react';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
   * Id or array of ids of the panels that should start opened
   */
  defaultOpen: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /**
   * Callback function that is called with the ID of the panel that was open/closed
   */
  onChange: PropTypes.func,
};

const defaultProps = {
  allowMultiple: false,
};

/**
 * Display a list of panels that expand/collapse to reveal more information.
 *
 // @ts-expect-error ts-migrate(2550) FIXME: Property 'assign' does not exist on type 'ObjectCo... Remove this comment to see the full error message
 * ---
 */

function Accordion(props) {
  const {
    allowMultiple,
    className,
    children,
    defaultOpen,
    onChange,
    ...rest
  } = props;
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'selectedId' implicitly has an 'any' typ... Remove this comment to see the full error message
  const classes = classNames('accordion', className);

  const startOpen =
    typeof defaultOpen === 'string'
      ? { [defaultOpen]: true }
      : Array.isArray(defaultOpen) && defaultOpen.length
      ? defaultOpen.reduce((result, panelId) => {
          return Object.assign(result, {
            [panelId]: true,
          });
        // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'child' implicitly has an 'any' type.
        }, {})
      : {};

  const [active, setActive] = useState(startOpen);

  const handlePanelChange = selectedId => {
    const isOpen = !!active[selectedId];
    if (allowMultiple) {
      setActive({
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        ...active,
        [selectedId]: !isOpen,
      });
    } else {
      setActive({
        [selectedId]: !isOpen,
      });
    }
    onChange && onChange(selectedId);
  };

  const clones = Children.map(children, child => {
    if (!isValidElement(child)) return;
    return cloneElement(child, {
      open: !!active[child.props.id],
      onToggle: () => handlePanelChange(child.props.id),
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
