import React from 'react';
import { storiesOf } from '@storybook/react';

import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Accordion from './Accordion';
import AccordionPanel from './Components/AccordionPanel';

storiesOf('Accordion', module)
  .addParameters({
    chromatic: { viewports: [479, 959, 1439] },
  })
  .add('Single', () => (
    <Accordion border="all" background="white" defaultIndex={0}>
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
  const { label, active, type } = props;

  const arrowIcon = active ? 'arrow-small-up' : 'arrow-small-down';

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
          active={props.active}
        />
      )}
      background="white"
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
          active={props.active}
          label="PMT: 416"
          type="video"
        />
      )}
      background="white"
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
          active={props.active}
          label="ECM: 1389 (Irdeto -- 0x610)"
          type="audio"
        />
      )}
      background="white"
      textSize="6"
    >
      <SidAudioDetail />
    </AccordionPanel>
    <AccordionPanel
      displayBlock
      paddingVertical="4"
      paddingHorizontal="4"
      border="bottom"
      label={active => (
        <ServiceID
          active={active}
          label="ECM: 2389 (Irdeto -- 0x610)"
          type="audio"
        />
      )}
      background="white"
      textSize="6"
    >
      <SidAudioDetail />
    </AccordionPanel>
  </Accordion>
);

function SidVideoDetail() {
  return (
    <Block displayBlock>
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
    <Block displayBlock>
      <div>Lanuguage</div>
      <div>Bitrate</div>
      <div>SampleRate</div>
    </Block>
  );
}
