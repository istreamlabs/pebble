import React from 'react';

import { components } from 'react-select';

import Icon from '../../Icon/Icon';

function MultiValueRemove(props) {
  return (
    <components.MultiValueRemove {...props}>
      <Icon name="remove" size="10" />
    </components.MultiValueRemove>
  );
}

export default MultiValueRemove;
