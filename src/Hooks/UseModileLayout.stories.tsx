// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './UseWindowSize' was resolved to '/Users/e... Remove this comment to see the full error message
import { ResponsiveProvider } from './UseWindowSize';
import UseMobileLayout from './UseMobileLayout';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

function SubComp() {
  const isMobile = UseMobileLayout();
  return (
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    <div>{isMobile ? 'Mobile Viewport' : 'Bigger than Mobile'}</div>
  );
}

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('UseMobileLayout', module)
  .add('all', () => {
    return (
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ResponsiveProvider>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <SubComp />
      </ResponsiveProvider>
    );
  })
  .add('Lots with viewportProvider', () => {
    const children = [];
    for (let index = 0; index < 1000; index++) {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      children.push(<SubComp key={index} />);
    }
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <ResponsiveProvider>{children}</ResponsiveProvider>;
  })
  .add('Lots without viewportProvider (slow)', () => {
    const children = [];
    for (let index = 0; index < 1000; index++) {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      children.push(<SubComp key={index} />);
    }
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return <>{children}</>;
  });
