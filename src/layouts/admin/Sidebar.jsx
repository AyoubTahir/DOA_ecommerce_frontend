import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = () => {
    
    if (!window.confirm('Are you sure you want to logout?')) return

    dispatch(logout(navigate))

  }

  return (
    <nav id="sidebar">
      <div class="sidebar-content">
        
        <div class="content-header justify-content-lg-center">
          <div>
            <span class="smini-visible fw-bold tracking-wide fs-lg">
              c<span class="text-primary">b</span>
            </span>
            <a class="link-fx fw-bold tracking-wide mx-auto" href="index.html">
              <span class="smini-hidden">
                <i class="fa fa-fire text-primary"></i>
                <span class="fs-4 text-dual">code</span><span class="fs-4 text-primary">base</span>
              </span>
            </a>
          </div>

          <div>
            <button type="button" class="btn btn-sm btn-alt-danger d-lg-none" data-toggle="layout" data-action="sidebar_close">
              <i class="fa fa-fw fa-times"></i>
            </button>
          </div>
        </div>

        <div class="js-sidebar-scroll">

          <div class="content-side content-side-user px-0 py-0">
            <div class="smini-visible-block animated fadeIn px-3">
              <img class="img-avatar img-avatar32" src="assets/media/avatars/avatar15.jpg" alt="" />
            </div>

            <div class="smini-hidden text-center mx-auto">
              <a class="img-link" href="be_pages_generic_profile.html">
                <img class="img-avatar" src="assets/media/avatars/avatar15.jpg" alt="" />
              </a>
              <ul class="list-inline mt-3 mb-0">
                <li class="list-inline-item">
                  <a class="link-fx text-dual fs-sm fw-semibold text-uppercase" href="be_pages_generic_profile.html">J. Smith</a>
                </li>
                <li class="list-inline-item">
                  <a class="link-fx text-dual" data-toggle="layout" data-action="dark_mode_toggle" href="javascript:void(0)">
                    <i class="fa fa-burn"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <button class="link-fx text-dual" style={{background: "transparent"}} onClick={handleLogout} >
                    <i class="fa fa-sign-out-alt"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div class="content-side content-side-full">
            <ul class="nav-main">
              <li class="nav-main-item">
                <a class="nav-main-link" href="be_pages_dashboard.html">
                  <i class="nav-main-link-icon fa fa-house-user"></i>
                  <span class="nav-main-link-name">Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    </nav>
  )
}

export default Sidebar