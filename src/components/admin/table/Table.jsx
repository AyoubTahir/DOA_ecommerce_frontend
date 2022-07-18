import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import handleColumn from './handleColumn';

const Table = ({ fetchAction, deleteAction, model, columns }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [record, setRecord] = useState(10);
  const [search, setSearch] = useState('');
  const [deleted, setDeleted] = useState(false);
  const selector = useSelector((state) => state[model]);
  /*const { categories, loading, meta } = useSelector(
    (state) => state.categories
  );*/

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchAction(page, record, search, signal));
    return () => {
      controller.abort();
    };
  }, [dispatch, fetchAction, deleted, page, record, search]);

  const deleteItem = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteAction(id));
        setDeleted((prev) => !prev);
      }
    });
  };

  const fetchPaginate = (page) => {
    setPage(page);
  };

  const handlePaginate = (label, curentPage) => {
    let page = curentPage;
    if (label === 'Next &raquo;') page++;
    else if (label === '&laquo; Previous') page--;
    else page = label;

    fetchPaginate(page);
  };

  return (
    <>
      <div className="content-heading d-flex justify-content-between align-items-center">
        <span>
          Categories <small>(3580)</small>
        </span>
        <div class="space-x-1">
          <div class="dropdown d-inline-block">
            <select
              class="form-select"
              id="example-select"
              name="example-select"
              onChange={(e) => {
                setRecord(e.target.value);
                setPage(1);
              }}
            >
              <option selected="" value={10}>
                10
              </option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
      </div>
      <div
        class={`block block-rounded ${
          selector.loading && 'block-mode-loading'
        }`}
      >
        <div class="block-content bg-body-light">
          <form
            action="be_pages_ecom_products.html"
            method="POST"
            onsubmit="return false;"
          >
            <div class="mb-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search products.."
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button type="submit" class="btn btn-primary">
                  <i class="fa fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="block-content block-content-full">
          <table class="table table-borderless table-striped">
            <thead>
              <tr>
                {columns.map((item) => {
                  return (
                    <th
                      class={
                        item.type === 'actions'
                          ? 'text-end'
                          : 'd-none d-sm-table-cell'
                      }
                    >
                      {item.headerName}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {selector[model]?.map((item) => {
                return (
                  <tr key={item.id}>
                    {columns.map((column) => {
                      return handleColumn(column, item, deleteItem);
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <nav aria-label="Products navigation">
            <ul class="pagination justify-content-end mb-0">
              {selector.meta?.links?.map((page) => {
                return (
                  page.url && (
                    <li class={`page-item ${page.active && 'active'}`}>
                      <a
                        class="page-link"
                        href="#g"
                        onClick={() => {
                          handlePaginate(
                            page.label,
                            selector.meta.current_page
                          );
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
        </div>
      </div>
    </>
  );
};

export default Table;
