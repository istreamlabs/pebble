## Examples

### Types

Choose the appropriate `type` for your use case.

```js
<Badge>default</Badge>
<Badge type="info">info</Badge>
<Badge type="warn">warn</Badge>
<Badge type="danger">danger</Badge>
<Badge type="success">success</Badge>
<Badge type="special">special</Badge>
<Badge type="live" />
```

### Small Size

Medium is the default size.

```js
<Badge size="large">large</Badge>
<Badge>medium</Badge>
<Badge size="small">small</Badge>
```

### Live Badge

Because live is a special status, it renders a red light icon and automatically replaces the Badge label with the word &ldquo;LIVE&rdquo;. 

```js
<Badge size="large" type="live">This text is replaced with LIVE</Badge>
```

## Best Practices

Badges should:

* Be used to so that users can scan pages to quickly see status 
* Be clearly labeled, most often with one word
* Be positioned so that it is clear what object it refers to