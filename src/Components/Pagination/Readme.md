## Examples

### Controlled Pagination Example

An example of using state in a parent to manage the Pagination control.

```js
import { useState } from 'react'

function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      onPrev={() => setCurrentPage(currentPage - 1)}
      onNext={() => setCurrentPage(currentPage + 1)}
      onPageChange={(nextPage) => setCurrentPage(nextPage)}
      currentPage={currentPage}
      numPages={5}
    />
  )
}

<PaginationExample />

```

## Best Practices

Pagination should

* Be used when the user will be search for information rather than scanning or browsing.
* When the user must maintain a sense of current position within a list of items
