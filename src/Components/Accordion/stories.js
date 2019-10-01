import React from 'react';
import { storiesOf } from '@storybook/react';

import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Accordion, { AccordionPanel } from './Accordion';

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
  .add('PID', () => (
    <Accordion allowMultiple border="all" background="neutral-200">
      <AccordionPanel displayBlock label="LA RED 1 (451)">
        <Accordion background="neutral-200" allowMultiple>
          <AccordionPanel
            displayBlock
            paddingVertical="4"
            paddingHorizontal="4"
            label={arrowIcon => (
              <PID arrowIcon={arrowIcon} label="PMT: 410" />
            )}
          >
            test
          </AccordionPanel>
          <AccordionPanel
            displayBlock
            paddingVertical="4"
            paddingHorizontal="4"
            label={arrowIcon => (
              <PID arrowIcon={arrowIcon} label="PMT: 416" />
            )}
          >
            info
          </AccordionPanel>
          <AccordionPanel
            displayBlock
            paddingVertical="4"
            paddingHorizontal="4"
            label={arrowIcon => (
              <PID
                arrowIcon={arrowIcon}
                label="ECM: 1389 (Irdeto -- 0x610)"
              />
            )}
          >
            info
          </AccordionPanel>
          <AccordionPanel
            displayBlock
            paddingVertical="4"
            paddingHorizontal="4"
            label={arrowIcon => (
              <PID
                arrowIcon={arrowIcon}
                label="ECM: 2389 (Irdeto -- 0x610)"
              />
            )}
          >
            info
          </AccordionPanel>
        </Accordion>
      </AccordionPanel>
      <AccordionPanel label="LA RED 2 (452)">
        panel 2 content
      </AccordionPanel>
      <AccordionPanel label="TVN 1 (551">
        panel 3 content
      </AccordionPanel>
    </Accordion>
  ));

function PID(props) {
  const { label, arrowIcon } = props;

  return (
    <Block
      textSize="5"
      color="neutral-600"
      paddingHorizontal="4"
      paddingVertical="3"
      border="bottom"
      justify="between"
    >
      <div>{label}</div>
      <Icon name={arrowIcon} />
    </Block>
  );
}
