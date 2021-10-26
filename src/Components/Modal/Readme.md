## Examples

### Types

Generally, modals should be used when user action is immediately required. Three appearance types are available to address scenarios that commonly require immediate action.

To give visual feedback for things like a successful transaction or asset edit, consider Toasts or Alerts instead.

```js
import { useState } from 'react';
import Button from '../Button/Button';
import Block from '../Block/Block';

function ModalExample() {
  const [showModal, setShowModal] = useState(false);
  const [showDangerModal, setShowDangerModal] = useState(false);
  const [showWarnModal, setShowWarnModal] = useState(false);

  const Default = (
    <Modal
      title="Default Modal"
      onRequestClose={() => setShowModal(!showModal)}
      showing={showModal}
      footer={[
        <Button primary onClick={() => setShowModal(!showModal)}>
          Save
        </Button>,
        <Button onClick={() => setShowModal(!showModal)}>
          Cancel
        </Button>,
      ]}
    >
      I am a modal with the default appearance.
    </Modal>
  );

  const DangerModal = (
    <Modal
      type="danger"
      icon="ban"
      title="Danger Modal"
      onRequestClose={() => setShowDangerModal(!showDangerModal)}
      showing={showDangerModal}
      footer={[
        <Button
          primary
          danger
          onClick={() => setShowDangerModal(!showDangerModal)}
        >
          Delete
        </Button>,
        <Button onClick={() => setShowDangerModal(!showDangerModal)}>
          Cancel
        </Button>,
      ]}
    >
      Be sure to include a way to escape or cancel a dangerous action
      when using a danger modal.
    </Modal>
  );

  const WarnModal = (
    <Modal
      type="warn"
      icon="warning-circle-outline"
      title="Warn Modal"
      onRequestClose={() => setShowWarnModal(!showWarnModal)}
      showing={showWarnModal}
      footer={
        <Button onClick={() => setShowWarnModal(!showWarnModal)}>
          Close
        </Button>
      }
    >
      This is a warning modal.
    </Modal>
  );

  return (
    <>
      {showModal && Default}
      {showDangerModal && DangerModal}
      {showWarnModal && WarnModal}
      <Block wrap itemSpacing="2">
        <Button onClick={() => setShowModal(!showModal)}>
          Default
        </Button>
        <Button onClick={() => setShowDangerModal(!showDangerModal)}>
          Danger
        </Button>
        <Button onClick={() => setShowWarnModal(!showWarnModal)}>
          Warn
        </Button>
      </Block>
    </>
  );
}

<ModalExample />;
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
        <Button primary onClick={() => setShowModal(!showModal)}>
          Save
        </Button>,
        <Button onClick={() => setShowModal(!showModal)}>
          Cancel
        </Button>,
      ]}
    >
      Use large modals for content such as tables or lists. The max
      width and max height of large modals is increased.
    </Modal>
  );

  return (
    <>
      {showModal && LargeModal}
      <Button primary onClick={() => setShowModal(!showModal)}>
        Show Large Modal
      </Button>
    </>
  );
}
<ModalExample />;
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
  );

  return (
    <>
      {showModalNoTitle && DemoModalNoTitle}
      <Button
        primary
        onClick={() => setShowModalNoTitle(!showModalNoTitle)}
      >
        Show Modal Without Title
      </Button>
    </>
  );
}
<ModalExample />;
```

### Full Screen on Mobile

For cases where the user's full attention should be on the modal's content, the modal can take up the full screen on mobile viewports.

```js
import { useState } from 'react';
import Button from '../Button/Button';

function ModalExample() {
  const [
    showModalMobileFullScreen,
    setShowModalMobileFullScreen,
  ] = useState(false);

  const MobileFullScreenModal = (
    <Modal
      mobileFullScreen
      title="Full Screen Mobile"
      onRequestClose={() =>
        setShowModalMobileFullScreen(!showModalMobileFullScreen)
      }
      showing={showModalMobileFullScreen}
      footer={[
        <Button
          primary
          onClick={() =>
            setShowModalMobileFullScreen(!showModalMobileFullScreen)
          }
        >
          Save
        </Button>,
        <Button
          onClick={() =>
            setShowModalMobileFullScreen(!showModalMobileFullScreen)
          }
        >
          Cancel
        </Button>,
      ]}
    >
      Resize the browser to a width less than 480px wide and i'll take
      up the full viewport.
    </Modal>
  );

  return (
    <>
      {showModalMobileFullScreen && MobileFullScreenModal}
      <Button
        primary
        onClick={() =>
          setShowModalMobileFullScreen(!showModalMobileFullScreen)
        }
      >
        Show Modal Mobile Full Screen
      </Button>
    </>
  );
}

<ModalExample />;
```

### Header Icon

To add visual emphasis, include the name of an icon to be placed in the header.

```js
import { useState } from 'react';
import Button from '../Button/Button';

function ModalExample() {
  const [
    showModalMobileFullScreen,
    setShowModalMobileFullScreen,
  ] = useState(false);

  const MobileFullScreenModal = (
    <Modal
      icon="ticket"
      title="Header Icon"
      onRequestClose={() =>
        setShowModalMobileFullScreen(!showModalMobileFullScreen)
      }
      showing={showModalMobileFullScreen}
    >
      My title has an icon in the header.
    </Modal>
  );

  return (
    <>
      {showModalMobileFullScreen && MobileFullScreenModal}
      <Button
        primary
        onClick={() =>
          setShowModalMobileFullScreen(!showModalMobileFullScreen)
        }
      >
        Show Modal with Header Icon
      </Button>
    </>
  );
}

<ModalExample />;
```

### Not Dismissable/Blocking Modal

To display a blocking modal, will not render the closing button when passed the notDismissable flag. Use the ESC key to dismiss this modal but ordinarily to make this a blocking modal onRequestClose should not be supplied.

```js
import { useState } from 'react';
import Button from '../Button/Button';

function ModalExample() {
  const [showModal, setShowModal] = useState(false);

  const NonDismissableModal = (
    <Modal
      title="Not Dismissable"
      onRequestClose={() => setShowModal(!showModal)}
      showing={showModal}
      notDismissable
    >
      Dismiss me with ESC
    </Modal>
  );

  return (
    <>
      {showModal && NonDismissableModal }
      <Button
        primary
        onClick={() => setShowModal(!showModal)}
      >
        Show Not Dismissable Modal
      </Button>
    </>
  )
}

<ModalExample />;
```

### Overridden Content Padding

By default, modal has a Block container with a padding of [4, 5].
When you need to show a lot content, such as a table or grid you may wish to provide custom padding around that content.
Modal has a contentPadding property that is applied to the Modals Block content container 'padding'

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
      contentPadding={0, 5}
      footer={[
        <Button primary onClick={() => setShowModal(!showModal)}>
          Save
        </Button>,
        <Button onClick={() => setShowModal(!showModal)}>
          Cancel
        </Button>,
      ]}
    >
      Use large modals for content such as tables or lists. The max
      width and max height of large modals is increased.
    </Modal>
  );

  return (
    <>
      {showModal && LargeModal}
      <Button primary onClick={() => setShowModal(!showModal)}>
        Show Large Modal
      </Button>
    </>
  );
}
<ModalExample />;
```

## Best Practices

Modals should

- Be used only when an action by the user is required. Otherwise use something inline.
- Have content that is succinct and to the point.
- Trap focus when the modal is open, and return focus back to the element that triggered the modal.
- Escape key closes the modal and moves focus back to whatever triggered the modal
