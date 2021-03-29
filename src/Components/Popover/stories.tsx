// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../FieldText/FieldText' was resolved to '/... Remove this comment to see the full error message
import FieldText from '../FieldText/FieldText';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Popover' was resolved to '/Users/esjaast... Remove this comment to see the full error message
import Popover from './Popover';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/addon-knobs' or its... Remove this comment to see the full error message
import { select } from '@storybook/addon-knobs';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('Popover', module)
  .add('basic', () => {
    const label = 'placement';
    const options = [
      'auto',
      'auto-start',
      'auto-end',
      'top',
      'top-start',
      'top-end',
      'right',
      'right-start',
      'right-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
    ];
    const defaultValue = 'bottom';
    const groupId = 'GROUP-ID1';

    const placement = select(label, options, defaultValue, groupId);

    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Block
        alignItems="center"
        justify="around"
        width="100%"
        height="400px"
        className="m-auto"
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Popover
          placement={placement}
          content={
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Block
              displayBlock
              background="white"
              padding="3"
              radius="2"
              className="shadow-1"
            >
              I drink your milkshake!
            </Block>
          }
        >
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Button>popover trigger</Button>
        </Popover>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Popover
          placement={placement}
          content={
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Block
              displayBlock
              color="neutral-100"
              background="neutral-800"
              padding="3"
              radius="2"
              className="shadow-1"
            >
              I drink your milkshake!
            </Block>
          }
        >
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Button>popover trigger</Button>
        </Popover>
      </Block>
    );
  })
  .add('open', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Popover
      isOpen
      content={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block
          color="neutral-100"
          padding="3"
          background="neutral-800"
        >
          content
        </Block>
      }
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Button>popover trigger</Button>
    </Popover>
  ))
  .add('arrow color', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Popover
      isOpen
      arrowColor="red"
      content={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block
          color="neutral-100"
          padding="3"
          background="neutral-800"
        >
          arrow is red but content background is neutral-800
        </Block>
      }
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Button>popover trigger</Button>
    </Popover>
  ))
  .add('auto close', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Popover
      closeAfter={2000}
      content={
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block
          color="neutral-100"
          padding="3"
          background="neutral-800"
        >
          This is go away after 2 seconds
        </Block>
      }
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Button>Show for 2 seconds</Button>
    </Popover>
  ))
  .add('content render prop with trapFocus', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Popover
      trapFocus
      isOpen
      arrowColor="neutral-200"
      content={onTriggerClicked => (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Block
          background="white"
          displayBlock
          radius="2"
          className="shadow-2"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        >
          <Block
            background="neutral-200"
            alignItems="center"
            justify="between"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            padding="3"
          >
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <Button size="small">Clear</Button>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <div className="fw-700">Filters</div>
            <Button onClick={onTriggerClicked} primary size="small">
              Done
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            </Button>
          </Block>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Block displayBlock itemSpacing="3" padding="5 3">
            <FieldText
              id="q"
              placeholder="search by name, email"
              label="search"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            />
          </Block>
        </Block>
      )}
    >
      <Button>trigger</Button>
    </Popover>
  ));
