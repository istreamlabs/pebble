import React from 'react';
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
 * Used to embed responsive video, images, maps, etc. while maintaining a given aspect ratio.
 * Relies on the [css padding trick](https://css-tricks.com/aspect-ratio-boxes/)
 *
 * ---
 */

function AspectRatioBlock({ children, ratio, ...props }) {
  return (
    <Block
      width="100%"
      {...props}
      style={{
        position: 'relative',
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
