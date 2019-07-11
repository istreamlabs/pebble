import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Heading from './Heading';

storiesOf('Heading', module)
  .add('sizing and alignment', () => (
    <>
      <Heading element="1">Heading 1</Heading>
      <Heading element="2">Heading 2</Heading>
      <Heading element="3">Heading 3</Heading>
      <Heading element="4">Heading 4</Heading>
      <Heading element="5">Heading 5</Heading>
      <Heading element="6">Heading 6</Heading>

      <Heading responsive={false} element="1">
        Heading 1
      </Heading>
      <Heading responsive={false} element="2">
        Heading 2
      </Heading>
      <Heading responsive={false} element="3">
        Heading 3
      </Heading>
      <Heading responsive={false} element="4">
        Heading 4
      </Heading>
      <Heading responsive={false} element="5">
        Heading 5
      </Heading>
      <Heading responsive={false} element="6">
        Heading 6
      </Heading>

      <Heading element="1" size="3" truncate>
        This heading text should be truncated with an ellipsis because
        it is too long to fit on one line
      </Heading>

      <Heading element="2" size="4" textAlign="right">
        Right Align
      </Heading>
      <Heading element="2" size="4" textAlign="center">
        Center Align
      </Heading>
      <Heading element="2" size="4" textAlign="left">
        Left Align
      </Heading>
    </>
  ))
  .add('colors', () => (
    <>
      <Heading color="neutral-100">neutral-100</Heading>
      <Heading color="neutral-200">neutral-200</Heading>
      <Heading color="neutral-300">neutral-300</Heading>
      <Heading color="neutral-400">neutral-400</Heading>
      <Heading color="neutral-500">neutral-500</Heading>
      <Heading color="neutral-600">neutral-600</Heading>
      <Heading color="neutral-700">neutral-700</Heading>
      <Heading color="neutral-800">neutral-800</Heading>

      <Heading color="blue-lighter">blue-lighter</Heading>
      <Heading color="blue-light">blue-light</Heading>
      <Heading color="blue">blue</Heading>
      <Heading color="blue-dark">blue-dark</Heading>
      <Heading color="blue-darker">blue-darker</Heading>
      <Heading color="yellow-lighter">yellow-lighter</Heading>
      <Heading color="yellow-light">yellow-light</Heading>
      <Heading color="yellow">yellow</Heading>
      <Heading color="yellow-dark">yellow-dark</Heading>
      <Heading color="yellow-darker">yellow-darker</Heading>
      <Heading color="green-lighter">green-lighter</Heading>
      <Heading color="green-light">green-light</Heading>
      <Heading color="green">green</Heading>
      <Heading color="green-dark">green-dark</Heading>
      <Heading color="green-darker">green-darker</Heading>
      <Heading color="red-lighter">red-lighter</Heading>
      <Heading color="red-light">red-light</Heading>
      <Heading color="red">red</Heading>
      <Heading color="red-dark">red-dark</Heading>
      <Heading color="red-darker">red-darker</Heading>
      <Heading color="indigo-lighter">indigo-lighter</Heading>
      <Heading color="indigo-light">indigo-light</Heading>
      <Heading color="indigo">indigo</Heading>
      <Heading color="indigo-dark">indigo-dark</Heading>
      <Heading color="indigo-darker">indigo-darker</Heading>
    </>
  ));
