import React from 'react';

const Pagination = ({ selector, setPage }) => {
  const handlePaginate = (label, curentPage) => {
    let page = curentPage;
    if (label === 'Next &raquo;') page++;
    else if (label === '&laquo; Previous') page--;
    else page = label;

    setPage(page);
  };

  return (
    <nav aria-label="Products navigation">
      <ul class="pagination justify-content-end mb-0">
        {selector.meta?.links?.map((page, index) => {
          return (
            page.url && (
              <li class={`page-item ${page.active && 'active'}`} key={index}>
                <a
                  class="page-link"
                  href="#g"
                  onClick={() => {
                    handlePaginate(page.label, selector.meta.current_page);
                  }}
                >
                  {page.label === '&laquo; Previous'
                    ? 'Previous'
                    : page.label === 'Next &raquo;'
                    ? 'Next'
                    : page.label}
                </a>
              </li>
            )
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
