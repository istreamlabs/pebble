import './Card.scss';

import { Header, Section } from './Components';

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { requiresOtherProp } from '../../Types';

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
   * Auto-wrap children in a padded section
   */
  sectioned: PropTypes.bool,
  /**
   * Title content of the card
   */
  title: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  children: null,
  title: undefined,
  sectioned: false,
  muted: false,
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
  title,
}) {
  const classes = classNames('card', className, {
    muted,
  });

  const header = title ? (
    <Header actions={headerActions}>
      {title}
    </Header>
  ) : null;

  const content = sectioned
    ? (React.Children.map(children, child => (
      <Section>
        {child}
      </Section>
    ))) : children;

  return (
    <div className={classes}>
      {header}
      {content}
    </div>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
