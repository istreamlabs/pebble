// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import Block from '../Block/Block';

const propTypes = {
  /**
   * Contents of the AspectRatioBlock, usually some form of media such as image or video
   */
  children: PropTypes.node,
  /**
   * The aspect ratio of the content. Common aspect ratios (width/height) include 16/9, 4/3, 2/3, 3/4, 2.35/1
   */
  ratio: PropTypes.number,
};

const defaultProps = {
  ratio: 4 / 3,
};

/**
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
 * Used to embed responsive video, images, maps, etc. while maintaining a given aspect ratio.
 // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
 * Relies on the [css padding trick](https://css-tricks.com/aspect-ratio-boxes/)
 *
 // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
 * ---
 */

function AspectRatioBlock({ children, ratio, ...props }) {
  return (
    <Block
      width="100%"
      {...props}
      style={{
        position: 'relative',
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        paddingTop: `${(1 / ratio) * 100}%`,
        height: '0px',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}
      >
        {children}
      </div>
    </Block>
  );
}

AspectRatioBlock.propTypes = propTypes;
AspectRatioBlock.defaultProps = defaultProps;

export default AspectRatioBlock;
