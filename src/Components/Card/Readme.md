## Examples

### Sectioned Card

Sectioned cards automatically add a bottom border and the correct amount of padding around each child node of the card.

```js
<Card title="Basic Card" sectioned>
  <div>First Child</div>
  <div>Second Child</div>
</Card>
```

### Card without padding

Omit the `sectioned` prop to allow full styling control over a Card's content.

```js
<Card>
  <div>First Child</div>
  <div>Second Child</div>
</Card>
```

### Card with Multiple Sections

```js
<Card title="Packages" sectioned>
  <div>Platinum Package</div>
  <div>Gold Package</div>
  <div>Silver Package</div>
  <div>Bronze Package</div>
</Card>
```

### Card with Header Actions

Pass a `<Button>` or `<ButtonGroup>` as a `headerActions`. Actions in the header should impact the contents of the card.

```js
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

<Card
  title="Packages"
  sectioned
  headerActions={
    <ButtonGroup>
      <Button icon="add-circle" primary>
        add
      </Button>
      <Button>select</Button>
    </ButtonGroup>
  }
>
  <p>Platinum Package</p>
  <p>Gold Package</p>
  <p>Silver Package</p>
  <p>Bronze Package</p>
</Card>;
```

### Muted Card

Use a muted card to display information with less visual emphasis

```js
<Card title="Muted Card" muted sectioned>
  <p>
    Use a subdued card to display related content with less visual
    emphasis.
  </p>
</Card>
```

## Best Practices

Cards should:

- Have a title to make the its contents easily scannable.
- Should contain contents of the same type or have a relationship
- Limit the number of header actions to two at most
- Have only one primary call to action
