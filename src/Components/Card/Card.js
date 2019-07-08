import './Card.scss';

import { Header, Section } from './Components';

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { overflowType, requiresOtherProp } from '../../Types';

import Block from '../Block/Block';

const propTypes = {
  /**
   * Contents of the Card
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional ClassNames to add to button
   */
  className: PropTypes.string,
  /**
   * button(s) to be displayed in the upper right of the Card. A title must be provided in order to display headerActions.
   */
  headerActions: requiresOtherProp('title'),
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
   * @type {PropTypes.Requireable<Overflow>}
   */
  overflow: overflowType,
  /**
   * Auto-wrap children in a padded section
   */
  sectioned: PropTypes.bool,
  /**
   * Title content of the card
   */
  title: PropTypes.string,
};

const defaultProps = {
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
  sectioned,
  muted,
  overflow,
  title,
}) {
  const classes = classNames('card', className, {
    muted,
  });

  const header = title ? (
    <Header actions={headerActions}>{title}</Header>
  ) : null;

  const content = sectioned
    ? React.Children.map(children, child => (
        <Section>{child}</Section>
      ))
    : children;

  return (
    <Block direction="column" overflow={overflow} className={classes}>
      {header}
      {content}
    </Block>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
