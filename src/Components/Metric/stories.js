import React from 'react';
import { storiesOf } from '@storybook/react';

import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Metric from './Metric';
import formatter from '../../Utils/Formatters';

storiesOf('Metric', module)
  .addParameters({
    chromatic: { viewports: [480, 960, 1440] },
  })
  .add('all', () => (
    <Block direction="column" itemSpacing="5">
      <Metric
        value={3378}
        className="mb-5"
        title="MTD New Subscribers"
      />
      <Metric
        value={12}
        className="mb-5"
        title="MTD Subscriber Churn"
      />
      <Metric value={34} className="mb-5" title="New Yesterday" />
      <Metric value={12} className="mb-5" title="New Today" />
      <Metric
        title="Uptime"
        formatter={formatter.percentage}
        value={0.9943146}
        precision={3}
      />
      <Metric
        value={1455.34}
        prefixClassName="self-center"
        title="Sep 2019 Revenue (US Dollar)"
        formatter={formatter.currency('USD')}
      />
      <Metric
        value={1455.34}
        prefixClassName="self-center"
        title="Sep 2019 Revenue (Japanese Yen)"
        formatter={formatter.currency('JPY')}
      />
      <Metric
        value={1455.34}
        prefixClassName="self-center"
        title="Sep 2019 Revenue (Brazilian Real)"
        formatter={formatter.currency('BRL')}
      />
      <Metric value="15:34" title="Minutes Down" />
      <Metric
        title="Monthly Subscribers"
        value={4512}
        suffix="(+23)"
        suffixClassName="fw-700 green"
      />
      <Metric
        title="Errors"
        value={14}
        prefix={<Icon name="warning-triangle" size="32" />}
        prefixClassName="red"
        suffix="(+3)"
        suffixClassName="fw-700 red"
      />
      <Metric
        title="Top 5 of All Time"
        value={
          <ol>
            <li>Michael Jordan</li>
            <li>Lebron James</li>
            <li>Kareem Abdul-Jabar</li>
            <li>Bill Russell</li>
            <li>Magic Johnson</li>
          </ol>
        }
      />
    </Block>
  ));
