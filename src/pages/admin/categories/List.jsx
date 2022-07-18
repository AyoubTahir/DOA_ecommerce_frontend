import { categories, deleteCategory } from '../../../actions/categories';
import Container from '../../../components/admin/Container';
import Overview from '../../../components/admin/Overview';
import Table from '../../../components/admin/table/Table';

const List = () => {
  const columns = [
    { field: 'photo', headerName: '#', type: 'image' },
    { field: 'title', headerName: 'Category', type: 'text' },
    { field: 'description', headerName: 'Description', type: 'text' },
    { field: 'created_at', headerName: 'SUBMITTED', type: 'date' },
    { field: 'status', headerName: 'Status', type: 'status' },
    { field: 'actions', headerName: 'Actions', type: 'actions' },
  ];

  return (
    <Container
      title="Categories List"
      subtitle="Welcome Admin, you have 12 pending orders"
    >
      <Overview linkto="/admin/categories/new" linkname="Add Category" />
      <Table
        fetchAction={categories}
        deleteAction={deleteCategory}
        model="categories"
        columns={columns}
      />
    </Container>
  );
};

export default List;
