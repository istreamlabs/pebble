import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Pagination from './Pagination';

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

function PaginationNoNumPagesExample() {
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

storiesOf('Pagination', module)
  .add('with numPages', () => (
    <>
      <PaginationExample />
    </>
  ))
  .add('without numPages', () => (
    <>
      <PaginationNoNumPagesExample />
    </>
  ));
