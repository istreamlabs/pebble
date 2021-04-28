## Examples

```js
<div className="styleguide__buttons">
  <Confirm onConfirm={() => {}} icon="">Default</Confirm>
  <Confirm primary onConfirm={() => {}}>Primary</Confirm>
  <Confirm danger onConfirm={() => {}}>Danger</Confirm>
  <Confirm primary danger onConfirm={() => {}}>Danger + Primary</Confirm>
</div>
```

### Icons

If both `icon` and `iconAfterText` are provided, `icon` will be used for the modal.

```js
<div className="styleguide__buttons">
  <Confirm onConfirm={() => {}} icon="add">Before</Confirm>
  <Confirm onConfirm={() => {}} iconAfterText="launch">After</Confirm>
  <Confirm onConfirm={() => {}} icon="remove" iconAfterText="delete" >Both</Confirm>
</div>
```

### Extra Confirmation

You can require a user to type in a value before they are allowed to confirm. This should only be used when extreme caution should be taken. For example, when performing an unrecoverable act such as permanently deleting a resource.

```js
<div className="styleguide__buttons">
  <Confirm confirmValue="ID-123456" primary danger onConfirm={() => {}} icon="delete" >Remove</Confirm>
</div>
```

### Full Customizations

```js
<div className="styleguide__buttons">
  <Confirm
    confirmValue="ID-123456"
    title="Permanently Remove ID-123456"
    confirmButtonContent="Permanently Remove"
    cancelButtonContent="Mistakes Were Made"
    confirmationContent={(
      <>
        <p>Are you really sure that you want to permanently delete resource ID-123456? Side effects include</p>
        <ul>
          <li>Removal from all collections.</li>
          <li>Removal from all watch lists.</li>
          <li>All associated resources will also be removed.</li>
        </ul>
      </>
    )}
    primary
    danger
    onConfirm={() => {}}
    icon="delete"
  >
    Remove Permanently
  </Confirm>
</div>
```
