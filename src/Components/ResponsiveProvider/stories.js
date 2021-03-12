import React from 'react';
import { ResponsiveProvider } from '../../Hooks/UseWindowSize';
import UseMobileLayout from '../../Hooks/UseMobileLayout';
import { storiesOf } from '@storybook/react';

function SubComp() {
  const isMobile = UseMobileLayout();
  return (
    <div>{isMobile ? 'Mobile Viewport' : 'Bigger than Mobile'}</div>
  );
}

storiesOf('ResponsiveProvider', module)
  .add('foo/all', () => {
    return (
      <ResponsiveProvider>
        <SubComp />
      </ResponsiveProvider>
    );
  })
  .add('Lots with viewportProvider', () => {
    const children = [];
    for (let index = 0; index < 1000; index++) {
      children.push(<SubComp key={index} />);
    }
    return <ResponsiveProvider>{children}</ResponsiveProvider>;
  })
  .add('Lots without viewportProvider (slow)', () => {
    const children = [];
    for (let index = 0; index < 1000; index++) {
      children.push(<SubComp key={index} />);
    }
    return <>{children}</>;
  });
