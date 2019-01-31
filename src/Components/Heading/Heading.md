
Headings are labels for sections or areas that make up an interface. They can label an entire page, or sections of related content. Our `Heading` component allows you to select an appropriate semantic element (h1-h6) and independently set its size so that it is appropriate for the surrounding content. 

If you do not pass an explicit size, the Heading will pick the size based on the element. By default headings will scale for mobile, tablet and desktop [viewports](.//#/Styles/Media%20Query).

```js
<Heading element="1">Heading 1</Heading>
<Heading element="2">Heading 2</Heading>
<Heading element="3">Heading 3</Heading>
<Heading element="4">Heading 4</Heading>
<Heading element="5">Heading 5</Heading>
<Heading element="6">Heading 6</Heading>
```

### Size

Pass an explicit size to control how big the heading should appear

```js
<Heading element="2" size="1">&lt;H2&gt; in size 1</Heading>
<Heading element="2" size="6">&lt;H2&gt; in size 6</Heading>
```

### Responsive

Responsive font size scaling can be turned off.

```js
<Heading responsive={false} element="1">Heading 1</Heading>
<Heading responsive={false} element="2">Heading 2</Heading>
<Heading responsive={false} element="3">Heading 3</Heading>
<Heading responsive={false} element="4">Heading 4</Heading>
<Heading responsive={false} element="5">Heading 5</Heading>
<Heading responsive={false} element="6">Heading 6</Heading>
```

### Truncate

Add the `truncate` prop to restrict text to a single line and truncate with an ellipsis if it&apos;s too long.

```js
<Heading element="1" size="4" truncate>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset</Heading>

```

### Text Alignment
```js
<Heading element="2" size="4" textAlign="right">Right Align</Heading>
```