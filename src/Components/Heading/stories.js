import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Heading from './Heading';

storiesOf('Heading', module)
  .add('all', () => (
    <>
      <Heading element="1">Heading 1</Heading>
      <Heading element="2">Heading 2</Heading>
      <Heading element="3">Heading 3</Heading>
      <Heading element="4">Heading 4</Heading>
      <Heading element="5">Heading 5</Heading>
      <Heading element="6">Heading 6</Heading>

      <Heading responsive={false} element="1">Heading 1</Heading>
      <Heading responsive={false} element="2">Heading 2</Heading>
      <Heading responsive={false} element="3">Heading 3</Heading>
      <Heading responsive={false} element="4">Heading 4</Heading>
      <Heading responsive={false} element="5">Heading 5</Heading>
      <Heading responsive={false} element="6">Heading 6</Heading>

      <Heading element="1" size="3" truncate>This heading text should be truncated with an ellipsis because it is too long to fit on one line</Heading>

      <Heading element="2" size="4" textAlign="right">Right Align</Heading>
      <Heading element="2" size="4" textAlign="center">Center Align</Heading>
      <Heading element="2" size="4" textAlign="left">Left Align</Heading>
    </>
  ));
