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
```

### Small Size

Medium is the default size.

```js
<Badge size="large">large</Badge>
<Badge>medium</Badge>
<Badge size="small">small</Badge>
```

### Icons

Pass the name of an icon for special badges (e.g. a live stream).

```js
<Badge size="large" type="danger" icon="circle">LIVE</Badge>
<Badge size="large" type="special" icon="add-circle">add circle</Badge>
```

## Best Practices

Badges should:

- Be used to so that users can scan pages to quickly see status
- Be clearly labeled, most often with one word
- Be positioned so that it is clear what object it refers to
