```js
<Metric
  title="Total Subscribers"
  value={254678}
  helpText="Total number of subscribers in the system"
  className="mb-5"
/>
<Metric value={3.14159265359} precision={10} title={<>&pi;</>} />
```

### Color Rules

Control the color of the value by setting the `colorRules` prop to an object, where the object key is the range values, and the value for the key is one of the following: ["neutral", "warn", "danger", "success"].

- The first value of the range (min) is inclusive
- The second value of the range (max) is exclusive
- The value is evaluated starting with first key
- The value of key must be one of the following: ["neutral", "warn", "danger", "success"]

```js
import Block from '../Block/Block';

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

<>
  <Block width="100" itemSpacing="5" className="mb-5">
    <Metric
      value={70}
      suffix="%"
      title="cpu a usage"
      colorRules={cpuHealth}
    />
    <Metric
      value={71}
      suffix="%"
      title="cpu b usage"
      colorRules={cpuHealth}
    />
    <Metric
      value={98}
      suffix="%"
      title="cpu c usage"
      colorRules={cpuHealth}
    />
  </Block>
  <Block width="100" itemSpacing="5">
    <Metric
      value={0.9998}
      title="channel 1 uptime"
      colorRules={uptime}
      formatter={formatter.percentage}
      precision={2}
    />
    <Metric
      value={0.9999}
      title="channel 2 uptime"
      colorRules={uptime}
      formatter={formatter.percentage}
      precision={2}
    />
  </Block>
</>;
```

You may also define your own custom function for determining the color of the value.

```js
import Block from '../Block/Block';

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
      break;
  }
};

<Block width="100" itemSpacing="5">
  <Metric
    value="on"
    title="channel status"
    colorRules={channelStatus}
  />
  <Metric
    value="off"
    title="channel status"
    colorRules={channelStatus}
  />
  <Metric
    value="reconciling"
    title="channel status"
    colorRules={channelStatus}
  />
</Block>;
```

### Number

Commas are automatically inserted as thousands separaters when `value` is a number.

```js
import Block from '../Block/Block';

<Block width="100" itemSpacing={[5, 5, 6, 7]} wrap>
  <Metric value={3378} className="mb-5" title="MTD New Subscribers" />
  <Metric value={12} className="mb-5" title="MTD Subscriber Churn" />
  <Metric value={34} className="mb-5" title="New Yesterday" />
  <Metric value={12} className="mb-5" title="New Today" />
</Block>;
```

### Percentage

Use our formatter utility function based on javascript [Intl.numberformat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) to display a percentage.

```js
import formatter from '../../Utils/Formatters';

<Metric
  title="Uptime"
  formatter={formatter.percentage}
  value={0.9943146}
  precision={3}
/>;
```

### Currency

Use our formatter utility function based on [Intl.numberformat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) to display currency by specifying a [currency code](https://www.currency-iso.org/en/home/tables/table-a1.html), such as `"USD"` for the US dollar, `"EUR"` for the euro, or `"CNY"` for the Chinese RMB .

```js
import Block from '../Block/Block';
import formatter from '../../Utils/Formatters';

<Block itemSpacing="5">
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
</Block>;
```

### Time Duration

Pass a string representing the duration of time.

```js
<Metric value="15:34" title="Minutes Down" />
```

### Prefix and Suffix

The prefix and suffix props may be used to display things like Icons, symbols, or deltas.

```js
import Block from '../Block/Block';
import Icon from '../Icon/Icon';

<Block itemSpacing="5">
  <Metric
    title="Monthly Subscribers"
    value={4512}
    suffix="(+23)"
    suffixClassName="fw-700 green"
  />
  <Metric
    title="Errors"
    value={14}
    prefix={<Icon name="warning-triangle" size="20" />}
    prefixClassName="red self-center"
    suffix="(+3)"
    suffixClassName="fw-700 red"
  />
</Block>;
```

### Node values

If `value` is set as not a string or number, it will be displayed without any formatting applied.

```js
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
```
