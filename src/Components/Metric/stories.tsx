// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@storybook/react' or its corre... Remove this comment to see the full error message
import { storiesOf } from '@storybook/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Icon from '../Icon/Icon';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Metric' was resolved to '/Users/esjaasta... Remove this comment to see the full error message
import Metric from './Metric';
import formatter from '../../Utils/Formatters';

const cpuHealth = {
  '0-71': 'neutral',
  '71-81': 'warn',
  '81-100': 'danger',
};

const uptime = {
  '0-.9999': 'danger',
  '.9999-1': 'success',
};

const channelStatus = value => {
  switch (value) {
    case 'on':
      return 'success';
    case 'off':
      return 'neutral';
    case 'reconciling':
      return 'warn';
    default:
      return 'neutral';
  }
};

// @ts-expect-error ts-migrate(2580) FIXME: Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
storiesOf('Metric', module)
  .addParameters({
    chromatic: { viewports: [479, 959, 1439] },
  })
  .add('all', () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Block direction="column" itemSpacing="5">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value={3378}
        className="mb-5"
        title="MTD New Subscribers"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value={12}
        className="mb-5"
        title="MTD Subscriber Churn"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric value={34} className="mb-5" title="New Yesterday" />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric value={12} className="mb-5" title="New Today" />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        title="Uptime"
        formatter={formatter.percentage}
        value={0.9943146}
        precision={3}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value={1455.34}
        prefixClassName="self-center"
        title="Sep 2019 Revenue (US Dollar)"
        formatter={formatter.currency('USD')}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value={1455.34}
        prefixClassName="self-center"
        title="Sep 2019 Revenue (Japanese Yen)"
        formatter={formatter.currency('JPY')}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value={1455.34}
        prefixClassName="self-center"
        title="Sep 2019 Revenue (Brazilian Real)"
        formatter={formatter.currency('BRL')}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric value="15:34" title="Minutes Down" />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        title="Monthly Subscribers"
        value={4512}
        suffix="(+23)"
        suffixClassName="fw-700 green"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        title="Errors"
        value={14}
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        prefix={<Icon name="warning-triangle" size="20" />}
        prefixClassName="red self-center"
        suffix="(+3)"
        suffixClassName="fw-700 red"
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        title="Top 5 of All Time"
        value={
          <ol>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <li>Michael Jordan</li>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <li>Lebron James</li>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <li>Kareem Abdul-Jabar</li>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <li>Bill Russell</li>
            {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
            <li>Magic Johnson</li>
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          </ol>
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        }
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value={70}
        suffix="%"
        title="cpu a usage"
        colorRules={cpuHealth}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value={71}
        suffix="%"
        title="cpu b usage"
        colorRules={cpuHealth}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value={98}
        suffix="%"
        title="cpu c usage"
        colorRules={cpuHealth}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value={0.9998}
        title="channel 1 uptime"
        colorRules={uptime}
        formatter={formatter.percentage}
        precision={2}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value={0.9999}
        title="channel 2 uptime"
        colorRules={uptime}
        formatter={formatter.percentage}
        precision={2}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value="on"
        title="channel status"
        colorRules={channelStatus}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value="off"
        title="channel status"
        colorRules={channelStatus}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric
        value="reconciling"
        title="channel status"
        colorRules={channelStatus}
      />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric size="large" value={14332} title="large" />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric size="medium" value={3414} title="medium" />
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Metric size="small" value={1312} title="small" />
    </Block>
  ));
