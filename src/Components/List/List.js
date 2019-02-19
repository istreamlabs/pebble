import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TextContainer from '../TextContainer/TextContainer';
import { parseTextSize } from '../../Utils';

import './List.scss';

/**
 * A typographical list of related content.
 * * Lists begin with a bullet or number
 * * Lists break up related content to make information easier to scan
 */

const List = (
  {
    ordered,
    children,
    className,
    size,
  }
) => {
  const classes = classNames('list',
    { 'list-ordered': ordered, },
    className);

  const parsedSize = size ? parseTextSize(size) : null;

  const Element = ordered ? 'ol' : 'ul';

  const List = <Element className={classes}>{children}</Element>;

  return (
    parsedSize ? <TextContainer size={parsedSize}>{List}</TextContainer> : List
  );
};

List.propTypes = {
  /**
   * Whether this is an ordered.
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
   * font size to apply to the list based on the [typograhy scale](/#/Styles/Typography)
   */
  size: PropTypes.PropTypes.oneOf([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6']),
};

export default List;
