```js
<Metric value={254678} className="mb-5" title="Total Subscribers" />
<Metric value={3.14159265359} precision={10} title={<>&pi;</>} />
```

### Number

```js
import Block from '../Block/Block';

<Block width="100" itemSpacing={[5, 5, 6, 7]} wrap>
  <Metric value={378} className="mb-5" title="MTD New Subscribers" />
  <Metric value={12} className="mb-5" title="MTD Subscriber Churn" />

  <Metric value={34} className="mb-5" title="New Yesterday" />
  <Metric value={12} className="mb-5" title="New Today" />
</Block>;
```

### Percentage

```js
import Icon from '../Icon/Icon';
<Metric
  type="success"
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
var percentageFormatter = new Intl.NumberFormat(undefined, {
  style: 'percent',
  minimumFractionDigits: 3,
});

<Metric value={0.9943146} formatter={percentageFormatter} />;
```

### Time

```js
import Icon from '../Icon/Icon';
<Metric
  type="danger"
  value="15:34"
  prefixClassName="self-center"
  title="Minutes Down"
  suffix="(+3:45)"
/>;
```

### Currency

To handle international currencies, define a custom formatter for currency localization based on the javascript [Intl.numberformat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat).

```js
// Create your own number formatter.
var usCurrency = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD',
});

var brCurrency = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'BRL',
});

var jpCurrency = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'JPY',
});

<>
  <Metric
    value={145235.34}
    prefixClassName="self-center"
    title="Sep 2019 Revenue (US Dollar)"
    suffix="(+34%)"
    suffixClassName="green"
    formatter={usCurrency}
    className="mb-5"
  />
  <Metric
    value={145235.34}
    prefixClassName="self-center"
    title="Sep 2019 Revenue (Brazilian Real)"
    suffix="(+34%)"
    suffixClassName="green"
    formatter={brCurrency}
    className="mb-5"
  />
  <Metric
    value={145235.34}
    prefixClassName="self-center"
    title="Sep 2019 Revenue (Japanese Yen)"
    suffix="(+34%)"
    suffixClassName="green"
    formatter={jpCurrency}
  />
</>;
```
