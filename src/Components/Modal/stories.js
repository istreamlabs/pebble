import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Modal from './Modal';
import Button from '../Button/Button';

function ModalExample(props) {
  const [showModal, setShowModal] = useState(true);

  const {
    children, noTitle, noFooter, type, large
  } = props;

  return (
    <>
      {showModal && (
      <Modal
        large={large}
        type={type}
        title={!noTitle ? `${type} modal` : undefined}
        icon="ticket"
        onRequestClose={() => setShowModal(!showModal)}
        showing={showModal}
        footer={!noFooter ? [
          <Button primary onClick={() => setShowModal(!showModal)}>Save</Button>,
          <Button onClick={() => setShowModal(!showModal)}>Cancel</Button>
        ] : undefined}
      >
        {children || 'Modal content'}
      </Modal>
      )}
    </>
  );
}

ModalExample.propTypes = {
  children: PropTypes.node,
  large: PropTypes.bool,
  noTitle: PropTypes.bool,
  noFooter: PropTypes.bool,
  type: PropTypes.oneOf(['default', 'info', 'warn', 'danger', 'success', 'special']),
};

// delay the capture of stories because it takes time to animate them in
const CHROMATIC_DELAY = 500;

storiesOf('Modal', module)
  .add('default', () => (
    <ModalExample type="default" />
  ), {
    chromatic: { delay: CHROMATIC_DELAY },
  })
  .add('danger', () => (
    <ModalExample type="danger" />
  ), {
    chromatic: { delay: CHROMATIC_DELAY },
  })
  .add('success', () => (
    <ModalExample type="success" />
  ), {
    chromatic: { delay: CHROMATIC_DELAY },
  })
  .add('warn', () => (
    <ModalExample type="warn" />
  ), {
    chromatic: { delay: CHROMATIC_DELAY },
  })
  .add('info', () => (
    <ModalExample type="info" />
  ), {
    chromatic: { delay: CHROMATIC_DELAY },
  })
  .add('special', () => (
    <ModalExample type="special" />
  ), {
    chromatic: { delay: CHROMATIC_DELAY },
  })
  .add('without title', () => (
    <ModalExample noTitle />
  ), {
    chromatic: { delay: CHROMATIC_DELAY },
  })
  .add('without title and footer', () => (
    <ModalExample noTitle noFooter />
  ), {
    chromatic: { delay: CHROMATIC_DELAY },
  })
  .add('scrolling content', () => (
    <ModalExample type="default">
      <p>iStreamPlanet creates leading-edge technology to solve the core challenges of OTT media. We deliver the end-to-end video workflow from signal acquisition to the streaming app experience — all focused on the fan.</p>
      <p>iStreamPlanet has earned the trust of leading sports and entertainment brands through innovation, dedication to high quality video, and exceptional customer service.</p>
      <p>iStreamPlanet creates leading-edge technology to solve the core challenges of OTT media. We deliver the end-to-end video workflow from signal acquisition to the streaming app experience — all focused on the fan.</p>
      <p>iStreamPlanet has earned the trust of leading sports and entertainment brands through innovation, dedication to high quality video, and exceptional customer service.</p>
      <p>iStreamPlanet creates leading-edge technology to solve the core challenges of OTT media. We deliver the end-to-end video workflow from signal acquisition to the streaming app experience — all focused on the fan.</p>
      <p>iStreamPlanet has earned the trust of leading sports and entertainment brands through innovation, dedication to high quality video, and exceptional customer service.</p>
    </ModalExample>
  ))
  .add('large', () => (
    <ModalExample large />
  ), {
    chromatic: { delay: CHROMATIC_DELAY },
  });
