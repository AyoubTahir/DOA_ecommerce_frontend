import { useState } from "react"
import { useDispatch } from "react-redux"
import { toggleSidbar } from "../../actions/template"

const Navbar = () => {
  const [ userDropdwon, setUserDropdwon ] = useState(false)
  const [ notificationDropdwon, setNotificationDropdwon ] = useState(false)
  const dispatch = useDispatch()

  const handleSidebarToggle = () => {
    dispatch(toggleSidbar())
  }

  document.addEventListener('click', function(e){   
    if (!document.getElementById('user_drop').contains(e.target)){
      setUserDropdwon(false)
    }
    if (!document.getElementById('notification_drop').contains(e.target)){
      setNotificationDropdwon(false)
    }
  });

  return (
    <header id="page-header">
        <div className="content-header">
          <div className="space-x-1">
            <button type="button" className="btn btn-sm btn-alt-secondary" onClick={handleSidebarToggle}>
              <i className="fa fa-fw fa-bars"></i>
            </button>
          </div>

          <div className="space-x-1">
            <div id="user_drop" className="dropdown d-inline-block">
              <button type="button" className={`btn btn-sm btn-alt-secondary ${ userDropdwon && 'show' }`} id="page-header-user-dropdown" onClick={() => setUserDropdwon(!userDropdwon) } data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-user d-sm-none"></i>
                <span className="d-none d-sm-inline-block fw-semibold">J. Smith</span>
                <i className="fa fa-angle-down opacity-50 ms-1"></i>
              </button>
              <div className={`dropdown-menu dropdown-menu-md dropdown-menu-end p-0 ${ userDropdwon && 'show' }`} style={{position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate(0px, 33px)"}} aria-labelledby="page-header-user-dropdown">
                <div className="px-2 py-3 bg-body-light rounded-top">
                  <h5 className="h6 text-center mb-0">
                    John Smith
                  </h5>
                </div>
                <div className="p-2">
                  <a className="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="be_pages_generic_profile.html">
                    <span>Profile</span>
                    <i className="fa fa-fw fa-user opacity-25"></i>
                  </a>
                  <a className="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_inbox.html">
                    <span>Inbox</span>
                    <i className="fa fa-fw fa-envelope-open opacity-25"></i>
                  </a>
                  <a className="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="be_pages_generic_invoice.html">
                    <span>Invoices</span>
                    <i className="fa fa-fw fa-file opacity-25"></i>
                  </a>
                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="#aa" data-toggle="layout" data-action="side_overlay_toggle">
                    <span>Settings</span>
                    <i className="fa fa-fw fa-wrench opacity-25"></i>
                  </a>

                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="op_auth_signin.html">
                    <span>Sign Out</span>
                    <i className="fa fa-fw fa-sign-out-alt opacity-25"></i>
                  </a>
                </div>
              </div>
            </div>

            <div id="notification_drop" className="dropdown d-inline-block">
              <button type="button" className={`btn btn-sm btn-alt-secondary ${ notificationDropdwon && 'show' }`} id="page-header-notifications" onClick={ () => setNotificationDropdwon(!notificationDropdwon) } data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-flag"></i>
                <span className="text-primary">&bull;</span>
              </button>
              <div className={`dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 ${ notificationDropdwon && 'show' }`} style={{position: "absolute", inset: "0px 0px auto auto", margin: "0px", transform: "translate(0px, 33px)"}} aria-labelledby="page-header-notifications">
                <div className="px-2 py-3 bg-body-light rounded-top">
                  <h5 className="h6 text-center mb-0">
                    Notifications
                  </h5>
                </div>
                <ul className="nav-items my-2 fs-sm">
                  <li>
                    <a className="text-dark d-flex py-2" href="#aa">
                      <div className="flex-shrink-0 me-2 ms-3">
                        <i className="fa fa-fw fa-check text-success"></i>
                      </div>
                      <div className="flex-grow-1 pe-2">
                        <p className="fw-medium mb-1">You’ve upgraded to a VIP account successfully!</p>
                        <div className="text-muted">15 min ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-dark d-flex py-2" href="#aa">
                      <div className="flex-shrink-0 me-2 ms-3">
                        <i className="fa fa-fw fa-exclamation-triangle text-warning"></i>
                      </div>
                      <div className="flex-grow-1 pe-2">
                        <p className="fw-medium mb-1">Please check your payment info since we can’t validate them!</p>
                        <div className="text-muted">50 min ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-dark d-flex py-2" href="#aa">
                      <div className="flex-shrink-0 me-2 ms-3">
                        <i className="fa fa-fw fa-times text-danger"></i>
                      </div>
                      <div className="flex-grow-1 pe-2">
                        <p className="fw-medium mb-1">Web server stopped responding and it was automatically restarted!</p>
                        <div className="text-muted">4 hours ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-dark d-flex py-2" href="#aa">
                      <div className="flex-shrink-0 me-2 ms-3">
                        <i className="fa fa-fw fa-exclamation-triangle text-warning"></i>
                      </div>
                      <div className="flex-grow-1 pe-2">
                        <p className="fw-medium mb-1">Please consider upgrading your plan. You are running out of space.</p>
                        <div className="text-muted">16 hours ago</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a className="text-dark d-flex py-2" href="#aa">
                      <div className="flex-shrink-0 me-2 ms-3">
                        <i className="fa fa-fw fa-plus text-primary"></i>
                      </div>
                      <div className="flex-grow-1 pe-2">
                        <p className="fw-medium mb-1">New purchases! +$250</p>
                        <div className="text-muted">1 day ago</div>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="p-2 bg-body-light rounded-bottom">
                  <a className="dropdown-item text-center mb-0" href="#aa">
                    <i className="fa fa-fw fa-flag opacity-50 me-1"></i> View All
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div id="page-header-search" className="overlay-header bg-body-extra-light">
          <div className="content-header">
            <form className="w-100" action="be_pages_generic_search.html" method="POST">
              <div className="input-group">

                <button type="button" className="btn btn-secondary" data-toggle="layout" data-action="header_search_off">
                  <i className="fa fa-fw fa-times"></i>
                </button>
                
                <input type="text" className="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input" />
                <button type="submit" className="btn btn-secondary">
                  <i className="fa fa-fw fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div id="page-header-loader" className="overlay-header bg-primary">
          <div className="content-header">
            <div className="w-100 text-center">
              <i className="far fa-sun fa-spin text-white"></i>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Navbar