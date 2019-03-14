import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import TextContainer from './TextContainer';

import Heading from '../Heading/Heading';

storiesOf('TextContainer', module)
  .add('all', () => (
    <>
      <TextContainer className="mb-6">
        <Heading element="3">Who is iStreamPlanet?</Heading>
        <p>iStreamPlanet creates leading-edge technology to solve the core challenges of OTT media. We deliver the end-to-end video workflow from signal acquisition to the streaming app experience — all focused on the fan.</p>
        <p>iStreamPlanet has earned the trust of leading sports and entertainment brands through innovation, dedication to high quality video, and exceptional customer service.</p>
      </TextContainer>
      <TextContainer className="mb-6" size="4">
        <Heading element="2" size="3">Heading with its own size</Heading>
        <p>This text inherits its size from the parent.</p>
        <TextContainer size="6">
          <p>This text inherits its size from its own parent.</p>
        </TextContainer>
      </TextContainer>
      <TextContainer tight>
        <Heading element="3">Game of Thrones</Heading>
        <p>Season 1, Episodes 1-10</p>
      </TextContainer>
    </>
  ));
