
Headings are labels for sections or areas that make up an interface. They can label an entire page, or sections of related information. Our `Heading` component allows you to select an appropriate semantic element (h1-h6) and independently set its size so that it is appropriate for the surrounding content. 

If you do not pass an explicit size, the Heading will pick the size based on the element.

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

Allow headings to scale for mobile, tablet and desktop viewports. Resize your browser width to view the different scales.

```js
<Heading responsive element="1" size="1">Heading 1</Heading>
<Heading responsive element="2" size="2">Heading 2</Heading>
<Heading responsive element="3" size="3">Heading 3</Heading>
<Heading responsive element="4" size="4">Heading 4</Heading>
<Heading responsive element="5" size="5">Heading 5</Heading>
<Heading responsive element="6" size="6">Heading 6</Heading>
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