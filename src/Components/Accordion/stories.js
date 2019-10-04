import React from 'react';
import PropTypes from 'prop-types';

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
    ],
  },
];

storiesOf('Accordion', module)
  .addParameters({
    chromatic: { viewports: [479, 959, 1439] },
  })
  .add('Nested with label renderProp', () => {
    const items = VDCM.map(program => (
      <AccordionPanel
        id={`${program.id}`}
        background="neutral-200"
        label={program.name}
        key={program.id}
        displayBlock
      >
        <Accordion allowMultiple className="ml-5">
          {program.pids.map((pid, i) => {
            return (
              <AccordionPanel
                background="neutral-300"
                label={props => (
                  <ServiceID
                    onPanelChange={props.onPanelChange}
                    open={props.open}
                    label={`${pid.id} - ${pid.type}`}
                    type={pid.type}
                  />
                )}
                id={`${pid.id}`}
                key={`${pid.id}${i}`}
                padding={[3, 4]}
                displayBlock
              >
                <SidVideoDetail specs={pid.specs} />
              </AccordionPanel>
            );
          })}
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
    <Accordion border="all" defaultOpen="panel2" background="white">
      <AccordionPanel
        id="panel1"
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 1"
      >
        panel 1 content
      </AccordionPanel>
      <AccordionPanel
        id="panel2"
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 2"
      >
        panel 2 content
      </AccordionPanel>
      <AccordionPanel
        id="panel3"
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
      id="panel1"
      allowMultiple
      border="all"
      background="white"
      defaultOpen={['panel2', 'panel3']}
    >
      <AccordionPanel
        id="panel1"
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 1"
      >
        panel 1 content
      </AccordionPanel>
      <AccordionPanel
        id="panel2"
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 2"
      >
        panel 2 content
      </AccordionPanel>
      <AccordionPanel
        id="panel3"
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 3"
      >
        panel 3 content
      </AccordionPanel>
    </Accordion>
  ))
  .add('Nested', () => (
    <Accordion defaultOpen="panel1" border="all">
      <AccordionPanel
        id="panel1"
        displayBlock
        background="neutral-200"
        label="panel 1"
        textSize="7"
        className="pl-5"
      >
        <Accordion allowMultiple>
          <AccordionPanel
            id="nestedPanel1"
            background="neutral-200"
            padding={[3, 4, 5]}
            label="nested panel 1"
          >
            nested panel 1 content
          </AccordionPanel>
          <AccordionPanel
            id="nestedPanel2"
            background="neutral-200"
            padding={[3, 4, 5]}
            label="nested panel 2"
          >
            nested panel 2 content
          </AccordionPanel>
          <AccordionPanel
            id="nestedPanel3"
            background="neutral-200"
            padding={[3, 4, 5]}
            label="nested panel 3"
          >
            nested panel 3 content
          </AccordionPanel>
        </Accordion>
      </AccordionPanel>
      <AccordionPanel
        id="panel2"
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 2"
      >
        panel 2 content
      </AccordionPanel>
      <AccordionPanel
        id="panel3"
        background="neutral-200"
        padding={[3, 4, 5]}
        label="panel 3"
      >
        panel 3 content
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
      background="white"
    >
      <Block itemSpacing="3" alignItems="start">
        <Icon
          name={type === 'H264 video' ? 'video' : 'music'}
          accessibilityLabel={type}
          className="neutral-400"
        />
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
      border="bottom"
      paddingHorizontal="3"
      paddingVertical="2"
      justify="between"
      textSize="6"
    >
      <div>{keyName}</div>
      <div className="fw-700">{specs[keyName]}</div>
    </Block>
  ));

  return (
    <Block displayBlock background="white" radius="2">
      {displaySpecs}
    </Block>
  );
}

SidVideoDetail.propTypes = {
  specs: PropTypes.object,
};
