## Examples

### Types

```js
<Alert title="Default Alert">
  <p>Default Alert</p>
</Alert>
<Alert type="info" title="Info Alert">
  <p>Info Alert</p>
</Alert>
<Alert type="warn"title="Warn Alert">
  <p>Warn Alert</p>
</Alert>
<Alert type="danger"title="Danger Alert">
  <p>Danger Alert</p>
</Alert>
<Alert type="success"title="Success Alert">
  <p>Success Alert</p>
</Alert>
```

### Dismissable

```js
<Alert title="Dismissable Alert" onDismiss={() => {}}>
  <p>Pass a function to onDismiss and a close button will be rendered.</p>
</Alert>
```

### Custom Icon

For most cases, use the default icon for success, info, warning, critical and default statuses. However, you may pass the name of an `icon` if the situation is appropriate. 

```js
<Alert title="Custom Icon" icon="ticket">
  <p>Generally, the default icons for the default, info, warn, danger and success status should be used.</p>
</Alert>
```