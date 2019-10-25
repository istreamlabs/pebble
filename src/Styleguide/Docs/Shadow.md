Use shadow tokens to set a box shadow. Based off of Tobias Ahlin's article on <a href="https://tobiasahlin.com/blog/layered-smooth-box-shadows/">smoother and sharper box-shadows</a>.

<table>
    <thead>
        <tr>
            <th>token</th>
            <th>utility class</th>
            <th>value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>`$box-shadow-1`</td>
            <td>`.shadow-1`</td>
            <td>`0 1px 1px rgba(0, 0, 0, 0.07),
  0 1px 8px rgba(0, 0, 0, 0.07);`</td>
        </tr>
        <tr>
            <td>`$box-shadow-2`</td>
            <td>`.shadow-2`</td>
            <td>`0 1px 1px rgba(0,0,0,0.07),
  0 2px 2px rgba(0,0,0,0.07),
  0 4px 4px rgba(0,0,0,0.07)`</td>
        </tr>
        <tr>
            <td>`$box-shadow-3`</td>
            <td>`.shadow-3`</td>
            <td>`0 1px 1px rgba(0,0,0,0.07),
  0 2px 2px rgba(0,0,0,0.07),
  0 4px 4px rgba(0,0,0,0.07),
  0 8px 8px rgba(0,0,0,0.07)`</td>
        </tr>
        <tr>
            <td>`$box-shadow-3`</td>
            <td>`.shadow-4`</td>
            <td>`0 1px 1px rgba(0,0,0,0.07),
  0 2px 2px rgba(0,0,0,0.07),
  0 4px 4px rgba(0,0,0,0.07),
  0 8px 8px rgba(0,0,0,0.07),
  0 16px 16px rgba(0,0,0,0.07)`</td>
        </tr>
        <tr>
            <td>`$box-shadow-3`</td>
            <td>`.shadow-5`</td>
            <td>`0 1px 1px rgba(0,0,0,0.07),
  0 2px 2px rgba(0,0,0,0.07),
  0 4px 4px rgba(0,0,0,0.07),
  0 8px 8px rgba(0,0,0,0.07),
  0 16px 16px rgba(0,0,0,0.07),
  0 32px 32px rgba(0,0,0,0.07)`</td>
        </tr>
    </tbody>
</table>

```js
import Block from '../../Components/Block/Block';

<Block itemSpacing="7" justify="around" marginTop="7">
  <Block
    flex
    radius="2"
    height="100px"
    className="shadow-1"
    background="white"
    alignItems="center"
    justify="center"
  >
    .shadow-1
  </Block>
  <Block
    flex
    radius="2"
    height="100px"
    className="shadow-2"
    background="white"
    alignItems="center"
    justify="center"
  >
    .shadow-2
  </Block>
  <Block
    flex
    radius="2"
    height="100px"
    className="shadow-3"
    background="white"
    alignItems="center"
    justify="center"
  >
    .shadow-3
  </Block>
  <Block
    flex
    radius="2"
    height="100px"
    className="shadow-4"
    background="white"
    alignItems="center"
    justify="center"
  >
    .shadow-4
  </Block>
  <Block
    flex
    radius="2"
    height="100px"
    className="shadow-5"
    background="white"
    alignItems="center"
    justify="center"
  >
    .shadow-5
  </Block>
</Block>;
```
