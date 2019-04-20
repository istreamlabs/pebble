import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import VisuallyHidden from './VisuallyHidden';

storiesOf('VisuallyHidden', module)
  .add('all', () => (
    <Button type="button">
      <VisuallyHidden>Add Item</VisuallyHidden>
      <Icon name="add-circle" />
    </Button>
  ));
