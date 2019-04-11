import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Block from './Block';

import Badge from '../Badge/Badge';
import Text from '../Text/Text';

storiesOf('Block', module)
  .add('all', () => (
    <>
      <Block justify="start" itemSpacing="3" marginBottom="4">
        <Block basis="1/3" padding="3" background="blue-light">1/3</Block>
        <Block basis="1/3" padding="3" background="blue-light">1/3</Block>
        <Block basis="1/3" padding="3" background="blue-light">1/3</Block>
      </Block>

      <Block justify="start" itemSpacing="3" marginBottom="4">
        <Block width="243px" padding="3" background="blue-light" marginBottom="4">233px</Block>
        <Block width="10rem" padding="3" background="blue-light" marginBottom="4">10rem (160px)</Block>
        <Block width="25%" padding="3" background="blue-light" marginBottom="4">25%</Block>
      </Block>

      <Block itemSpacing="3" marginBottom="4">
        <Block width={[10, 33, 25, 10]} padding="3" background="blue-light">10%, 33%, 25%, 10%</Block>
        <Block width={[80, 33, 50, 10]} padding="3" background="blue-light">80%, 33%, 50%, 10%</Block>
        <Block width={[10, 34, 25, 80]} padding="3" background="blue-light">10%, 34%, 25%, 80%</Block>
      </Block>

      <Block itemSpacing="3" height="100px" marginBottom="4">
        <Block height="44px" padding="3" background="blue-light" marginBottom="4">44px</Block>
        <Block height="4rem" padding="3" background="blue-light" marginBottom="4">4rem (64px)</Block>
        <Block height="80%" padding="3" background="blue-light" marginBottom="4">80%</Block>
      </Block>

      <Block direction="column" itemSpacing="3" height="300px" marginBottom="4">
        <Block height={[10, 33, 25, 10]} padding="3" background="blue-light">10%, 33%, 25%, 10%</Block>
        <Block height={[80, 33, 50, 10]} padding="3" background="blue-light">80%, 33%, 50%, 10%</Block>
        <Block height={[10, 34, 25, 80]} padding="3" background="blue-light">10%, 34%, 25%, 80%</Block>
      </Block>

      <Block alignItems="center" itemSpacing="3" marginBottom="4">
        <Block width="150px"><Text size="2">A tall column with variable height</Text></Block>
        <Badge type="info">badge</Badge>
        <Block height="100px" background="blue-light" padding="3" alignItems="center">100px height</Block>
        <Block height="75px" background="blue-light" padding="3" alignItems="center">75px height</Block>
        <Block height="50px" background="blue-light" padding="3" alignItems="center">50px height</Block>
      </Block>

      <Block itemSpacing="1" direction="column">
        <Block background="blue-light" padding="8">Padding of 8</Block>
        <Block background="blue-light" padding="7">Padding of 7</Block>
        <Block background="blue-light" padding="6">Padding of 6</Block>
        <Block background="blue-light" padding="5">Padding of 5</Block>
        <Block background="blue-light" padding="4">Padding of 4</Block>
        <Block background="blue-light" padding="3">Padding of 3</Block>
        <Block background="blue-light" padding="2">Padding of 2</Block>
        <Block background="blue-light" padding="1">Padding of 1</Block>
        <Block background="blue-light" padding="0">No padding</Block>
      </Block>

      <Block itemSpacing="1" direction="column">
        <Block background="blue-light" paddingHorizontal="8">Horizontal padding of 8</Block>
        <Block background="blue-light" paddingHorizontal="7">Horizontal padding of 7</Block>
        <Block background="blue-light" paddingHorizontal="6">Horizontal padding of 6</Block>
        <Block background="blue-light" paddingHorizontal="5">Horizontal padding of 5</Block>
        <Block background="blue-light" paddingHorizontal="4">Horizontal padding of 4</Block>
        <Block background="blue-light" paddingHorizontal="3">Horizontal padding of 3</Block>
        <Block background="blue-light" paddingHorizontal="2">Horizontal padding of 2</Block>
        <Block background="blue-light" paddingHorizontal="1">Horizontal padding of 1</Block>
        <Block background="blue-light">No padding</Block>
      </Block>

      <Block itemSpacing="1" direction="column">
        <Block background="blue-light" paddingVertical="8">Vertical padding of 8</Block>
        <Block background="blue-light" paddingVertical="7">Vertical padding of 7</Block>
        <Block background="blue-light" paddingVertical="6">Vertical padding of 6</Block>
        <Block background="blue-light" paddingVertical="5">Vertical padding of 5</Block>
        <Block background="blue-light" paddingVertical="4">Vertical padding of 4</Block>
        <Block background="blue-light" paddingVertical="3">Vertical padding of 3</Block>
        <Block background="blue-light" paddingVertical="2">Vertical padding of 2</Block>
        <Block background="blue-light" paddingVertical="1">Vertical padding of 1</Block>
        <Block background="blue-light">No padding</Block>
      </Block>

      <Block background="blue-light" marginTop="8">Margin top of 8</Block>
      <Block background="blue-light" marginTop="7">Margin top of 7</Block>
      <Block background="blue-light" marginTop="6">Margin top of 6</Block>
      <Block background="blue-light" marginTop="5">Margin top of 5</Block>
      <Block background="blue-light" marginTop="4">Margin top of 4</Block>
      <Block background="blue-light" marginTop="3">Margin top of 3</Block>
      <Block background="blue-light" marginTop="2">Margin top of 2</Block>
      <Block background="blue-light" marginTop="1">Margin top of 1</Block>
      <Block background="blue-light">No margin</Block>

      <Block background="blue-light" marginBottom="8">Margin bottom of 8</Block>
      <Block background="blue-light" marginBottom="7">Margin bottom of 7</Block>
      <Block background="blue-light" marginBottom="6">Margin bottom of 6</Block>
      <Block background="blue-light" marginBottom="5">Margin bottom of 5</Block>
      <Block background="blue-light" marginBottom="4">Margin bottom of 4</Block>
      <Block background="blue-light" marginBottom="3">Margin bottom of 3</Block>
      <Block background="blue-light" marginBottom="2">Margin bottom of 2</Block>
      <Block background="blue-light" marginBottom="1">Margin bottom of 1</Block>
      <Block background="blue-light">No margin</Block>

      <Block
        background="blue-light"
        padding={[
          2, // spacing-2 by default
          4, // spacing-4 30rem and up
          6, // spacing-6 60rem and up
          8 // spacing-8 90rem and up
        ]}
      >
        Padding of 2 and 8
      </Block>

      <Block itemSpacing="3" wrap>
        <Block alignItems="center" justify="center" background="blue-light" radius="0" width="75px" height="75px">radius 0</Block>
        <Block alignItems="center" justify="center" background="blue-light" radius="1" width="75px" height="75px">radius 1</Block>
        <Block alignItems="center" justify="center" background="blue-light" radius="2" width="75px" height="75px">radius 2</Block>
        <Block alignItems="center" justify="center" background="blue-light" radius="3" width="75px" height="75px">radius 3</Block>
        <Block alignItems="center" justify="center" background="blue-light" radius="4" width="75px" height="75px">radius 4</Block>
        <Block alignItems="center" justify="center" background="blue-light" radius="5" width="75px" height="75px">radius 5</Block>
        <Block alignItems="center" justify="center" background="blue-light" radius="circle" width="75px" height="75px">circle</Block>
        <Block alignItems="center" justify="center" background="blue-light" radius="pill" width="100px" height="75px">pill</Block>
      </Block>

      <Block alignItems="center" justify="center" radius={[5, 3, 1, 'pill']} background="blue-light" width="240px" height="100px">responsive border radius</Block>

      <Block itemSpacing="3" direction="column">
        <Block textSize="1">Text size of 1</Block>
        <Block textSize="2">Text size of 2</Block>
        <Block textSize="3">Text size of 3</Block>
        <Block textSize="4">Text size of 4</Block>
        <Block textSize="5">Text size of 5</Block>
        <Block textSize="6">Text size of 6</Block>
        <Block textSize="7">Text size of 7</Block>
        <Block>Default text size</Block>
      </Block>

      <Block
        overflow={
          ['hidden', // won't scroll by default
            { vertical: 'auto' }, // overflow-y is auto at 30rem and up
            {
              vertical: 'auto',
              horizontal: 'auto'
            }, // overflow-x and overflow-y is auto at 60rem and up
            'hidden']} // overflow is hidden at 90rem and up
        height="200px"
        width="100px"
        background="blue-light"
      >
        <p>iStreamPlanet creates leading-edge technology to solve the core challenges of OTT media. We deliver the end-to-end video workflow from signal acquisition to the streaming app experience — all focused on the fan.</p>

        <p>iStreamPlanet has earned the trust of leading sports and entertainment brands through innovation, dedication to high quality video, and exceptional customer service.</p>
      </Block>

      <Block truncate>This Block has truncate set to true. Therefore it's content is limited to a single line, and overflow content truncated with an ellipsis.</Block>

      <Block direction="column" itemSpacing="3">
        <Block background="blue-light" direction="column">Left Aligned</Block>
        <Block background="blue-light" direction="column" textAlign="center">Centered</Block>
        <Block background="blue-light" direction="column" textAlign="right">Right Aligned</Block>
      </Block>
    </>
  ));
