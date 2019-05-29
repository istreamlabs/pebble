import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../Styles/foundation.scss';

import Alert from './Alert';

storiesOf('Alert', module)
  .add('all', () => (
    <>
      <Alert className="mb-4" title="Default Alert">
        <p>Something you should know about.</p>
      </Alert>
      <Alert className="mb-4" type="info" title="Info Alert">
        <p>Regions have been updated.</p>
      </Alert>
      <Alert className="mb-4" type="warn" title="Warn Alert">
        <p>This change might impact another asset.</p>
      </Alert>
      <Alert className="mb-4" type="danger" title="Danger Alert">
        <p>This change may have result in unintended consequences.</p>
      </Alert>
      <Alert className="mb-4" type="success" title="Success Alert">
        <p>Changes have been successfully saved</p>
      </Alert>
      <Alert className="mb-4" title="Dismissible Alert" onDismiss={action('dismiss button pressed')}>
        <p>Pass a function to onDismiss and a close button will be rendered.</p>
      </Alert>
      <Alert title="Custom Icon" icon="ticket">
        <p>Generally, the default icons for the default, info, warn, danger and success status should be used.</p>
      </Alert>
    </>
  ));
