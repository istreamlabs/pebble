import React from 'react';
import PropTypes from 'prop-types';

import Block from '../../Block/Block';
import Icon from '../../Icon/Icon';

const ClearIndicator = (props) => {
  const { innerProps: { ref, ...restInnerProps } } = props;
  return (
    <Block {...restInnerProps} ref={ref} paddingHorizontal="3">
      <Icon name="remove-circle" />
    </Block>
  );
};

ClearIndicator.propTypes = {
  innerProps: PropTypes.object,
};

export default ClearIndicator;
