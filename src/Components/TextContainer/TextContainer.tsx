// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { parseTextSize } from '../../Utils';
import { fontSizeType } from '../../Types';

import './TextContainer.scss';

const propTypes = {
  /**
   // @ts-expect-error ts-migrate(2749) FIXME: 'fontSizeType' refers to a value, but is being use... Remove this comment to see the full error message
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
  /**
   * font size to apply to all child text elements without explicitly set sizes, based on the [typography scale](/#/Styles/Typography)
   * @type {PropTypes.Requireable<FontSizeLike>}
   */
  size: fontSizeType,
  /**
   * spacing of related components
   */
  tight: PropTypes.bool,
};

const defaultProps = {
  size: 5,
  tight: false,
};

/**
 * The TextContainer wraps text elements such as [Headings](/#/Components/Heading),
 // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
 * paragraphs and lists to apply the proper vertical
 // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
 * spacing between them. This vertical spacing is
 * known as "vertical rhythm".
 */

function TextContainer({ children, className, tight, size }) {
  const parsedSize = size ? parseTextSize(size) : null;

  const classes = classNames(
    'text-container',
    {
      [`fs-${parsedSize}`]: parsedSize,
      'text-container-tight': tight,
    },
    className,
  );

  return <div className={classes}>{children}</div>;
}

TextContainer.propTypes = propTypes;
TextContainer.defaultProps = defaultProps;
TextContainer.displayName = 'TextContainer';

export default TextContainer;
