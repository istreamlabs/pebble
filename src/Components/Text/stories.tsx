import React from 'react';
import { storiesOf } from '@storybook/react';
import Block from '../Block/Block';
import '../../Styles/foundation.scss';

import Text from './Text';

storiesOf('Text', module)
  .add('size and weight', () => (
    <>
      <div>
        <Text>Default Size</Text>
      </div>
      <div>
        <Text size="1">Size 1</Text>
      </div>
      <div>
        <Text size="2">Size 2</Text>
      </div>
      <div>
        <Text size="3">Size 3</Text>
      </div>
      <div>
        <Text size="4">Size 4</Text>
      </div>
      <div>
        <Text size="5">Size 5</Text>
      </div>
      <div>
        <Text size="6">Size 6</Text>
      </div>
      <div>
        <Text size="7">Size 7</Text>
      </div>
      <div>
        <Text bold>Bold</Text>
      </div>
    </>
  ))
  .add('appearance', () => (
    <>
      <div>
        <Text>Default</Text>
      </div>
      <div>
        <Text appearance="muted">Muted</Text>
      </div>
      <div>
        <Text appearance="info">Info</Text>
      </div>
      <div>
        <Text appearance="success">Success</Text>
      </div>
      <div>
        <Text appearance="warn">Warn</Text>
      </div>
      <div>
        <Text appearance="danger">Danger</Text>
      </div>
      <div>
        <Text appearance="code">Code</Text>
      </div>
      <div>
        <Text appearance="mono">Mono</Text>
      </div>
    </>
  ))
  .add('colors', () => (
    <>
      <Block direction="column">
        <Text color="neutral-100">neutral-100</Text>
        <Text color="neutral-200">neutral-200</Text>
        <Text color="neutral-300">neutral-300</Text>
        <Text color="neutral-400">neutral-400</Text>
        <Text color="neutral-500">neutral-500</Text>
        <Text color="neutral-600">neutral-600</Text>
        <Text color="neutral-700">neutral-700</Text>
        <Text color="neutral-800">neutral-800</Text>
      </Block>
      <Block direction="column">
        <Text color="blue-lighter">blue-lighter</Text>
        <Text color="blue-light">blue-light</Text>
        <Text color="blue">blue</Text>
        <Text color="blue-dark">blue-dark</Text>
        <Text color="blue-darker">blue-darker</Text>
      </Block>
      <Block direction="column">
        <Text color="yellow-lighter">yellow-lighter</Text>
        <Text color="yellow-light">yellow-light</Text>
        <Text color="yellow">yellow</Text>
        <Text color="yellow-dark">yellow-dark</Text>
        <Text color="yellow-darker">yellow-darker</Text>
      </Block>
      <Block direction="column">
        <Text color="green-lighter">green-lighter</Text>
        <Text color="green-light">green-light</Text>
        <Text color="green">green</Text>
        <Text color="green-dark">green-dark</Text>
        <Text color="green-darker">green-darker</Text>
      </Block>
      <Block direction="column">
        <Text color="red-lighter">red-lighter</Text>
        <Text color="red-light">red-light</Text>
        <Text color="red">red</Text>
        <Text color="red-dark">red-dark</Text>
        <Text color="red-darker">red-darker</Text>
      </Block>
      <Block direction="column">
        <Text color="indigo-lighter">indigo-lighter</Text>
        <Text color="indigo-light">indigo-light</Text>
        <Text color="indigo">indigo</Text>
        <Text color="indigo-dark">indigo-dark</Text>
        <Text color="indigo-darker">indigo-darker</Text>
      </Block>
    </>
  ));
