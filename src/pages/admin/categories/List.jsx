import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import {
  categories as categoriesAction,
  deleteCategory,
} from '../../../actions/categories';
import Container from '../../../components/admin/Container';
import Overview from '../../../components/admin/Overview';
import Table from '../../../components/admin/Table';

const List = () => {
  const dispatch = useDispatch();
  const [deleted, setDeleted] = useState(false);
  const { categories, loading, meta } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(categoriesAction());
  }, [dispatch, deleted]);

  const handleDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCategory(id));
        setDeleted((prev) => !prev);
      }
    });
  };

  const fetchPaginate = (page) => {
    dispatch(categoriesAction(page));
  };

  return (
    <Container
      title="Categories List"
      subtitle="Welcome Admin, you have 12 pending orders"
    >
      <Overview linkto="/admin/categories/new" linkname="Add Category" />
      <div className="content-heading d-flex justify-content-between align-items-center">
        <span>
          Categories <small>(3580)</small>
        </span>
      </div>
      <Table
        data={categories}
        deleteItem={handleDelete}
        loading={loading}
        pagination={meta}
        fetchPaginate={fetchPaginate}
      />
    </Container>
  );
};

export default List;
