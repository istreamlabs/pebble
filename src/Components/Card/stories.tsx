import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';

import Block from '../Block/Block';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

storiesOf('Card', module)
  .addParameters({
    chromatic: { viewports: [479, 959, 1439] },
  })
  .add('all', () => (
    <Block displayBlock itemSpacing="5">
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
      <Card
        sectioned
        headerActions={
          <ButtonGroup toolbar size="small" className="shadow-1">
            <Button>1hr</Button>
            <Button>1d</Button>
            <Button className="blue-dark underline">1w</Button>
            <Button>4w</Button>
            <Button>YTD</Button>
            <Button>All</Button>
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
          Use a subdued card to display related content with less
          visual emphasis.
        </p>
      </Card>
    </Block>
  ));
