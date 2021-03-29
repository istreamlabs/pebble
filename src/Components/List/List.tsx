// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TextContainer/TextContainer' was resolv... Remove this comment to see the full error message
import classNames from 'classnames';

import TextContainer from '../TextContainer/TextContainer';

import './List.scss';

const propTypes = {
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Whether this is an ordered list.
   */
  ordered: PropTypes.bool,
  /**
   * font size to apply to the list based on the [typography scale](/#/Styles/Typography)
   * @type {PropTypes.Requireable<FontSizeLike>}
   */
  size: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  ]),
};

const defaultProps = {
  ordered: false,
};

/**
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
 * A typographical list of related content.
 * * Lists begin with a bullet or number
 * * Lists break up related content to make information easier to scan
 *
 * ---
 */

function List({ ordered, children, className, size }) {
  const classes = classNames(
    'list',
    { 'list-ordered': ordered },
    className,
  );

  const Element = ordered ? 'ol' : 'ul';

  const List = <Element className={classes}>{children}</Element>;

  return size ? (
    <TextContainer size={size}>{List}</TextContainer>
  ) : (
    List
  );
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;
List.displayName = 'List';

export default List;
