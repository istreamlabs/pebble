import React from 'react';
import { storiesOf } from '@storybook/react';

import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Accordion from './Accordion';
import AccordionPanel from './Components/AccordionPanel';

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
];

storiesOf('Accordion', module)
  .addParameters({
    chromatic: { viewports: [479, 959, 1439] },
  })
  .add('loop', () => {
    const items = VDCM.map(program => (
      <AccordionPanel
        background="neutral-200"
        label={program.name}
        key={program.id}
        displayBlock
      >
        <Accordion className="ml-5" allowMultiple>
          {program.pids.map(pid => (
            <AccordionPanel
              background="neutral-200"
              label={`${pid.id}`}
              key={pid.id}
              padding={[3, 4]}
              displayBlock
            >
              {pid.type}
            </AccordionPanel>
          ))}
        </Accordion>
      </AccordionPanel>
    ));
    return (
      <Accordion border="all" background="white">
        {items}
      </Accordion>
    );
  })
  .add('Single', () => (
    <Accordion border="all" defaultIndex={0} background="white">
      <AccordionPanel
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 1"
      >
        panel 1 content
      </AccordionPanel>
      <AccordionPanel
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 2"
      >
        panel 2 content
      </AccordionPanel>
      <AccordionPanel
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 3"
      >
        panel 3 content
      </AccordionPanel>
    </Accordion>
  ))
  .add('Multiple', () => (
    <Accordion
      defaultIndex={[0, 1, 2]}
      allowMultiple
      border="all"
      background="white"
    >
      <AccordionPanel
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 1"
      >
        panel 1 content
      </AccordionPanel>
      <AccordionPanel
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 2"
      >
        panel 2 content
      </AccordionPanel>
      <AccordionPanel
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 3"
      >
        panel 3 content
      </AccordionPanel>
    </Accordion>
  ))
  .add('Nested', () => (
    <Accordion defaultIndex={0} border="all">
      <AccordionPanel
        displayBlock
        background="neutral-200"
        label="panel 1"
        textSize="7"
      >
        <Accordion allowMultiple>
          <AccordionPanel
            background="neutral-200"
            padding={[3, 4, 5]}
            label="nested panel 1"
          >
            nested panel 1 content
          </AccordionPanel>
          <AccordionPanel
            background="neutral-200"
            padding={[3, 4, 5]}
            label="nested panel 2"
          >
            nested panel 2 content
          </AccordionPanel>
          <AccordionPanel
            background="neutral-200"
            padding={[3, 4, 5]}
            label="nested panel 3"
          >
            nested panel 3 content
          </AccordionPanel>
        </Accordion>
      </AccordionPanel>
      <AccordionPanel
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 2"
      >
        panel 2 content
      </AccordionPanel>
      <AccordionPanel
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 3"
      >
        panel 3 content
      </AccordionPanel>
    </Accordion>
  ))
  .add('Nested with Label Render Prop', () => (
    <Accordion allowMultiple border="all">
      <AccordionPanel displayBlock label="LA RED 1 (451)">
        {sids}
      </AccordionPanel>
      <AccordionPanel displayBlock label="LA RED 2 (452)">
        {sids}
      </AccordionPanel>
      <AccordionPanel displayBlock label="TVN 1 (551">
        {sids}
      </AccordionPanel>
    </Accordion>
  ));

function ServiceID(props) {
  // eslint-disable-next-line react/prop-types
  const { label, open, type } = props;

  const arrowIcon = open ? 'arrow-small-up' : 'arrow-small-down';

  return (
    <Block
      textSize="5"
      color="neutral-600"
      paddingHorizontal="4"
      paddingVertical="3"
      border="bottom"
      justify="between"
    >
      <Block itemSpacing="3" alignItems="start">
        <Icon
          name={type === 'video' ? 'video' : 'music'}
          accessibilityLabel={type === 'video' ? 'video' : 'audio'}
          className="neutral-400"
        />
        <div>{label}</div>
      </Block>
      <Icon name={arrowIcon} />
    </Block>
  );
}

const sids = (
  <Accordion background="neutral-200" allowMultiple>
    <AccordionPanel
      displayBlock
      paddingVertical="4"
      paddingHorizontal="4"
      border="bottom"
      label={props => (
        <ServiceID
          label="PMT: 411 (0x19b): MPEG-4 AVC"
          type="video"
          open={props.open}
        />
      )}
      background="neutral-300"
      textSize="6"
    >
      <SidVideoDetail />
    </AccordionPanel>
    <AccordionPanel
      displayBlock
      paddingVertical="4"
      paddingHorizontal="4"
      border="bottom"
      label={props => (
        <ServiceID open={props.open} label="PMT: 416" type="video" />
      )}
      background="neutral-300"
      textSize="6"
    >
      <SidVideoDetail />
    </AccordionPanel>
    <AccordionPanel
      displayBlock
      paddingVertical="4"
      paddingHorizontal="4"
      border="bottom"
      label={props => (
        <ServiceID
          open={props.open}
          label="ECM: 1389 (Irdeto -- 0x610)"
          type="audio"
        />
      )}
      background="neutral-300"
      textSize="6"
    >
      <SidAudioDetail />
    </AccordionPanel>
    <AccordionPanel
      displayBlock
      paddingVertical="4"
      paddingHorizontal="4"
      border="bottom"
      label={props => (
        <ServiceID
          open={props.open}
          label="ECM: 2389 (Irdeto -- 0x610)"
          type="audio"
        />
      )}
      background="neutral-300"
      textSize="6"
    >
      <SidAudioDetail />
    </AccordionPanel>
  </Accordion>
);

function SidVideoDetail() {
  return (
    <Block padding="3" background="white" radius="2" displayBlock>
      <div>Bitrate</div>
      <div>FrameType</div>
      <div>FrameSize</div>
      <div>FrameRate</div>
      <div>Ratio</div>
      <div>BitDepth</div>
    </Block>
  );
}

function SidAudioDetail() {
  return (
    <Block padding="3" background="white" radius="2" displayBlock>
      <div>Lanuguage</div>
      <div>Bitrate</div>
      <div>SampleRate</div>
    </Block>
  );
}
