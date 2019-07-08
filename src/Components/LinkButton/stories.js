import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as DemoBrowserRouter } from 'react-router-dom';

import '../../Styles/foundation.scss';

import LinkButton from './LinkButton';

import ButtonGroup from '../ButtonGroup/ButtonGroup';

storiesOf('LinkButton', module).add('all', () => (
  <DemoBrowserRouter>
    <ButtonGroup>
      <LinkButton href="#">default</LinkButton>
      <LinkButton href="#" primary>
        primary
      </LinkButton>
      <LinkButton href="#" danger>
        danger
      </LinkButton>
      <LinkButton href="#" primary danger>
        primary danger
      </LinkButton>
    </ButtonGroup>

    <ButtonGroup>
      <LinkButton href="#small" size="small">
        small
      </LinkButton>
      <LinkButton href="#medium">medium</LinkButton>
      <LinkButton href="#large" size="large">
        large
      </LinkButton>
    </ButtonGroup>

    <ButtonGroup>
      <LinkButton href="#" primary size="small" icon="add-circle">
        small
      </LinkButton>
      <LinkButton href="#" primary icon="add-circle">
        medium
      </LinkButton>
      <LinkButton href="#" primary size="large" icon="add-circle">
        large
      </LinkButton>
    </ButtonGroup>

    <ButtonGroup>
      <LinkButton href="#" icon="arrow-small-left">
        prev
      </LinkButton>
      <LinkButton href="#" icon="arrow-small-right" iconAfterText>
        next
      </LinkButton>
    </ButtonGroup>

    <LinkButton href="#" className="myCustomClass">
      my button
    </LinkButton>

    <ButtonGroup>
      <LinkButton href="#" disabled>
        default
      </LinkButton>
      <LinkButton href="#" disabled primary>
        primary
      </LinkButton>
      <LinkButton href="#" disabled danger>
        danger
      </LinkButton>
      <LinkButton href="#" disabled primary danger>
        primary danger
      </LinkButton>
    </ButtonGroup>

    <LinkButton href="#" fullWidth primary>
      full width
    </LinkButton>
  </DemoBrowserRouter>
));
