import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import { useNavigate, Link } from "react-router-dom";
import { toggleDarkMode, toggleSidbar } from "../../actions/template";
import { avatar } from "../../assets/admin/images";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authName = localStorage.getItem("auth_name");

  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to logout?")) return;

    dispatch(logout(navigate));
  };

  const handleMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleSidebarToggle = () => {
    dispatch(toggleSidbar());
  };

  return (
    <nav id="sidebar">
      <div className="sidebar-content">
        <div className="content-header justify-content-lg-center">
          <div>
            <span className="smini-visible fw-bold tracking-wide fs-lg">
              c<span className="text-primary">b</span>
            </span>
            <a
              className="link-fx fw-bold tracking-wide mx-auto"
              href="index.html"
            >
              <span className="smini-hidden">
                <i className="fa fa-fire text-primary"></i>
                <span className="fs-4 text-dual"> DOA</span>
                <span className="fs-4 text-primary"> ECOM</span>
              </span>
            </a>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-sm btn-alt-danger d-lg-none"
              onClick={handleSidebarToggle}
              data-toggle="layout"
              data-action="sidebar_close"
            >
              <i className="fa fa-fw fa-times"></i>
            </button>
          </div>
        </div>

        <div className="js-sidebar-scroll">
          <div className="content-side content-side-user px-0 py-0">
            <div className="smini-visible-block animated fadeIn px-3">
              <img
                className="img-avatar img-avatar32"
                src="assets/media/avatars/avatar15.jpg"
                alt=""
              />
            </div>

            <div className="smini-hidden text-center mx-auto">
              <a className="img-link" href="be_pages_generic_profile.html">
                <img className="img-avatar" src={avatar} alt="" />
              </a>
              <ul className="list-inline mt-3 mb-0">
                <li className="list-inline-item">
                  <a
                    className="link-fx text-dual fs-sm fw-semibold text-uppercase"
                    href="be_pages_generic_profile.html"
                  >
                    {authName}
                  </a>
                </li>
                <li className="list-inline-item">
                  <button
                    className="link-fx text-dual"
                    style={{ background: "transparent", border: "none" }}
                    onClick={handleMode}
                  >
                    <i className="fa fa-burn"></i>
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    className="link-fx text-dual"
                    style={{ background: "transparent", border: "none" }}
                    onClick={handleLogout}
                  >
                    <i className="fa fa-sign-out-alt"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="content-side content-side-full">
            <ul className="nav-main">
              <li className="nav-main-item">
                <Link className="nav-main-link" to="/admin">
                  <i className="nav-main-link-icon fa fa-house-user"></i>
                  <span className="nav-main-link-name">Dashboard</span>
                </Link>
              </li>
              <li className="nav-main-item">
                <Link className="nav-main-link" to="/admin/categories">
                  <i className="nav-main-link-icon fa fa-house-user"></i>
                  <span className="nav-main-link-name">Categories</span>
                </Link>
              </li>
              <li className="nav-main-item">
                <Link className="nav-main-link" to="/admin/products">
                  <i className="nav-main-link-icon fa fa-house-user"></i>
                  <span className="nav-main-link-name">Products</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
