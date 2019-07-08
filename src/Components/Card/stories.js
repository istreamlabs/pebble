import React from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Card from './Card';

import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

storiesOf('Card', module).add('all', () => (
  <>
    <Card>
      <div>First Child</div>
      <div>Second Child</div>
    </Card>
    <Card title="Basic Card" sectioned>
      <div>First Child</div>
      <div>Second Child</div>
    </Card>
    <Card title="Packages" sectioned>
      <div>Platinum Package</div>
      <div>Gold Package</div>
      <div>Silver Package</div>
      <div>Bronze Package</div>
    </Card>
    <Card
      title="Packages"
      sectioned
      headerActions={
        <ButtonGroup>
          <Button icon="add-circle" primary>
            add
          </Button>
          <Button>select</Button>
        </ButtonGroup>
      }
    >
      <p>Platinum Package</p>
      <p>Gold Package</p>
      <p>Silver Package</p>
      <p>Bronze Package</p>
    </Card>
    <Card title="Muted Card" muted sectioned>
      <p>
        Use a subdued card to display related content with less visual
        emphasis.
      </p>
    </Card>
  </>
));
