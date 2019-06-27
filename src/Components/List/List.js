import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextContainer from '../TextContainer/TextContainer';

import './List.scss';

const propTypes = {
  /**
   * Whether this is an ordered list.
   */
  ordered: PropTypes.bool,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
  /**
   * font size to apply to the list based on the [typography scale](/#/Styles/Typography)
   * @type {PropTypes.Requireable<FontSizeLike>}
   */
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, '1', '2', '3', '4', '5', '6', '7']),
};

const defaultProps = {
  ordered: false,
  className: undefined,
  size: undefined,
};

/**
 * A typographical list of related content.
 * * Lists begin with a bullet or number
 * * Lists break up related content to make information easier to scan
 *
 * ---
 */

function List({
  ordered,
  children,
  className,
  size,
}) {
  const classes = classNames('list',
    { 'list-ordered': ordered, },
    className);

  const Element = ordered ? 'ol' : 'ul';

  const List = <Element className={classes}>{children}</Element>;

  return (
    size ? <TextContainer size={size}>{List}</TextContainer> : List
  );
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
