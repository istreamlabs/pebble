// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { useState } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Modal' was resolved to '/Users/esjaastad... Remove this comment to see the full error message
import '../../../stories/styles.css';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Modal from './Modal';
import Button from '../Button/Button';

function ModalExample(props) {
  const [showModal, setShowModal] = useState(true);

  const { children, noTitle, noFooter, type, large } = props;

  return (
    <>
      {showModal && (
        <Modal
          large={large}
          type={type}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          title={!noTitle ? `${type} modal` : undefined}
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          icon="ticket"
          onRequestClose={() => setShowModal(!showModal)}
          showing={showModal}
          footer={
            !noFooter
              ? [
                  <Button
                    primary
                    onClick={() => setShowModal(!showModal)}
                  >
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    Save
                  </Button>,
                  <Button onClick={() => setShowModal(!showModal)}>
                    Cancel
                  </Button>,
                ]
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              : undefined
          }
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
  // @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
  type: PropTypes.oneOf(['default', 'warn', 'danger']),
// @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
};

storiesOf('Modal', module)
  .addDecorator(storyFn => (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div style={{ width: '800px', height: '800px' }}>{storyFn()}</div>
  ))
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .addParameters({
    chromatic: { delay: 2000 },
  })
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .add('default', () => <ModalExample type="default" />)
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .add('danger', () => <ModalExample type="danger" />)
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .add('warn', () => <ModalExample type="warn" />)
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  .add('without title', () => <ModalExample noTitle />)
  .add('without title and footer', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ModalExample noTitle noFooter />
  ))
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  .add('scrolling content', () => (
    <ModalExample type="default">
      <p>
        iStreamPlanet creates leading-edge technology to solve the
        core challenges of OTT media. We deliver the end-to-end video
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        workflow from signal acquisition to the streaming app
        experience — all focused on the fan.
      </p>
      <p>
        iStreamPlanet has earned the trust of leading sports and
        entertainment brands through innovation, dedication to high
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        quality video, and exceptional customer service.
      </p>
      <p>
        iStreamPlanet creates leading-edge technology to solve the
        core challenges of OTT media. We deliver the end-to-end video
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        workflow from signal acquisition to the streaming app
        experience — all focused on the fan.
      </p>
      <p>
        iStreamPlanet has earned the trust of leading sports and
        entertainment brands through innovation, dedication to high
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        quality video, and exceptional customer service.
      </p>
      <p>
        iStreamPlanet creates leading-edge technology to solve the
        core challenges of OTT media. We deliver the end-to-end video
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        workflow from signal acquisition to the streaming app
        experience — all focused on the fan.
      </p>
      <p>
        iStreamPlanet has earned the trust of leading sports and
        entertainment brands through innovation, dedication to high
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        quality video, and exceptional customer service.
      </p>
    </ModalExample>
  ));
