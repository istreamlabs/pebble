import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Block from './Block';

import Badge from '../Badge/Badge';
import Text from '../Text/Text';

const borderWidth = '8px';

storiesOf('Block', module)
  .addParameters({
    chromatic: { viewports: [479, 959, 1439] },
  })
  .add('background color', () => (
    <Block itemSpacing="3">
      <Block direction="column">
        <Block width="100px" height="50px" background="neutral-100">
          neutral-100
        </Block>
        <Block width="100px" height="50px" background="neutral-200">
          neutral-200
        </Block>
        <Block width="100px" height="50px" background="neutral-300">
          neutral-300
        </Block>
        <Block width="100px" height="50px" background="neutral-400">
          neutral-400
        </Block>
        <Block width="100px" height="50px" background="neutral-500">
          neutral-500
        </Block>
        <Block width="100px" height="50px" background="neutral-600">
          neutral-600
        </Block>
        <Block width="100px" height="50px" background="neutral-700">
          neutral-700
        </Block>
        <Block width="100px" height="50px" background="neutral-800">
          neutral-800
        </Block>
      </Block>
      <Block direction="column">
        <Block width="100px" height="50px" background="blue-lighter">
          blue-lighter
        </Block>
        <Block width="100px" height="50px" background="blue-light">
          blue-light
        </Block>
        <Block width="100px" height="50px" background="blue">
          blue
        </Block>
        <Block width="100px" height="50px" background="blue-dark">
          blue-dark
        </Block>
        <Block width="100px" height="50px" background="blue-darker">
          blue-darker
        </Block>
      </Block>
      <Block direction="column">
        <Block
          width="100px"
          height="50px"
          background="yellow-lighter"
        >
          yellow-lighter
        </Block>
        <Block width="100px" height="50px" background="yellow-light">
          yellow-light
        </Block>
        <Block width="100px" height="50px" background="yellow">
          yellow
        </Block>
        <Block width="100px" height="50px" background="yellow-dark">
          yellow-dark
        </Block>
        <Block width="100px" height="50px" background="yellow-darker">
          yellow-darker
        </Block>
      </Block>
      <Block direction="column">
        <Block width="100px" height="50px" background="green-lighter">
          green-lighter
        </Block>
        <Block width="100px" height="50px" background="green-light">
          green-light
        </Block>
        <Block width="100px" height="50px" background="green">
          green
        </Block>
        <Block width="100px" height="50px" background="green-dark">
          green-dark
        </Block>
        <Block width="100px" height="50px" background="green-darker">
          green-darker
        </Block>
      </Block>
      <Block direction="column">
        <Block width="100px" height="50px" background="red-lighter">
          red-lighter
        </Block>
        <Block width="100px" height="50px" background="red-light">
          red-light
        </Block>
        <Block width="100px" height="50px" background="red">
          red
        </Block>
        <Block width="100px" height="50px" background="red-dark">
          red-dark
        </Block>
        <Block width="100px" height="50px" background="red-darker">
          red-darker
        </Block>
      </Block>
      <Block direction="column">
        <Block
          width="100px"
          height="50px"
          background="indigo-lighter"
        >
          indigo-lighter
        </Block>
        <Block width="100px" height="50px" background="indigo-light">
          indigo-light
        </Block>
        <Block width="100px" height="50px" background="indigo">
          indigo
        </Block>
        <Block width="100px" height="50px" background="indigo-dark">
          indigo-dark
        </Block>
        <Block width="100px" height="50px" background="indigo-darker">
          indigo-darker
        </Block>
      </Block>
    </Block>
  ))
  .add('border sides', () => (
    <Block direction="column" itemSpacing="3">
      <Block border="all" width="100px" height="50px">
        all
      </Block>
      <Block border="vertical" width="100px" height="50px">
        vertical
      </Block>
      <Block border="horizontal" width="100px" height="50px">
        horizontal
      </Block>
      <Block border="top" width="100px" height="50px">
        top
      </Block>
      <Block border="right" width="100px" height="50px">
        right
      </Block>
      <Block border="bottom" width="100px" height="50px">
        bottom
      </Block>
      <Block border="left" width="100px" height="50px">
        left
      </Block>

      <Block
        border={{ side: 'all', width: '5px' }}
        width="100px"
        height="50px"
      >
        all
      </Block>
      <Block
        border={{ side: 'vertical', width: '5px' }}
        width="100px"
        height="50px"
      >
        vertical
      </Block>
      <Block
        border={{ side: 'horizontal', width: '5px' }}
        width="100px"
        height="50px"
      >
        horizontal
      </Block>
      <Block
        border={{ side: 'top', width: '5px' }}
        width="100px"
        height="50px"
      >
        top
      </Block>
      <Block
        border={{ side: 'right', width: '5px' }}
        width="100px"
        height="50px"
      >
        right
      </Block>
      <Block
        border={{ side: 'bottom', width: '5px' }}
        width="100px"
        height="50px"
      >
        bottom
      </Block>
      <Block
        border={{ side: 'left', width: '5px' }}
        width="100px"
        height="50px"
      >
        left
      </Block>
    </Block>
  ))
  .add('border colors', () => (
    <Block itemSpacing="3">
      <Block itemSpacing="3" direction="column">
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'neutral-100',
          }}
        >
          neutral-100
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'neutral-200',
          }}
        >
          neutral-200
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'neutral-300',
          }}
        >
          neutral-300
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'neutral-400',
          }}
        >
          neutral-400
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'neutral-500',
          }}
        >
          neutral-500
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'neutral-600',
          }}
        >
          neutral-600
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'neutral-700',
          }}
        >
          neutral-700
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'neutral-800',
          }}
        >
          neutral-800
        </Block>
      </Block>
      <Block itemSpacing="3" direction="column">
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'blue-lighter',
          }}
        >
          blue-lighter
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'blue-light',
          }}
        >
          blue-light
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{ side: 'all', width: borderWidth, color: 'blue' }}
        >
          blue
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'blue-dark',
          }}
        >
          blue-dark
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'blue-darker',
          }}
        >
          blue-darker
        </Block>
      </Block>
      <Block itemSpacing="3" direction="column">
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'yellow-lighter',
          }}
        >
          yellow-lighter
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'yellow-light',
          }}
        >
          yellow-light
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'yellow',
          }}
        >
          yellow
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'yellow-dark',
          }}
        >
          yellow-dark
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'yellow-darker',
          }}
        >
          yellow-darker
        </Block>
      </Block>
      <Block itemSpacing="3" direction="column">
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'green-lighter',
          }}
        >
          green-lighter
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'green-light',
          }}
        >
          green-light
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{ side: 'all', width: borderWidth, color: 'green' }}
        >
          green
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'green-dark',
          }}
        >
          green-dark
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'green-darker',
          }}
        >
          green-darker
        </Block>
      </Block>
      <Block itemSpacing="3" direction="column">
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'red-lighter',
          }}
        >
          red-lighter
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'red-light',
          }}
        >
          red-light
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{ side: 'all', width: borderWidth, color: 'red' }}
        >
          red
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'red-dark',
          }}
        >
          red-dark
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'red-darker',
          }}
        >
          red-darker
        </Block>
      </Block>
      <Block itemSpacing="3" direction="column">
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'indigo-lighter',
          }}
        >
          indigo-lighter
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'indigo-light',
          }}
        >
          indigo-light
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'indigo',
          }}
        >
          indigo
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'indigo-dark',
          }}
        >
          indigo-dark
        </Block>
        <Block
          width="100px"
          height="50px"
          border={{
            side: 'all',
            width: borderWidth,
            color: 'indigo-darker',
          }}
        >
          indigo-darker
        </Block>
      </Block>
    </Block>
  ))
  .add('itemSpacing', () => (
    <Block direction="column" itemSpacing="6">
      <Block direction="row" itemSpacing="5">
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
      <Block direction="column" itemSpacing="5">
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
      <Block direction="row" itemSpacing={[2, 4, 6, 8]}>
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
      <Block direction="column" itemSpacing={[7, 3, 1, 7]}>
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
      <Block
        direction={['column', 'row', 'column', 'row']}
        itemSpacing={[7, 3, 1, 7]}
      >
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
      <Block direction={['column', 'row']} itemSpacing={[7, 3, 4, 5]}>
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
    </Block>
  ))

  .add('order', () => (
    <Block color="neutral-700" direction="column" itemSpacing="5">
      <Block>
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order="last"
          border="left"
        >
          last
        </Block>
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order={[1, 4, 3, 2]}
          border="left"
        >
          A
        </Block>
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order={[2, 1, 4, 3]}
          border="left"
        >
          B
        </Block>
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order={[3, 2, 1, 4]}
          border="left"
        >
          C
        </Block>
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order={[4, 3, 2, 1]}
          border="left"
        >
          D
        </Block>
      </Block>

      <Block>
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order="last"
          border="left"
        >
          last
        </Block>
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order="4"
          border="left"
        >
          4
        </Block>
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order="3"
          border="left"
        >
          3
        </Block>
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order="2"
          border="left"
        >
          2
        </Block>
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order="1"
          border="left"
        >
          1
        </Block>
      </Block>
    </Block>
  ))
  .add('text color', () => (
    <>
      <Block color="neutral-100">neutral-100</Block>
      <Block color="neutral-200">neutral-200</Block>
      <Block color="neutral-300">neutral-300</Block>
      <Block color="neutral-400">neutral-400</Block>
      <Block color="neutral-500">neutral-500</Block>
      <Block color="neutral-600">neutral-600</Block>
      <Block color="neutral-700">neutral-700</Block>
      <Block color="neutral-800">neutral-800</Block>
      <Block color="blue-lighter">blue-lighter</Block>
      <Block color="blue-light">blue-light</Block>
      <Block color="blue">blue</Block>
      <Block color="blue-dark">blue-dark</Block>
      <Block color="blue-darker">blue-darker</Block>
      <Block color="yellow-lighter">yellow-lighter</Block>
      <Block color="yellow-light">yellow-light</Block>
      <Block color="yellow">yellow</Block>
      <Block color="yellow-dark">yellow-dark</Block>
      <Block color="yellow-darker">yellow-darker</Block>
      <Block color="green-lighter">green-lighter</Block>
      <Block color="green-light">green-light</Block>
      <Block color="green">green</Block>
      <Block color="green-dark">green-dark</Block>
      <Block color="green-darker">green-darker</Block>
      <Block color="red-lighter">red-lighter</Block>
      <Block color="red-light">red-light</Block>
      <Block color="red">red</Block>
      <Block color="red-dark">red-dark</Block>
      <Block color="red-darker">red-darker</Block>
      <Block color="indigo-lighter">indigo-lighter</Block>
      <Block color="indigo-light">indigo-light</Block>
      <Block color="indigo">indigo</Block>
      <Block color="indigo-dark">indigo-dark</Block>
      <Block color="indigo-darker">indigo-darker</Block>
    </>
  ))
  .add('responsive justify', () => (
    <Block
      width="100%"
      justify={['start', 'evenly', 'end', 'center']}
      background="blue"
    >
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
    </Block>
  ))
  .add('responsive align items', () => (
    <Block
      direction="column"
      width="100%"
      alignItems={['end', 'stretch', 'center']}
      background="blue"
    >
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
    </Block>
  ))
  .add('responsive align content', () => (
    <Block
      direction="row"
      width="370px"
      itemSpacing="3"
      wrap
      height="300px"
      alignItems="start"
      alignContent={['start', 'end', 'between', 'stretch']}
      background="white"
    >
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
    </Block>
  ))
  .add('responsive padding object', () => (
    <Block displayBlock itemSpacing="3">
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
        padding={[
          {
            vertical: 3,
            horizontal: 4,
          },
          {
            vertical: 4,
            horizontal: 5,
          },
          {
            vertical: 5,
            horizontal: 6,
          },
          {
            vertical: 6,
            horizontal: 7,
          },
        ]}
      >
        <Block flex background="white">
          vertical 3,4,5,6, horizontal 4,5,6,7
        </Block>
      </Block>
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
        padding={{
          vertical: 3,
          horizontal: 8,
        }}
      >
        <Block flex background="white">
          vertical 3, horizontal 8
        </Block>
      </Block>

      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
        padding={{
          top: 3,
          right: 8,
        }}
      >
        <Block flex background="white">
          top 3, right 8
        </Block>
      </Block>
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
        padding={{
          bottom: 3,
          horizontal: 8,
        }}
      >
        <Block flex background="white">
          bottom 3, horizontal 8
        </Block>
      </Block>
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
        padding={{
          top: 3,
          right: 3,
          bottom: 0,
          left: 8,
        }}
      >
        <Block flex background="white">
          top 3, right 3, bottom 0, left 8
        </Block>
      </Block>
    </Block>
  ))
  .add('all', () => (
    <>
      <Block justify="start" itemSpacing="3" marginBottom="4">
        <Block basis="1/3" padding="3" background="blue-light">
          1/3
        </Block>
        <Block basis="1/3" padding="3" background="blue-light">
          1/3
        </Block>
        <Block basis="1/3" padding="3" background="blue-light">
          1/3
        </Block>
      </Block>

      <Block justify="start" itemSpacing="3" marginBottom="4">
        <Block
          width="243px"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          233px
        </Block>
        <Block
          width="10rem"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          10rem (160px)
        </Block>
        <Block
          width="25%"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          25%
        </Block>
      </Block>

      <Block itemSpacing="3" marginBottom="4">
        <Block
          width={[10, 33, 25, 10]}
          padding="3"
          background="blue-light"
        >
          10%, 33%, 25%, 10%
        </Block>
        <Block
          width={[80, 33, 50, 10]}
          padding="3"
          background="blue-light"
        >
          80%, 33%, 50%, 10%
        </Block>
        <Block
          width={[10, 34, 25, 80]}
          padding="3"
          background="blue-light"
        >
          10%, 34%, 25%, 80%
        </Block>
      </Block>

      <Block itemSpacing="3" height="100px" marginBottom="4">
        <Block
          height="44px"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          44px
        </Block>
        <Block
          height="4rem"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          4rem (64px)
        </Block>
        <Block
          height="80%"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          80%
        </Block>
      </Block>

      <Block
        direction="column"
        itemSpacing="3"
        height="300px"
        marginBottom="4"
      >
        <Block
          height={[10, 33, 25, 10]}
          padding="3"
          background="blue-light"
        >
          10%, 33%, 25%, 10%
        </Block>
        <Block
          height={[80, 33, 50, 10]}
          padding="3"
          background="blue-light"
        >
          80%, 33%, 50%, 10%
        </Block>
        <Block
          height={[10, 34, 25, 80]}
          padding="3"
          background="blue-light"
        >
          10%, 34%, 25%, 80%
        </Block>
      </Block>

      <Block alignItems="center" itemSpacing="3" marginBottom="4">
        <Block width="150px">
          <Text size="2">A tall column with variable height</Text>
        </Block>
        <Badge type="info">badge</Badge>
        <Block
          height="100px"
          background="blue-light"
          padding="3"
          alignItems="center"
        >
          100px height
        </Block>
        <Block
          height="75px"
          background="blue-light"
          padding="3"
          alignItems="center"
        >
          75px height
        </Block>
        <Block
          height="50px"
          background="blue-light"
          padding="3"
          alignItems="center"
        >
          50px height
        </Block>
      </Block>

      <Block itemSpacing="1" direction="column">
        <Block background="blue-light" padding="8">
          Padding of 8
        </Block>
        <Block background="blue-light" padding="7">
          Padding of 7
        </Block>
        <Block background="blue-light" padding="6">
          Padding of 6
        </Block>
        <Block background="blue-light" padding="5">
          Padding of 5
        </Block>
        <Block background="blue-light" padding="4">
          Padding of 4
        </Block>
        <Block background="blue-light" padding="3">
          Padding of 3
        </Block>
        <Block background="blue-light" padding="2">
          Padding of 2
        </Block>
        <Block background="blue-light" padding="1">
          Padding of 1
        </Block>
        <Block background="blue-light" padding="0">
          No padding
        </Block>
      </Block>

      <Block itemSpacing="1" direction="column">
        <Block background="blue-light" paddingHorizontal="8">
          Horizontal padding of 8
        </Block>
        <Block background="blue-light" paddingHorizontal="7">
          Horizontal padding of 7
        </Block>
        <Block background="blue-light" paddingHorizontal="6">
          Horizontal padding of 6
        </Block>
        <Block background="blue-light" paddingHorizontal="5">
          Horizontal padding of 5
        </Block>
        <Block background="blue-light" paddingHorizontal="4">
          Horizontal padding of 4
        </Block>
        <Block background="blue-light" paddingHorizontal="3">
          Horizontal padding of 3
        </Block>
        <Block background="blue-light" paddingHorizontal="2">
          Horizontal padding of 2
        </Block>
        <Block background="blue-light" paddingHorizontal="1">
          Horizontal padding of 1
        </Block>
        <Block background="blue-light">No padding</Block>
      </Block>

      <Block itemSpacing="1" direction="column">
        <Block background="blue-light" paddingVertical="8">
          Vertical padding of 8
        </Block>
        <Block background="blue-light" paddingVertical="7">
          Vertical padding of 7
        </Block>
        <Block background="blue-light" paddingVertical="6">
          Vertical padding of 6
        </Block>
        <Block background="blue-light" paddingVertical="5">
          Vertical padding of 5
        </Block>
        <Block background="blue-light" paddingVertical="4">
          Vertical padding of 4
        </Block>
        <Block background="blue-light" paddingVertical="3">
          Vertical padding of 3
        </Block>
        <Block background="blue-light" paddingVertical="2">
          Vertical padding of 2
        </Block>
        <Block background="blue-light" paddingVertical="1">
          Vertical padding of 1
        </Block>
        <Block background="blue-light">No padding</Block>
      </Block>

      <Block background="blue-light" marginTop="8">
        Margin top of 8
      </Block>
      <Block background="blue-light" marginTop="7">
        Margin top of 7
      </Block>
      <Block background="blue-light" marginTop="6">
        Margin top of 6
      </Block>
      <Block background="blue-light" marginTop="5">
        Margin top of 5
      </Block>
      <Block background="blue-light" marginTop="4">
        Margin top of 4
      </Block>
      <Block background="blue-light" marginTop="3">
        Margin top of 3
      </Block>
      <Block background="blue-light" marginTop="2">
        Margin top of 2
      </Block>
      <Block background="blue-light" marginTop="1">
        Margin top of 1
      </Block>
      <Block background="blue-light">No margin</Block>

      <Block background="blue-light" marginBottom="8">
        Margin bottom of 8
      </Block>
      <Block background="blue-light" marginBottom="7">
        Margin bottom of 7
      </Block>
      <Block background="blue-light" marginBottom="6">
        Margin bottom of 6
      </Block>
      <Block background="blue-light" marginBottom="5">
        Margin bottom of 5
      </Block>
      <Block background="blue-light" marginBottom="4">
        Margin bottom of 4
      </Block>
      <Block background="blue-light" marginBottom="3">
        Margin bottom of 3
      </Block>
      <Block background="blue-light" marginBottom="2">
        Margin bottom of 2
      </Block>
      <Block background="blue-light" marginBottom="1">
        Margin bottom of 1
      </Block>
      <Block background="blue-light">No margin</Block>

      <Block
        background="blue-light"
        padding={[
          2, // spacing-2 by default
          4, // spacing-4 30rem and up
          6, // spacing-6 60rem and up
          8, // spacing-8 90rem and up
        ]}
      >
        Padding of 2 and 8
      </Block>

      <Block itemSpacing="3" wrap>
        <Block
          alignItems="center"
          justify="center"
          background="blue-light"
          radius="0"
          width="75px"
          height="75px"
        >
          radius 0
        </Block>
        <Block
          alignItems="center"
          justify="center"
          background="blue-light"
          radius="1"
          width="75px"
          height="75px"
        >
          radius 1
        </Block>
        <Block
          alignItems="center"
          justify="center"
          background="blue-light"
          radius="2"
          width="75px"
          height="75px"
        >
          radius 2
        </Block>
        <Block
          alignItems="center"
          justify="center"
          background="blue-light"
          radius="3"
          width="75px"
          height="75px"
        >
          radius 3
        </Block>
        <Block
          alignItems="center"
          justify="center"
          background="blue-light"
          radius="4"
          width="75px"
          height="75px"
        >
          radius 4
        </Block>
        <Block
          alignItems="center"
          justify="center"
          background="blue-light"
          radius="5"
          width="75px"
          height="75px"
        >
          radius 5
        </Block>
        <Block
          alignItems="center"
          justify="center"
          background="blue-light"
          radius="circle"
          width="75px"
          height="75px"
        >
          circle
        </Block>
        <Block
          alignItems="center"
          justify="center"
          background="blue-light"
          radius="pill"
          width="100px"
          height="75px"
        >
          pill
        </Block>
      </Block>

      <Block
        alignItems="center"
        justify="center"
        radius={[5, 3, 1, 'pill']}
        background="blue-light"
        width="240px"
        height="100px"
      >
        responsive border radius
      </Block>

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
        overflow={[
          'hidden', // won't scroll by default
          { vertical: 'auto' }, // overflow-y is auto at 30rem and up
          {
            vertical: 'auto',
            horizontal: 'auto',
          }, // overflow-x and overflow-y is auto at 60rem and up
          'hidden',
        ]} // overflow is hidden at 90rem and up
        height="200px"
        width="100px"
        background="blue-light"
      >
        <p>
          iStreamPlanet creates leading-edge technology to solve the
          core challenges of OTT media. We deliver the end-to-end
          video workflow from signal acquisition to the streaming app
          experience — all focused on the fan.
        </p>

        <p>
          iStreamPlanet has earned the trust of leading sports and
          entertainment brands through innovation, dedication to high
          quality video, and exceptional customer service.
        </p>
      </Block>

      <Block truncate>
        This Block has truncate set to true. Therefore it's content is
        limited to a single line, and overflow content truncated with
        an ellipsis.
      </Block>

      <Block direction="column" itemSpacing="3">
        <Block background="blue-light" direction="column">
          Left Aligned
        </Block>
        <Block
          background="blue-light"
          direction="column"
          textAlign="center"
        >
          Centered
        </Block>
        <Block
          background="blue-light"
          direction="column"
          textAlign="right"
        >
          Right Aligned
        </Block>
      </Block>
    </>
  ));
