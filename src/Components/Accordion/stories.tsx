// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import PropTypes from 'prop-types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Accordion' was resolved to '/Users/esjaa... Remove this comment to see the full error message
import Icon from '../Icon/Icon';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../CollapsiblePanel/CollapsiblePanel' was ... Remove this comment to see the full error message
import Accordion from './Accordion';
import CollapsiblePanel from '../CollapsiblePanel/CollapsiblePanel';

const VDCM = [
  {
    name: 'LA RED 1',
    id: 451,
    pids: [
      {
        id: 411,
        type: 'H264 video',
        specs: {
          bitrate: '5.9 Mbps',
          frameType: 'interlaced',
          frameSize: '1920x1080',
          frameRate: '29.97fps',
          ratio: '1920:1080',
          bitDepth: 8,
        },
      },
      {
        id: 412,
        type: 'AAC audio',
        specs: {
          language: 'english',
          bitRate: '391.33 Kbps',
          sampleRate: '48 KHz',
        },
      },
      {
        id: 413,
        type: 'AAC audio',
        specs: {
          language: 'english',
          bitRate: '391.33 Kbps',
          sampleRate: '48 KHz',
        },
      },
      {
        id: 414,
        type: 'AAC audio3',
        specs: {
          language: 'spanish',
          bitRate: '391.33 Kbps',
          sampleRate: '48 KHz',
        },
      },
      {
        id: 415,
        type: 'AAC audio',
        specs: {
          language: 'spanish',
          bitRate: '391.33 Kbps',
          sampleRate: '48 KHz',
        },
      },
    ],
  },
  {
    name: 'LA RED 2',
    id: 452,
    pids: [
      {
        id: 411,
        type: 'H264 video',
        specs: {
          bitrate: '5.9 Mbps',
          frameType: 'interlaced',
          frameSize: '1920x1080',
          frameRate: '29.97fps',
          ratio: '1920:1080',
          bitDepth: 8,
        },
      },
      {
        id: 412,
        type: 'AAC audio',
        specs: {
          language: 'english',
          bitRate: '391.33 Kbps',
          sampleRate: '48 KHz',
        },
      },
      {
        id: 413,
        type: 'AAC audio',
        specs: {
          language: 'english',
          bitRate: '391.33 Kbps',
          sampleRate: '48 KHz',
        },
      },
      {
        id: 414,
        type: 'AAC audio3',
        specs: {
          language: 'spanish',
          bitRate: '391.33 Kbps',
          sampleRate: '48 KHz',
        },
      },
      {
        id: 415,
        type: 'AAC audio',
        specs: {
          language: 'spanish',
          bitRate: '391.33 Kbps',
          sampleRate: '48 KHz',
        },
      },
    // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
    ],
  },
];

storiesOf('Accordion', module)
  .addParameters({
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    chromatic: { viewports: [479, 959, 1439] },
  })
  .add('Single', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Accordion border="all" defaultOpen="panel2" background="white">
      <CollapsiblePanel
        id="panel1"
        background="neutral-200"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="panel 1"
      >
        <Block flex padding={[3, 4, 5]}>
          panel 1 content
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        </Block>
      </CollapsiblePanel>
      <CollapsiblePanel
        id="panel2"
        background="neutral-200"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="panel 2"
      >
        <Block flex padding={[3, 4, 5]}>
          panel 2 content
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        </Block>
      </CollapsiblePanel>
      <CollapsiblePanel
        id="panel3"
        background="neutral-200"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="panel 3"
      >
        <Block flex padding={[3, 4, 5]}>
          panel 3 content
        </Block>
      </CollapsiblePanel>
    </Accordion>
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  ))
  .add('Multiple', () => (
    <Accordion
      id="panel1"
      allowMultiple
      border="all"
      background="white"
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      defaultOpen={['panel2', 'panel3']}
    >
      <CollapsiblePanel
        id="panel1"
        background="neutral-200"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="panel 1"
      >
        <Block flex padding={[3, 4, 5]}>
          panel 1 content
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        </Block>
      </CollapsiblePanel>
      <CollapsiblePanel
        id="panel2"
        background="neutral-200"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="panel 2"
      >
        <Block flex padding={[3, 4, 5]}>
          panel 2 content
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        </Block>
      </CollapsiblePanel>
      <CollapsiblePanel
        id="panel3"
        background="neutral-200"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="panel 3"
      >
        <Block flex padding={[3, 4, 5]}>
          panel 3 content
        </Block>
      </CollapsiblePanel>
    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
    </Accordion>
  ))
  .add('Nested', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Accordion defaultOpen="panel1" border="all">
      <CollapsiblePanel
        id="panel1"
        displayBlock
        background="neutral-200"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="panel 1"
      >
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Accordion width="100%" className="pl-5" allowMultiple>
          <CollapsiblePanel
            id="nestedPanel1"
            background="neutral-200"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            label="nested panel 1"
          >
            <Block flex padding={[3, 4, 5]}>
              nested panel 1 content
            </Block>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          </CollapsiblePanel>
          <CollapsiblePanel
            id="nestedPanel2"
            background="neutral-200"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            label="nested panel 2"
          >
            <Block flex padding={[3, 4, 5]}>
              nested panel 2 content
            </Block>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          </CollapsiblePanel>
          <CollapsiblePanel
            id="nestedPanel3"
            background="neutral-200"
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            label="nested panel 3"
          >
            <Block flex padding={[3, 4, 5]}>
              nested panel 3 content
            </Block>
          </CollapsiblePanel>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        </Accordion>
      </CollapsiblePanel>
      <CollapsiblePanel
        id="panel2"
        background="neutral-200"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="panel 2"
      >
        <Block flex padding={[3, 4, 5]}>
          panel 2 content
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        </Block>
      </CollapsiblePanel>
      <CollapsiblePanel
        id="panel3"
        background="neutral-200"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        label="panel 3"
      >
        <Block flex padding={[3, 4, 5]}>
          panel 3 content
        </Block>
      </CollapsiblePanel>
    </Accordion>
  ))
  .add('Nested with label renderProp', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const items = VDCM.map(program => (
      <CollapsiblePanel
        id={`${program.id}`}
        background="neutral-200"
        label={program.name}
        key={program.id}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        displayBlock
      >
        <Accordion
          width="100%"
          allowMultiple
          defaultOpen="411"
          className="ml-5"
        >
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          {program.pids.map((pid, i) => {
            return (
              <CollapsiblePanel
                // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
                background="neutral-300"
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                label={props => (
                  <ServiceID
                    onToggle={props.onToggle}
                    open={props.open}
                    label={`${pid.id} - ${pid.type}`}
                    type={pid.type}
                  />
                )}
                id={`${pid.id}`}
                key={`${pid.id}${i}`}
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                displayBlock
              >
                <SidVideoDetail specs={pid.specs} />
              </CollapsiblePanel>
            );
          })}
        </Accordion>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      </CollapsiblePanel>
    ));
    return (
      <Accordion defaultOpen="451" border="all" background="white">
        {items}
      {/* @ts-expect-error ts-migrate(7006) FIXME: Parameter 'props' implicitly has an 'any' type. */}
      </Accordion>
    );
  });

function ServiceID(props) {
  // eslint-disable-next-line react/prop-types
  const { label, open, type } = props;

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const arrowIcon = open ? 'arrow-small-up' : 'arrow-small-down';

  return (
    <Block
      textSize="5"
      color="neutral-600"
      padding="3 4"
      border="bottom"
      justify="between"
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      background="white"
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Block itemSpacing="3" alignItems="start">
        <Icon
          name={type === 'H264 video' ? 'video' : 'music'}
          accessibilityLabel={type}
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          className="neutral-400"
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <div>{label}</div>
      </Block>
      <Icon name={arrowIcon} />
    </Block>
  );
}

function SidVideoDetail({ specs }) {
  const displaySpecs = Object.keys(specs).map(keyName => (
    <Block
      key={keyName}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      border="bottom"
      padding="2 3"
      justify="between"
      textSize="6"
      background="white"
      flex
    >
      <div>{keyName}</div>
      {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
      <div className="fw-700">{specs[keyName]}</div>
    </Block>
  ));

  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block flex padding="4" direction="column">
      {displaySpecs}
    </Block>
  );
}

SidVideoDetail.propTypes = {
  specs: PropTypes.object,
};
