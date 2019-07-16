Use shadow tokens to set a box shadow.

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
            <td>`0 1px 1px rgba(0, 0, 0, .07), 0 1px 8px rgba(0, 0, 0, .1)`</td>
        </tr>
        <tr>
            <td>`$box-shadow-2`</td>
            <td>`.shadow-2`</td>
            <td>`0 1px 8px rgba(0, 0, 0, .07), 0 8px 20px rgba(0, 0, 0, .1)`</td>
        </tr>
        <tr>
            <td>`$box-shadow-3`</td>
            <td>`.shadow-3`</td>
            <td>`0 1px 8px rgba(0, 0, 0, .1), 0 16px 40px rgba(0, 0, 0, .07), 0 24px 56px rgba(0, 0, 0, .05)`</td>
        </tr>
    </tbody>
</table>

```js
import Block from '../../Components/Block/Block';

<Block justify="around" marginTop="7">
  <Block
    width="175px"
    height="100px"
    className="shadow-1"
    background="white"
    alignItems="center"
    justify="center"
  >
    .shadow-1
  </Block>
  <Block
    width="175px"
    height="100px"
    className="shadow-2"
    background="white"
    alignItems="center"
    justify="center"
  >
    .shadow-2
  </Block>
  <Block
    width="175px"
    height="100px"
    className="shadow-3"
    background="white"
    alignItems="center"
    justify="center"
  >
    .shadow-3
  </Block>
</Block>;
```
