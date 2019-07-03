By default, times are displayed in UTC.

```jsx

<DateTime value="2019-06-26T12:00:00.000Z" />

```
### Label

Add a label to say what the time is for.

```jsx
<DateTime
  label="start time"
  value="2019-06-26T15:30:00.000Z"
/>
```

### Local Time

If it's more appropriate to display the browser's local time instead of UTC, pass `displayLocalDateTime`.

```jsx
<DateTime
  value="2019-06-26T15:30:00.000Z"
  displayLocalDateTime
/>
```

### Show Alternative Time Zone

For cases where it is helpful to display UTC and the user's local browser time zone, pass `showAlternativeTimeZone` to display the browser's local time zone on a second line.

```jsx
<DateTime
  showAlternativeTimeZone
  label="Start Time"
  value="2019-06-26T15:30:00.000Z"
  className="mb-5"
/>
```

If `displayLocalDateTime` is set to true, then the alternative time zone will be in UTC

```jsx
<DateTime
  displayLocalDateTime
  showAlternativeTimeZone
  label="Start Time"
  value="2019-06-26T15:30:00.000Z"
/>
```

### Custom Format

Control how the date and/or time is formatted with `dateFormat`.

```jsx
<DateTime
  dateFormat="ddd, MMMM D, YYYY - h:mm a"
  showAlternativeTimeZone
  value="2019-06-26T15:30:00.000Z"
/>
```
