import './Card.scss';

import { Header, Section } from './Components';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import React from 'react';
import classNames from 'classnames';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import { overflowType } from '../../Types';

import Block from '../Block/Block';

const propTypes = {
  /**
   * Contents of the Card
   */
  children: PropTypes.node.isRequired,
  /**
   // @ts-expect-error ts-migrate(2749) FIXME: 'overflowType' refers to a value, but is being use... Remove this comment to see the full error message
   * Additional ClassNames to add to card
   */
  className: PropTypes.string,
  /**
   * button(s) to be displayed in the header of the Card.
   * If a title is provided, the headerActions will have an upper right placement
   */
  headerActions: PropTypes.node,
  /**
   * Additional classNames to add to card header container
   */
  headerClassName: PropTypes.string,
  /**
   * Make the card less visually prominent
   */
  muted: PropTypes.bool,
  /**
   * Overflow behavior
   *
   * One of: 'auto', 'visible', 'hidden', 'scroll'
   *
   * or {"vertical": "...", "horizontal": "..."}
   *
   * For responsive behavior, pass an array with length up to 4, with a valid value for each element.
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * @type {PropTypes.Requireable<Overflow>}
   */
  overflow: overflowType,
  /**
   * Auto-wrap children in a padded section
   */
  sectioned: PropTypes.bool,
  /**
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'child' implicitly has an 'any' type.
   * Title content of the card
   */
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  title: PropTypes.node,
};

const defaultProps = {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  children: null,
  sectioned: false,
  muted: false,
  overflow: 'hidden',
};

/**
 * Cards are used to display content related to single subject,
 * such as a list of packages or regions. A basic card contains
 * a title, content and an optional set of actions that may be
 * performed on the content.
 *
 * ---
 */

function Card({
  children,
  className,
  headerActions,
  headerClassName,
  sectioned,
  muted,
  overflow,
  title,
  ...rest
}) {
  const classes = classNames(className, {
    'shadow-1': !muted,
  });

  const header =
    title || headerActions ? (
      <Header className={headerClassName} actions={headerActions}>
        {title}
      </Header>
    ) : null;

  const content = sectioned
    ? React.Children.map(
        children,
        child => child && <Section>{child}</Section>,
      )
    : children;

  return (
    <Block
      direction="column"
      overflow={overflow}
      className={classes}
      background={muted ? 'neutral-200' : 'white'}
      border={muted ? null : 'all'}
      radius="2"
      {...rest}
    >
      {header}
      {content}
    </Block>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
Card.displayName = 'Card';

export default Card;
