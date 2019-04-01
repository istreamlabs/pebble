## Examples

```js
import { useState } from 'react';
import Button from '../Button/Button';

function ModalExample() {
  const [showModal, setShowModal] = useState(false);

  const DemoModal = (
    <Modal
      title="Hello Modal"
      onRequestClose={() => setShowModal(!showModal)}
      isOpen={showModal}
    >
      I'm a demo modal
    </Modal>
  )

  return (
    <>
      {showModal && DemoModal}
      <Button onClick={() => setShowModal(!showModal)}>Show Modal</Button>
    </>
  );
}

<ModalExample />
```
