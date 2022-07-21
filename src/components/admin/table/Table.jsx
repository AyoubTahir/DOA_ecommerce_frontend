import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteConfirm } from '../../../helpers/swal';
import handleColumn from './handleColumn';
import Pagination from './Pagination';
import Record from './Record';
import Search from './Search';

const Table = ({ fetchAction, deleteAction, model, columns, editLink }) => {
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
    deleteConfirm(() => {
      dispatch(deleteAction(id));
      setDeleted((prev) => !prev);
    });
  };

  return (
    <>
      <div className="content-heading d-flex justify-content-between align-items-center">
        <span>
          Categories <small>({selector.meta.total})</small>
        </span>
        <div className="space-x-1">
          <Record setRecord={setRecord} setPage={setPage} />
        </div>
      </div>
      <div
        className={`block block-rounded ${
          selector.loading && 'block-mode-loading'
        }`}
      >
        <Search setSearch={setSearch} />

        <div className="block-content block-content-full">
          <table className="table table-borderless table-striped">
            <thead>
              <tr>
                {columns.map((item, index) => {
                  return (
                    <th
                      key={index}
                      className={
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
                    {columns.map((column, index) => {
                      return handleColumn(
                        column,
                        item,
                        deleteItem,
                        editLink,
                        index
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          {!selector.errors &&
            !selector.loading &&
            selector[model].length <= 0 && (
              <p className="text-center mt-5">No Data Found</p>
            )}

          <Pagination selector={selector} setPage={setPage} />
        </div>
      </div>
    </>
  );
};

export default Table;
