import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Overlay from './Overlay';
import Button from '../Button/Button';

function OverlayExample() {
  const [openOverlay, setOpenOverlay] = useState(true);

  return (
    <>
      {openOverlay && (
        <Overlay onClick={() => setOpenOverlay(!openOverlay)} />
      )}
      <Button onClick={() => setOpenOverlay(!openOverlay)}>
        Show Overlay
      </Button>
    </>
  );
}

storiesOf('Overlay', module).add('all', () => (
  <>
    <OverlayExample />
  </>
));
