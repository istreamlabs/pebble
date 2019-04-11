import React from 'react';

import { components } from 'react-select';

import Icon from '../../Icon/Icon';

const MultiValueRemove = props => (
  <components.MultiValueRemove {...props}>
    <Icon name="remove" size="10" />
  </components.MultiValueRemove>
);

export default MultiValueRemove;
