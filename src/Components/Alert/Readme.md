## Examples

### Types

Choose the appropriate `type` for your use case.

```js
<Alert className="mb-4" title="Default Alert">
  <p>Something you should know about.</p>
</Alert>
<Alert className="mb-4" type="info" title="Info Alert">
  <p>Regions have been updated.</p>
</Alert>
<Alert className="mb-4" type="warn"title="Warn Alert">
  <p>This change might impact another asset.</p>
</Alert>
<Alert className="mb-4" type="danger"title="Danger Alert">
  <p>This change may have result in unintended consequences.</p>
</Alert>
<Alert type="success"title="Success Alert">
  <p>Changes have been successfully saved.</p>
</Alert>
```

### Dismissible

Alerts should be dismissible unless they contain critical information or a required step

```js
<Alert title="Dismissible Alert" onDismiss={() => {}}>
  <p>
    Pass a function to onDismiss and a close button will be rendered.
  </p>
</Alert>
```

### Custom Icon

For most cases, use the default icon for success, info, warning, critical and default statuses. However, you may pass the name of an `icon` if the situation is appropriate.

```js
<Alert title="Custom Icon" icon="ticket">
  <p>
    Generally, the default icons for the default, info, warn, danger
    and success status should be used.
  </p>
</Alert>
```

## Best Practices

Alerts should:

- Be used for information that requires the user's immediate attention.
- Be used thoughtfully and sparingly.
- Be placed at the top of page or section they apply to.
- Focus on a single subject, piece of information, or required action.
- Be dismissible unless they contain critical information or a required step.
- Use the default icon for `success`, `info`, `warn` and `danger` types.
- Be concise&mdash;users shouldn't need to spend a lot of time figuring out what to do
