import React from 'react';
import { render } from '@testing-library/react';

import AspectRatioBlock from './AspectRatioBlock';

describe('AspectRatioBlock', () => {
  it('renders iframe without crashing', () => {
    const { container } = render(
      <AspectRatioBlock background="blue">
        <iframe title="test" />
      </AspectRatioBlock>,
    );
    expect(container.getElementsByTagName('iframe')[0]).toBeDefined();
    expect(container.getElementsByTagName('iframe')).toHaveLength(1);
  });
});
