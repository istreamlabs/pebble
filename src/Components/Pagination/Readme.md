## Examples

### Controlled Pagination Example

An example of using state in a parent to manage the Pagination control.

```js
import { useState } from 'react';

function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      onPageChange={setCurrentPage}
      currentPage={currentPage}
      numPages={5}
    />
  );
}

<PaginationExample />;
```

### Unknown Number of Pages

```js
import { useState } from 'react';

function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="mb-5">current page: {currentPage}</div>
      <Pagination
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

<PaginationExample />;
```

## Best Practices

Pagination should

- Be used when the user will be search for information rather than scanning or browsing.
- When the user must maintain a sense of current position within a list of items
