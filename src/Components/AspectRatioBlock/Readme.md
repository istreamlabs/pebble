## Examples

### Wrapping an image

The default aspect ratio is 4/3. Resize the browser viewport to see how the aspect ratio is maintained.

```js
<AspectRatioBlock background="blue">
  <img
    src="https://m.media-amazon.com/images/M/MV5BM2IxNjBiODUtNTE3MS00NzU0LTgyZTAtYmM1MzQzMTcxYjI5XkEyXkFqcGdeQXVyNTA2MDAzNjA@._V1_SY1000_CR0,0,1333,1000_AL_.jpg"
    alt="The Lego Batman Movie"
    width="100%"
  />
</AspectRatioBlock>
```

### Handling different media aspect ratios

When embedding media with an aspect ratio that is different than `ratio`, use the `overflow` property (from [Block](/#/Components/Block)) to set the desired behavior.

```js
<AspectRatioBlock overflow="auto" ratio={16 / 9}>
  <img
    src="https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    alt="The Lego Batman Movie"
    width="100%"
  />
</AspectRatioBlock>
```

With hidden overflow

```js
<AspectRatioBlock overflow="hidden" ratio={16 / 9}>
  <img
    src="https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    alt="The Lego Batman Movie"
    width="100%"
  />
</AspectRatioBlock>
```

### Embed Video

```js
<AspectRatioBlock ratio={16 / 9} background="blue">
  <iframe
    title="demoVideoEmbed"
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/rGQUKzSDhrg"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</AspectRatioBlock>
```

### Embed Map

```js
<AspectRatioBlock ratio={3 / 4} background="blue">
  <iframe
    title="demoMap"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.4951260930097!2d-122.3347066476433!3d47.616505979083016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900d53afa0675f%3A0x6c9f8e26f08a6438!2siStreamPlanet!5e0!3m2!1sen!2sus!4v1587487328910!5m2!1sen!2sus"
    width="100%"
    height="100%"
    frameBorder="0"
    allowFullScreen=""
    aria-hidden="false"
  />
</AspectRatioBlock>
```
