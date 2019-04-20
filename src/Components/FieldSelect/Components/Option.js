import React from 'react';
import PropTypes from 'prop-types';

import { components } from 'react-select';

import Block from '../../Block/Block';
import Icon from '../../Icon/Icon';

const propTypes = {
  innerProps: PropTypes.object,
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  isMulti: PropTypes.bool,
};

function Option(props) {
  const {
    innerProps, children, isSelected
  } = props;

  return (
    <Block {...innerProps} alignItems="center">
      <components.Option {...props}>
        <Icon name={isSelected ? 'checkbox-checked' : 'checkbox'} className="mr-2" />
        {children}
      </components.Option>
    </Block>
  );
}

Option.propTypes = propTypes;

export default Option;
