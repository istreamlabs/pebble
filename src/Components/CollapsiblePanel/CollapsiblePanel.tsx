// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Icon from '../Icon/Icon';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  /**
   * contents of the panel
   */
  children: PropTypes.node,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * This value can be used to open the panel in the Accordion
   */
  id: PropTypes.string.isRequired,
  /**
   * A string or element to use as the button that expands/collapses the panel
   */
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
    .isRequired,
  /**
   * Are the panel contents visible
   */
  open: PropTypes.bool,
  /**
   * Function to call when the label is pressed
   */
  onToggle: PropTypes.func,
};

/**
 // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
 * A detail/summary element that provides a way to display information when the component is in an "open" state
 *
 */

function CollapsiblePanel(props) {
  const {
    children,
    className,
    id,
    label,
    open,
    onToggle,
    ...rest
  } = props;

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const arrowIcon = open ? 'arrow-small-up' : 'arrow-small-down';
  const classes = classNames(
    'fw-700 w-100 p-0 bn bg-white bg-blue-lighter-hover',
    className,
  );

  const handleClick = event => {
    event.preventDefault();
    onToggle();
  };

  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <Block
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      as="details"
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      displayBlock
      open={open}
      id={id}
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      data-testid={id}
      {...rest}
    >
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      {typeof label === 'string' ? (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block
          as="summary"
          border="bottom"
          className={classes}
          color="neutral-600"
          flex
          itemSpacing="2"
          justify="between"
          onClick={handleClick}
          padding={[4]}
        >
          <div>{label}</div>
          <Icon name={arrowIcon} />
        </Block>
      ) : (
        <summary onClick={handleClick}>{label(props)}</summary>
      )}
      <Block>{children}</Block>
    </Block>
  );
}

CollapsiblePanel.propTypes = propTypes;
CollapsiblePanel.displayName = 'CollapsiblePanel';

export default CollapsiblePanel;
