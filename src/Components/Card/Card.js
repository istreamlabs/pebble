import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Header, Section } from './Components';
import './Card.scss';


const Card = (
  {
    children,
    className,
    headerActions,
    sectioned,
    subdued,
    title,
  }
) => {
  const classes = classNames('card', className, {
    subdued,
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
};

Card.propTypes = {
  /**
   * Additional ClassNames to add to button
   */
  className: PropTypes.string,
  /**
   * Contents of the button
   */
  children: PropTypes.node.isRequired,
  /**
   *
   */
  headerActions: PropTypes.node,
  /**
   * Title content of the card
   */
  title: PropTypes.string,
  /**
   * Autowrap children in a padded section
   */
  sectioned: PropTypes.bool,
  /**
   * Make the card less visually prominent
   */
  subdued: PropTypes.bool,
};

export default Card;
