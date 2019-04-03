## Examples

### Types

```js
import { useState } from 'react';
import Button from '../Button/Button';
import Block from '../Block/Block';

function ModalExample() {
  const [showModal, setShowModal] = useState(false);
  const [showDangerModal, setShowDangerModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showWarnModal, setShowWarnModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showSpecialModal, setShowSpecialModal] = useState(false);

  const Default = (
    <Modal
      title="Default Modal"
      onRequestClose={() => setShowModal(!showModal)}
      showing={showModal}
      footer={[
        <Button primary onClick={() => setShowModal(!showModal)}>Save</Button>,
        <Button onClick={() => setShowModal(!showModal)}>Cancel</Button>
      ]}
    >
      I am a modal with the default appearance.
    </Modal>
  );

  const DangerModal = (
    <Modal
      type="danger"
      title="Danger Modal"
      onRequestClose={() => setShowDangerModal(!showDangerModal)}
      showing={showDangerModal}
      footer={[
        <Button primary danger onClick={() => setShowDangerModal(!showDangerModal)}>Delete</Button>,
        <Button onClick={() => setShowDangerModal(!showDangerModal)}>Cancel</Button>
      ]}
    >
     Be sure to include a way to escape or cancel a dangerous action when using a danger modal.
    </Modal>
  );

  const SuccessModal = (
    <Modal
      type="success"
      title="success Modal"
      onRequestClose={() => setShowSuccessModal(!showSuccessModal)}
      showing={showSuccessModal}
      footer={<Button onClick={() => setShowSuccessModal(!showSuccessModal)}>Close</Button>}
    >
     Congratulations, your request has been received.
    </Modal>
  );

  const WarnModal = (
    <Modal
      type="warn"
      title="Warn Modal"
      onRequestClose={() => setShowWarnModal(!showWarnModal)}
      showing={showWarnModal}
      footer={<Button onClick={() => setShowWarnModal(!showWarnModal)}>Close</Button>}
    >
     This is a warning modal.
    </Modal>
  );

  const InfoModal = (
    <Modal
      type="info"
      title="Info Modal"
      onRequestClose={() => setShowInfoModal(!showInfoModal)}
      showing={showInfoModal}
      footer={<Button onClick={() => setShowInfoModal(!showInfoModal)}>Close</Button>}
    >
      I'm a demo modal
    </Modal>
  );

  const SpecialModal = (
    <Modal
      type="special"
      title="Special Modal"
      onRequestClose={() => setShowSpecialModal(!showSpecialModal)}
      showing={showSpecialModal}
      footer={<Button onClick={() => setShowSpecialModal(!showSpecialModal)}>Close</Button>}
    >
      I'm a demo modal
    </Modal>
  );

  return (
    <>
      {showModal && Default}
      {showDangerModal && DangerModal}
      {showSuccessModal && SuccessModal}
      {showWarnModal && WarnModal}
      {showInfoModal && InfoModal}
      {showSpecialModal && SpecialModal}
      <Block wrap itemSpacing="2">
        <Button onClick={() => setShowModal(!showModal)}>Default</Button>
        <Button onClick={() => setShowDangerModal(!showDangerModal)}>Danger</Button>
        <Button onClick={() => setShowSuccessModal(!showSuccessModal)}>Success</Button>
        <Button onClick={() => setShowWarnModal(!showWarnModal)}>Warn</Button>
        <Button onClick={() => setShowInfoModal(!showInfoModal)}>Info</Button>
        <Button onClick={() => setShowSpecialModal(!showSpecialModal)}>Special</Button>
      </Block>
    </>
  );
}

<ModalExample />
```

### Large

When you need to show a lot content, such as a table or grid.

```js
import { useState } from 'react';
import Button from '../Button/Button';

function ModalExample() {
  const [showModal, setShowModal] = useState(false);

  const LargeModal = (
    <Modal
      large
      mobileFullScreen
      title="Large Modal"
      onRequestClose={() => setShowModal(!showModal)}
      showing={showModal}
      footer={[
        <Button primary onClick={() => setShowModal(!showModal)}>Save</Button>,
        <Button onClick={() => setShowModal(!showModal)}>Cancel</Button>
      ]}
    >
      Use large modals for content such as tables or lists. The max width and max height of large modals is increased.
    </Modal>
  )

  return (
    <>
      {showModal && LargeModal}
      <Button primary onClick={() => setShowModal(!showModal)}>Show Large Modal</Button>
    </>
  )
}
<ModalExample />
```

### Without a Title or Footer

Modal's without a `title` or `footer` can be used to display smaller bits of information that require the users attention.

```js
import { useState } from 'react';
import Button from '../Button/Button';

function ModalExample() {
  const [showModalNoTitle, setShowModalNoTitle] = useState(false);

  const DemoModalNoTitle = (
    <Modal
      onRequestClose={() => setShowModalNoTitle(!showModalNoTitle)}
      showing={showModalNoTitle}
    >
      I don't have a title
    </Modal>
  )

  return (
    <>
      {showModalNoTitle && DemoModalNoTitle}
      <Button primary onClick={() => setShowModalNoTitle(!showModalNoTitle)}>Show Modal Without Title</Button>
    </>
  );
}
<ModalExample />
```

### Full Screen on Mobile

For cases where the user's full attention should be on the modal's content, the modal can take up the full screen on mobile viewports.

```js
import { useState } from 'react';
import Button from '../Button/Button';

function ModalExample() {
  const [showModalMobileFullScreen, setShowModalMobileFullScreen] = useState(false);

  const MobileFullScreenModal = (
    <Modal
      mobileFullScreen
      title="Full Screen Mobile"
      onRequestClose={() => setShowModalMobileFullScreen(!showModalMobileFullScreen)}
      showing={showModalMobileFullScreen}
      footer={[
        <Button primary onClick={() => setShowModalMobileFullScreen(!showModalMobileFullScreen)}>Save</Button>,
        <Button onClick={() => setShowModalMobileFullScreen(!showModalMobileFullScreen)}>Cancel</Button>
      ]}
    >
      Resize the browser to a width less than 480px wide and i'll take up the full viewport.
    </Modal>
  )

  return (
    <>
      {showModalMobileFullScreen && MobileFullScreenModal}
      <Button primary onClick={() => setShowModalMobileFullScreen(!showModalMobileFullScreen)}>Show Modal Mobile Full Screen</Button>
    </>
  );
}

<ModalExample />
```

### Header Icon

To add visual emphasis, include the name of an icon to be placed in the header.

```js
import { useState } from 'react';
import Button from '../Button/Button';

function ModalExample() {
  const [showModalMobileFullScreen, setShowModalMobileFullScreen] = useState(false);

  const MobileFullScreenModal = (
    <Modal
      icon="ticket"
      title="Header Icon"
      onRequestClose={() => setShowModalMobileFullScreen(!showModalMobileFullScreen)}
      showing={showModalMobileFullScreen}
    >
      My title has an icon in the header.
    </Modal>
  )

  return (
    <>
      {showModalMobileFullScreen && MobileFullScreenModal}
      <Button primary onClick={() => setShowModalMobileFullScreen(!showModalMobileFullScreen)}>Show Modal with Header Icon</Button>
    </>
  );
}

<ModalExample />
```

## Best Practices

Modals should

* Be used only when an action by the user is required. Otherwise use something inline.
* Have content that is succinct and to the point.
* Trap focus, which is automatically handled.
* Escape key closes the modal and moves focus back to whatever triggered the modal
