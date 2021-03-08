import '../../Styles/foundation.scss';

import Block from '../Block/Block';
import Copy from './Copy';
import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Copy', module)
  .add('basic', () => (
    <Block
      alignItems="center"
      justify="around"
      width="100%"
      height="400px"
      className="m-auto"
    >
      <Copy value="this works!" />
    </Block>
  ))
  .add('Custom Success Message', () => (
    <Block
      alignItems="center"
      justify="around"
      width="100%"
      height="400px"
      className="m-auto"
    >
      <Copy
        value="this works!"
        successMessage="The value has been copied!"
      />
    </Block>
  ))
  .add('Children', () => (
    <Block
      alignItems="center"
      justify="around"
      width="100%"
      height="400px"
      className="m-auto"
    >
      <Copy
        value="this works!"
        successMessage="The value has been copied!"
      >
        Click Me
      </Copy>
      <Copy
        value="this works!"
        successMessage="The value has been copied!"
        icon=""
      >
        Only Text
      </Copy>
    </Block>
  ))
  .add('Button Styles', () => (
    <Block
      alignItems="center"
      justify="around"
      width="100%"
      height="400px"
      className="m-auto"
    >
      <Copy value="this works!" />
      <Copy value="this works!" primary />
      <Copy value="this works!" danger />
      <Copy value="this works!" primary danger />
      <Copy value="this works!" plain />
      <Copy value="this works!" size="small" />
      <Copy value="this works!" size="medium" />
      <Copy value="this works!" size="large" />
    </Block>
  ))
  .add('popover Styles', () => (
    <Block
      alignItems="center"
      justify="around"
      width="100%"
      height="400px"
      className="m-auto"
    >
      <Copy
        value="this works!"
        popoverBackground="red"
        popoverColor="blue"
      />
      <Copy value="this works!" popoverClassName="shadow-5" />
    </Block>
  ))
  .add('Custom Icon', () => (
    <Block
      alignItems="center"
      justify="around"
      width="100%"
      height="400px"
      className="m-auto"
    >
      <Copy value="this works!" icon="crosshair" />
    </Block>
  ));
