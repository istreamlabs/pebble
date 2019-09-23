import React from 'react';
import PropTypes from 'prop-types';

import Block from '../../Block/Block';
import Icon from '../../Icon/Icon';

const propTypes = {
  innerProps: PropTypes.object,
};

function ClearIndicator(props) {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <Block
      className="neutral-500 neutral-600-hover"
      {...restInnerProps}
      ref={ref}
      paddingHorizontal="3"
    >
      <Icon name="remove-circle" />
    </Block>
  );
}

ClearIndicator.propTypes = propTypes;

export default ClearIndicator;
