// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Block' was resolved to '/Users/esjaastad... Remove this comment to see the full error message
import Block from './Block';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Badge/Badge' was resolved to '/Users/es... Remove this comment to see the full error message
import Badge from '../Badge/Badge';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Text from '../Text/Text';

const borderWidth = '8px';

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('Block', module)
  .addParameters({
    chromatic: { viewports: [479, 959, 1439, 1440] },
  })
  .add('background color', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block itemSpacing="3">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="neutral-100">
          neutral-100
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="neutral-200">
          neutral-200
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="neutral-300">
          neutral-300
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="neutral-400">
          neutral-400
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="neutral-500">
          neutral-500
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="neutral-600">
          neutral-600
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="neutral-700">
          neutral-700
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="neutral-800">
          neutral-800
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="blue-lighter">
          blue-lighter
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="blue-light">
          blue-light
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="blue">
          blue
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="blue-dark">
          blue-dark
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="blue-darker">
          blue-darker
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          width="100px"
          height="50px"
          background="yellow-lighter"
        >
          yellow-lighter
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="yellow-light">
          yellow-light
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="yellow">
          yellow
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="yellow-dark">
          yellow-dark
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="yellow-darker">
          yellow-darker
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="green-lighter">
          green-lighter
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="green-light">
          green-light
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="green">
          green
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="green-dark">
          green-dark
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="green-darker">
          green-darker
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="red-lighter">
          red-lighter
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="red-light">
          red-light
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="red">
          red
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="red-dark">
          red-dark
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="red-darker">
          red-darker
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          width="100px"
          height="50px"
          background="indigo-lighter"
        >
          indigo-lighter
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="indigo-light">
          indigo-light
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="indigo">
          indigo
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="indigo-dark">
          indigo-dark
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="100px" height="50px" background="indigo-darker">
          indigo-darker
        </Block>
      </Block>
    </Block>
  ))
  .add('border sides', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block direction="column" itemSpacing="3">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block border="all" width="100px" height="50px">
        all
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block border="vertical" width="100px" height="50px">
        vertical
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block border="horizontal" width="100px" height="50px">
        horizontal
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block border="top" width="100px" height="50px">
        top
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block border="right" width="100px" height="50px">
        right
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block border="bottom" width="100px" height="50px">
        bottom
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block border="left" width="100px" height="50px">
        left
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'all', width: '5px' }}
        width="100px"
        height="50px"
      >
        all
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'vertical', width: '5px' }}
        width="100px"
        height="50px"
      >
        vertical
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'horizontal', width: '5px' }}
        width="100px"
        height="50px"
      >
        horizontal
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'top', width: '5px' }}
        width="100px"
        height="50px"
      >
        top
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'right', width: '5px' }}
        width="100px"
        height="50px"
      >
        right
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'bottom', width: '5px' }}
        width="100px"
        height="50px"
      >
        bottom
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block itemSpacing="3">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          width="100px"
          height="50px"
          border={{ side: 'all', width: borderWidth, color: 'blue' }}
        >
          blue
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          width="100px"
          height="50px"
          border={{ side: 'all', width: borderWidth, color: 'green' }}
        >
          green
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          width="100px"
          height="50px"
          border={{ side: 'all', width: borderWidth, color: 'red' }}
        >
          red
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block direction="column" itemSpacing="6">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction="row" itemSpacing="5">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction="column" itemSpacing="5">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction="row" itemSpacing={[2, 4, 6, 8]}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction="column" itemSpacing={[7, 3, 1, 7]}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        direction={['column', 'row', 'column', 'row']}
        itemSpacing={[7, 3, 1, 7]}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction={['column', 'row']} itemSpacing={[7, 3, 4, 5]}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" width="50px" height="50px" />
      </Block>
    </Block>
  ))
  .add('max width', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block color="white" itemSpacing="3" displayBlock>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="1">
        1
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="2">
        2
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="3">
        3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="4">
        4
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="5">
        5
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="6">
        6
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="7">
        7
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="8">
        8
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="9">
        9
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="none">
        none
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        margin="5 0 0 0"
        background="blue"
        displayBlock
        maxWidth="0%"
      >
        0%
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="10">
        10
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="20">
        20
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="25">
        25
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="30">
        30
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="33">
        33
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="34">
        34
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="40">
        40
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="50">
        50
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="60">
        60
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="70">
        70
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="75">
        75
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="80">
        80
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="90">
        90
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="100">
        100
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        margin="5 0 0 0"
        background="blue"
        displayBlock
        maxWidth="100px"
      >
        100px
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="10em">
        10em
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="10rem">
        10rem
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth="5%">
        5%
      </Block>
    </Block>
  ))
  .add('maxWidth responsive', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block color="white" itemSpacing="3" displayBlock>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth={[2, 4, 6, 8]}>
        2, 4, 6, 8
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        background="blue"
        displayBlock
        maxWidth={[3, 'none', 5, 6]}
      >
        3, none, 5, 6
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        background="blue"
        displayBlock
        maxWidth={[10, 25, 33, 50]}
      >
        10, 25, 33, 50
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue" displayBlock maxWidth={[10, 6, 33, 8]}>
        10, 6, 33, 8
      </Block>
    </Block>
  ))
  .add('order', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block color="neutral-700" direction="column" itemSpacing="5">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order="last"
          border="left"
        >
          last
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order={[1, 4, 3, 2]}
          border="left"
        >
          A
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order={[2, 1, 4, 3]}
          border="left"
        >
          B
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order={[3, 2, 1, 4]}
          border="left"
        >
          C
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order="last"
          border="left"
        >
          last
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order="4"
          border="left"
        >
          4
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order="3"
          border="left"
        >
          3
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          background="blue-light"
          width="50px"
          height="50px"
          order="2"
          border="left"
        >
          2
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="neutral-100">neutral-100</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="neutral-200">neutral-200</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="neutral-300">neutral-300</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="neutral-400">neutral-400</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="neutral-500">neutral-500</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="neutral-600">neutral-600</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="neutral-700">neutral-700</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="neutral-800">neutral-800</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="blue-lighter">blue-lighter</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="blue-light">blue-light</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="blue">blue</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="blue-dark">blue-dark</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="blue-darker">blue-darker</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="yellow-lighter">yellow-lighter</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="yellow-light">yellow-light</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="yellow">yellow</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="yellow-dark">yellow-dark</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="yellow-darker">yellow-darker</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="green-lighter">green-lighter</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="green-light">green-light</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="green">green</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="green-dark">green-dark</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="green-darker">green-darker</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="red-lighter">red-lighter</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="red-light">red-light</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="red">red</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="red-dark">red-dark</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="red-darker">red-darker</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="indigo-lighter">indigo-lighter</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="indigo-light">indigo-light</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="indigo">indigo</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="indigo-dark">indigo-dark</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block color="indigo-darker">indigo-darker</Block>
    </>
  ))
  .add('text size', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block direction="column" itemSpacing="2">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize="1">Size 1 string</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize={1}>Size 1 number</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize="2">Size 2 string</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize={2}>Size 2 number</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize="3">Size 3 string</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize={3}>Size 3 number</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize="4">Size 4 string</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize={4}>Size 4 number</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize="5">Size 5 string</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize={5}>Size 5 number</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize="6">Size 6 string</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize={6}>Size 6 number</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize="7">Size 7 string</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize={7}>Size 7 number</Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block textSize={[5, 3, 2, 1]}>
        Responsive paragraph text iStreamPlanet creates leading-edge
        technology to solve the core challenges of OTT media.
      </Block>
    </Block>
  ))
  .add('responsive justify', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block
      width="100%"
      justify={['start', 'evenly', 'end', 'center']}
      background="blue"
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
    </Block>
  ))
  .add('responsive align items', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block
      direction="column"
      width="100%"
      alignItems={['end', 'stretch', 'center']}
      background="blue"
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
    </Block>
  ))
  .add('responsive align content', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block width="80px" padding="3" background="blue-light">
        1/3
      </Block>
    </Block>
  ))
  .add('margin', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block displayBlock itemSpacing="5">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        direction="column"
        border={{ side: 'all', color: 'blue' }}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" margin="8">
          Margin of 8
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" margin="7">
          Margin of 7
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" margin="6">
          Margin of 6
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" margin="5">
          Margin of 5
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" margin="4">
          Margin of 4
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" margin="3">
          Margin of 3
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" margin="2">
          Margin of 2
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" margin="1">
          Margin of 1
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" margin="0">
          No margin
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block displayBlock itemSpacing="3">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Block flex background="white" margin="4">
            4 on all sides
          </Block>
        </Block>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Block flex background="white" margin="4 5">
            4 on top/bottom, 5 on right/left
          </Block>
        </Block>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Block flex background="white" margin="4 5 3">
            4 on top, 5 on right/left, 3 on bottom
          </Block>
        </Block>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Block flex background="white" margin="1 2 3 4">
            1 on top, 2 on right, 3 on bottom, 4 on left
          </Block>
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        direction="column"
        border={{ side: 'all', color: 'blue' }}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginTop="8">
          Top margin of 8
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginTop="7">
          Top margin of 7
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginTop="6">
          Top margin of 6
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginTop="5">
          Top margin of 5
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginTop="4">
          Top margin of 4
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginTop="3">
          Top margin of 3
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginTop="2">
          Top margin of 2
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginTop="1">
          Top margin of 1
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light">No margin</Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        direction="column"
        border={{ side: 'all', color: 'blue' }}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginBottom="8">
          Bottom margin of 8
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginBottom="7">
          Bottom margin of 7
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginBottom="6">
          Bottom margin of 6
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginBottom="5">
          Bottom margin of 5
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginBottom="4">
          Bottom margin of 4
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginBottom="3">
          Bottom margin of 3
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginBottom="2">
          Bottom margin of 2
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" marginBottom="1">
          Bottom margin of 1
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light">No margin</Block>
      </Block>
    </Block>
  ))
  .add('margin responsive', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block displayBlock itemSpacing="3">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block margin={[2, 4, 6, 8]} flex background="white">
          margin 2,4,6,8
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block margin={[1, 4, 0, 8]} flex background="white">
          margin 1,4,0,8
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block marginTop={[1, 4, 0, 8]} flex background="white">
          marginTop 1,4,0,8
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block marginBottom={[1, 4, 0, 8]} flex background="white">
          marginBottom 1,4,0,8
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          flex
          background="white"
          margin={['3 4', '4 5', '5 6', '6 7']}
        >
          vertical 3,4,5,6, horizontal 4,5,6,7
        </Block>
      </Block>
    </Block>
  ))
  .add('padding', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="1" direction="column" margin="0 0 4">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="8">
          Padding of 8
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="7">
          Padding of 7
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="6">
          Padding of 6
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="5">
          Padding of 5
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="4">
          Padding of 4
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="3">
          Padding of 3
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="2">
          Padding of 2
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="1">
          Padding of 1
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="0">
          No padding
        </Block>
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block displayBlock itemSpacing="3" margin="0 0 4">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="4" displayBlock>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Block displayBlock background="white">
            4 on all sides
          </Block>
        </Block>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="4 5" displayBlock>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Block displayBlock background="white">
            4 on top/bottom, 5 on left/right
          </Block>
        </Block>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="4 5 3" displayBlock>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Block displayBlock background="white">
            4 on top, 5 on left/right, 3 on bottom
          </Block>
        </Block>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" padding="1 2 3 4" displayBlock>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Block displayBlock background="white">
            1 on top, 2 on right, 3 on bottom, 4 on left
          </Block>
        </Block>
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="1" direction="column" margin="0 0 4">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingHorizontal="8">
          Horizontal padding of 8
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingHorizontal="7">
          Horizontal padding of 7
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingHorizontal="6">
          Horizontal padding of 6
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingHorizontal="5">
          Horizontal padding of 5
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingHorizontal="4">
          Horizontal padding of 4
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingHorizontal="3">
          Horizontal padding of 3
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingHorizontal="2">
          Horizontal padding of 2
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingHorizontal="1">
          Horizontal padding of 1
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light">No padding</Block>
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="1" direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingVertical="8">
          Vertical padding of 8
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingVertical="7">
          Vertical padding of 7
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingVertical="6">
          Vertical padding of 6
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingVertical="5">
          Vertical padding of 5
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingVertical="4">
          Vertical padding of 4
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingVertical="3">
          Vertical padding of 3
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingVertical="2">
          Vertical padding of 2
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" paddingVertical="1">
          Vertical padding of 1
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light">No padding</Block>
      </Block>
    </>
  ))
  .add('padding responsive', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block displayBlock itemSpacing="3">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
        padding={[2, 4, 6, 8]}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block flex background="white">
          padding 2,4,6,8
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
        padding={[1, 4, 0, 8]}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block flex background="white">
          padding 1,4,0,8
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
        paddingHorizontal={[1, 4, 0, 8]}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block flex background="white">
          paddingHorizontal 1,4,0,8
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        border={{ side: 'all', color: 'blue' }}
        background="blue-light"
        paddingVertical={[1, 4, 0, 8]}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block flex background="white">
          paddingVertical 1,4,0,8
        </Block>
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        background="blue-light"
        padding={['3 4', '4 5', '5 6', '6 7']}
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block flex background="white">
          vertical 3,4,5,6, horizontal 4,5,6,7
        </Block>
      </Block>
    </Block>
  ))
  .add('all', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block justify="start" itemSpacing="3" marginBottom="4">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block basis="1/3" padding="3" background="blue-light">
          1/3
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block basis="1/3" padding="3" background="blue-light">
          1/3
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block basis="1/3" padding="3" background="blue-light">
          1/3
        </Block>
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block justify="start" itemSpacing="3" marginBottom="4">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          width="243px"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          233px
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          width="10rem"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          10rem (160px)
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          width="25%"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          25%
        </Block>
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" marginBottom="4">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          width={[10, 33, 25, 10]}
          padding="3"
          background="blue-light"
        >
          10%, 33%, 25%, 10%
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          width={[80, 33, 50, 10]}
          padding="3"
          background="blue-light"
        >
          80%, 33%, 50%, 10%
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          width={[10, 34, 25, 80]}
          padding="3"
          background="blue-light"
        >
          10%, 34%, 25%, 80%
        </Block>
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" height="100px" marginBottom="4">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          height="44px"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          44px
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          height="4rem"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          4rem (64px)
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          height="80%"
          padding="3"
          background="blue-light"
          marginBottom="4"
        >
          80%
        </Block>
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block
        direction="column"
        itemSpacing="3"
        height="300px"
        marginBottom="4"
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          height={[10, 33, 25, 10]}
          padding="3"
          background="blue-light"
        >
          10%, 33%, 25%, 10%
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          height={[80, 33, 50, 10]}
          padding="3"
          background="blue-light"
        >
          80%, 33%, 50%, 10%
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          height={[10, 34, 25, 80]}
          padding="3"
          background="blue-light"
        >
          10%, 34%, 25%, 80%
        </Block>
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block alignItems="center" itemSpacing="3" marginBottom="4">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block width="150px">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Text size="2">A tall column with variable height</Text>
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Badge type="info">badge</Badge>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          height="100px"
          background="blue-light"
          padding="3"
          alignItems="center"
        >
          100px height
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          height="75px"
          background="blue-light"
          padding="3"
          alignItems="center"
        >
          75px height
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          height="50px"
          background="blue-light"
          padding="3"
          alignItems="center"
        >
          50px height
        </Block>
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginTop="8">
        Margin top of 8
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginTop="7">
        Margin top of 7
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginTop="6">
        Margin top of 6
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginTop="5">
        Margin top of 5
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginTop="4">
        Margin top of 4
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginTop="3">
        Margin top of 3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginTop="2">
        Margin top of 2
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginTop="1">
        Margin top of 1
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light">No margin</Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginBottom="8">
        Margin bottom of 8
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginBottom="7">
        Margin bottom of 7
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginBottom="6">
        Margin bottom of 6
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginBottom="5">
        Margin bottom of 5
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginBottom="4">
        Margin bottom of 4
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginBottom="3">
        Margin bottom of 3
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginBottom="2">
        Margin bottom of 2
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light" marginBottom="1">
        Margin bottom of 1
      </Block>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block background="blue-light">No margin</Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" wrap>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" direction="column">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block textSize="1">Text size of 1</Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block textSize="2">Text size of 2</Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block textSize="3">Text size of 3</Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block textSize="4">Text size of 4</Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block textSize="5">Text size of 5</Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block textSize="6">Text size of 6</Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block textSize="7">Text size of 7</Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block>Default text size</Block>
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <p>
          iStreamPlanet creates leading-edge technology to solve the
          core challenges of OTT media. We deliver the end-to-end
          video workflow from signal acquisition to the streaming app
          experience — all focused on the fan.
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </p>

        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <p>
          iStreamPlanet has earned the trust of leading sports and
          entertainment brands through innovation, dedication to high
          quality video, and exceptional customer service.
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </p>
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block truncate>
        This Block has truncate set to true. Therefore it's content is
        limited to a single line, and overflow content truncated with
        an ellipsis.
      </Block>

      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block direction="column" itemSpacing="3">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block background="blue-light" direction="column">
          Left Aligned
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Block
          background="blue-light"
          direction="column"
          textAlign="center"
        >
          Centered
        </Block>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
