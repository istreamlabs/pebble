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
<Metric type="danger" value="15:34" title="Minutes Down" />
```
