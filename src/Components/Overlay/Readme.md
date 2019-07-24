```js
import { useState } from 'react';
import Button from '../Button/Button';

function OverlayExample() {
  const [openOverlay, setOpenOverlay] = useState(false);

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

<OverlayExample />;
```
