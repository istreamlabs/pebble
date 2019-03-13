import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Button from './Button';

storiesOf('Button', module)
  .add('all', () => (
    <>
      <Button>default</Button>
      {' '}
      <Button primary>primary</Button>
      {' '}
      <Button danger>danger</Button>
      {' '}
      <Button primary danger>primary danger</Button>
      {' '}
      <Button plain>plain</Button>
      <div>
        <Button size="small">small</Button>
        {' '}
        <Button>medium</Button>
        {' '}
        <Button size="large">large</Button>
      </div>
      <div>
        <Button primary size="small" icon="add-circle">small</Button>
        {' '}
        <Button primary icon="add-circle">medium</Button>
        {' '}
        <Button primary size="large" icon="add-circle">large</Button>
      </div>
      <div>
        <Button icon="arrow-small-right" iconAfterText>next</Button>
      </div>
      <div>
        <Button disabled>default</Button>
        {' '}
        <Button disabled primary>primary</Button>
        {' '}
        <Button disabled danger>danger</Button>
        {' '}
        <Button disabled primary danger>primary danger</Button>
      </div>
      <div>
        <Button loading>my button</Button>
        {' '}
        <Button loading primary>my button</Button>
        {' '}
        <Button loading danger>my button</Button>
        {' '}
        <Button loading primary danger>my button</Button>
      </div>
      <div>
        <Button fullWidth primary className="mb-2">full width</Button>
        <Button fullWidth primary icon="arrow-small-down" iconAfterText>full width</Button>
      </div>
    </>
  ));
