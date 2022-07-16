import { Link } from "react-router-dom"

const Overview = ({ linkto ,linkname }) => {
  return (
    <>
        <h2 className="content-heading">Overview</h2>
        <div className="row">

            <div className="col-md-6 col-xl-3">
                <a className="block block-rounded block-link-shadow" href={undefined}>
                    <div className="block-content block-content-full block-sticky-options">
                        <div className="block-options">
                            <div className="block-options-item">
                                <i className="far fa-circle fa-2x text-info-light"></i>
                            </div>
                        </div>
                        <div className="py-3 text-center">
                            <div className="fs-2 fw-bold mb-0 text-info">3580</div>
                            <div className="fs-sm fw-semibold text-uppercase text-muted">All Products</div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="col-md-6 col-xl-3">
                <a className="block block-rounded block-link-shadow" href={undefined}>
                <div className="block-content block-content-full block-sticky-options">
                    <div className="block-options">
                    <div className="block-options-item">
                        <i className="fa fa-star fa-2x text-warning-light"></i>
                    </div>
                    </div>
                    <div className="py-3 text-center">
                    <div className="fs-2 fw-bold mb-0 text-warning">95</div>
                    <div className="fs-sm fw-semibold text-uppercase text-muted">Top Sellers</div>
                    </div>
                </div>
                </a>
            </div>

            <div className="col-md-6 col-xl-3">
                <a className="block block-rounded block-link-shadow" href={undefined}>
                <div className="block-content block-content-full block-sticky-options">
                    <div className="block-options">
                    <div className="block-options-item">
                        <i className="fa fa-exclamation-triangle fa-2x text-danger-light"></i>
                    </div>
                    </div>
                    <div className="py-3 text-center">
                    <div className="fs-2 fw-bold mb-0 text-danger">30</div>
                    <div className="fs-sm fw-semibold text-uppercase text-muted">Out of Stock</div>
                    </div>
                </div>
                </a>
            </div>

            <div className="col-md-6 col-xl-3">
                <Link className="block block-rounded block-link-shadow" to={linkto}>
                    <div className="block-content block-content-full block-sticky-options">
                        <div className="block-options">
                        <div className="block-options-item">
                            <i className="fa fa-archive fa-2x text-success-light"></i>
                        </div>
                        </div>
                        <div className="py-3 text-center">
                        <div className="fs-2 fw-bold mb-0 text-success">
                            <i className="fa fa-plus"></i>
                        </div>
                        <div className="fs-sm fw-semibold text-uppercase text-muted">{ linkname }</div>
                        </div>
                    </div>
                </Link>
            </div>
        
        </div>
    </>
  )
}

export default Overview