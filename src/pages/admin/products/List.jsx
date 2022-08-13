import { categories, deleteCategory } from "../../../actions/categories";
import Container from "../../../components/admin/Container";
import Overview from "../../../components/admin/Overview";
import Table from "../../../components/admin/table/Table";

const List = () => {
  const columns = [
    { field: "photo", headerName: "#", type: "image" },
    { field: "title", headerName: "Category", type: "text" },
    { field: "description", headerName: "Description", type: "text" },
    { field: "name", headerName: "Created By", type: "text", relation: "user" },
    { field: "created_at", headerName: "SUBMITTED", type: "date" },
    { field: "status", headerName: "Status", type: "status" },
    { field: "actions", headerName: "Actions", type: "actions" },
  ];

  return (
    <Container
      title="Products"
      subtitle="Welcome Admin, you have 12 pending orders"
    >
      <Overview linkto="/admin/products/new" name="Product" />

      {/* <Table
        fetchAction={categories}
        deleteAction={deleteCategory}
        model="categories"
        columns={columns}
        editLink="/admin/categories/edit"
      /> */}
    </Container>
  );
};

export default List;
