import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { categories as categoriesAction } from "../../../actions/categories"
import Container from "../../../components/admin/Container"
import Overview from "../../../components/admin/Overview"
import Table from "../../../components/admin/Table"

const List = () => {

  const dispatch = useDispatch();
  const { categories , loading } = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(categoriesAction())
  },[dispatch])

  return (
    <Container title="Categories List" subtitle="Welcome Admin, you have 12 pending orders">
      <Overview linkto="/admin/categories/new" linkname="Add Category"/>
      <div className="content-heading d-flex justify-content-between align-items-center">
        <span>
          Categories <small>(3580)</small>
        </span>
      </div>
      <Table data={categories} />
    </Container>
  )
}

export default List