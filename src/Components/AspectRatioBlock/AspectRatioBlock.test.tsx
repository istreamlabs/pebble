// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@testing-library/react' or its... Remove this comment to see the full error message
import { render } from '@testing-library/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './AspectRatioBlock' was resolved to '/User... Remove this comment to see the full error message
import AspectRatioBlock from './AspectRatioBlock';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('AspectRatioBlock', () => {
  it('renders iframe without crashing', () => {
    const { container } = render(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <AspectRatioBlock background="blue">
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <iframe title="test" />
      </AspectRatioBlock>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.getElementsByTagName('iframe')[0]).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(container.getElementsByTagName('iframe')).toHaveLength(1);
  });
});
