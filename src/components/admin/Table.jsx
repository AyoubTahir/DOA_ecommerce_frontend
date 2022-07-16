import moment from "moment";
import { avatar } from "../../assets/admin/images"
import { BASE_URL } from "../../apis";

const Table = ({ data }) => {


  return (
    <div class="block block-rounded">
        <div class="block-content bg-body-light">
            <form action="be_pages_ecom_products.html" method="POST" onsubmit="return false;">
            <div class="mb-4">
                <div class="input-group">
                <input type="text" class="form-control" placeholder="Search products.." />
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
                    <th class="d-none d-sm-table-cell">#</th>
                    <th class="d-none d-sm-table-cell">Category</th>
                    <th class="d-none d-sm-table-cell">Description</th>
                    <th class="d-none d-sm-table-cell">Products</th>
                    <th class="d-none d-sm-table-cell">Created By</th>
                    <th class="d-none d-sm-table-cell">Submitted</th>
                    <th class="d-none d-sm-table-cell">Status</th>
                    <th class="text-end">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item => {
                        return (
                            <tr key={item.id}>
                                <td class="">
                                    <img class="img-avatar img-avatar48" src={`${BASE_URL}/${item.photo}`} alt="" />
                                </td>
                                <td class="d-none d-sm-table-cell" style={{ padding: "24px 13px" }}>
                                    {item.title}
                                </td>
                                <td class="d-none d-sm-table-cell" style={{ padding: "24px 13px" }}>
                                    {item.description}
                                </td>
                                <td style={{ padding: "24px 13px" }}>
                                    <a href="be_pages_ecom_product_edit.html">258</a>
                                </td>
                                <td style={{ padding: "24px 13px" }}>
                                    <a href="be_pages_ecom_product_edit.html">Admin</a>
                                </td>
                                <td class="d-none d-sm-table-cell" style={{ padding: "24px 13px" }}>
                                    { moment(item.created_at).utc().format('YYYY-MM-DD')}
                                </td>
                                <td class="d-none d-sm-table-cell" style={{ padding: "24px 13px" }}>
                                    <span class="badge bg-success">Active</span>
                                </td>
                                <td class="text-end" style={{ padding: "24px 17px" }} >
                                    <button class="link-fx text-dual" style={{background: "transparent", border: "none", marginRight: "5px"}}>
                                        <i class="fa fa-trash-can text-danger"></i>
                                    </button>
                                    <button class="link-fx text-dual" style={{background: "transparent", border: "none"}}>
                                        <i class="fa fa-pen-to-square text-success"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>

            <nav aria-label="Products navigation">
            <ul class="pagination justify-content-end mb-0">
                <li class="page-item">
                <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                    <span aria-hidden="true">
                    <i class="fa fa-angle-left"></i>
                    </span>
                    <span class="sr-only">Previous</span>
                </a>
                </li>
                <li class="page-item active">
                <a class="page-link" href="javascript:void(0)">1</a>
                </li>
                <li class="page-item">
                <a class="page-link" href="javascript:void(0)">2</a>
                </li>
                <li class="page-item disabled">
                <a class="page-link" href="javascript:void(0)">...</a>
                </li>
                <li class="page-item">
                <a class="page-link" href="javascript:void(0)">39</a>
                </li>
                <li class="page-item">
                <a class="page-link" href="javascript:void(0)">40</a>
                </li>
                <li class="page-item">
                <a class="page-link" href="javascript:void(0)" aria-label="Next">
                    <span aria-hidden="true">
                    <i class="fa fa-angle-right"></i>
                    </span>
                    <span class="sr-only">Next</span>
                </a>
                </li>
            </ul>
            </nav>

        </div>
    </div>
  )
}

export default Table