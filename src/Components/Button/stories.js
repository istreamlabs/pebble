import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Button from './Button';

import ButtonGroup from '../ButtonGroup/ButtonGroup';

storiesOf('Button', module).add('all', () => (
  <>
    <ButtonGroup>
      <Button>default</Button>
      <Button primary>primary</Button>
      <Button danger>danger</Button>
      <Button primary danger>
        primary danger
      </Button>
      <Button plain>plain</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button size="small">small</Button>
      <Button>medium</Button>
      <Button size="large">large</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button primary size="small" icon="add-circle">
        small
      </Button>
      <Button primary icon="add-circle">
        medium
      </Button>
      <Button primary size="large" icon="add-circle">
        large
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button primary size="small" iconAfterText="add-circle">
        small
      </Button>
      <Button primary iconAfterText="add-circle">
        medium
      </Button>
      <Button primary size="large" iconAfterText="add-circle">
        large
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button
        primary
        size="small"
        icon="add-circle"
        iconAfterText="arrow-small-down"
      >
        small
      </Button>
      <Button
        primary
        icon="add-circle"
        iconAfterText="arrow-small-down"
      >
        medium
      </Button>
      <Button
        primary
        size="large"
        icon="add-circle"
        iconAfterText="arrow-small-down"
      >
        large
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button icon="arrow-small-left">prev</Button>
      <Button iconAfterText="arrow-small-right">next</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button disabled>default</Button>
      <Button disabled primary>
        primary
      </Button>
      <Button disabled danger>
        danger
      </Button>
      <Button disabled primary danger>
        primary danger
      </Button>
      <Button href="#" disabled plain>
        plain
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button loading>my button</Button>
      <Button loading primary>
        my button
      </Button>
      <Button loading danger>
        my button
      </Button>
      <Button loading primary danger>
        my button
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button fullWidth primary className="mb-2">
        full width
      </Button>
      <Button fullWidth primary iconAfterText="arrow-small-down">
        full width
      </Button>
    </ButtonGroup>
  </>
));
