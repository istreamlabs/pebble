## Examples
```js
<Link href="http://istreamplanet.com">istreamplanet.com</Link>
```

### External Links

External links automatically open in a new window or tab.

```js
<Link href="http://istreamplanet.com" external>istreamplanet.com</Link>
```

### Wrap Content

Wrap block elements with a `<Link>` to make all contents a link.

```js
<Link href="http://istreamplanet.com" block>
  This content is clickable.
  <div>I'm some block content</div>
  <div>I'm some block content</div>
</Link>
```