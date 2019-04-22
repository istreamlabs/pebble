import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import '../../Styles/foundation.scss';

import Pagination from './Pagination';

function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      onPrev={() => setCurrentPage(currentPage - 1)}
      onNext={() => setCurrentPage(currentPage + 1)}
      onPageChange={nextPage => setCurrentPage(nextPage)}
      currentPage={currentPage}
      numPages={5}
    />
  );
}

storiesOf('Pagination', module)
  .add('all', () => (
    <>
      <PaginationExample />
    </>
  ));
