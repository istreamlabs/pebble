```js
<Metric value={254678} className="mb-5" title="Total Subscribers" />
<Metric value={3.14159265359} precision={10} title={<>&pi;</>} />
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

A percentage can be displayed using a combination of the `value` and `suffix` props, or by defining a custom `formatter` function.

```js
import Icon from '../Icon/Icon';
<Metric
  value={100}
  prefixClassName="self-center"
  suffix="%"
  precision={2}
  className="mb-5"
  title="Uptime"
/>;
```

Using a custom javascript [Intl.numberformat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat).

```js
const customFormatter = value => {
  var percentageFormatter = new Intl.NumberFormat(undefined, {
    style: 'percent',
    minimumFractionDigits: 3,
  });

  return percentageFormatter.format(value);
};

<Metric
  title="Uptime"
  formatter={customFormatter}
  value={0.9943146}
/>;
```

### Time Duration

Pass a string representing the duration of time.

```js
import Icon from '../Icon/Icon';
<Metric
  type="danger"
  value="15:34"
  prefixClassName="self-center"
  title="Minutes Down"
/>;
```

### Currency

To handle international currencies, define a custom formatter for currency localization based on the javascript [Intl.numberformat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat).

```js
import Block from '../Block/Block';

const displayUSD = value => {
  var currencyFormat = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  });

  return currencyFormat.format(value);
};

const displayJPY = value => {
  var currencyFormat = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'JPY',
  });

  return currencyFormat.format(value);
};

<Block itemSpacing="5">
  <Metric
    value={1455.34}
    prefixClassName="self-center"
    title="Sep 2019 Revenue (US Dollar)"
    formatter={displayUSD}
  />
  <Metric
    value={1455.34}
    prefixClassName="self-center"
    title="Sep 2019 Revenue (Japanese Yen)"
    formatter={displayJPY}
  />
</Block>;
```
