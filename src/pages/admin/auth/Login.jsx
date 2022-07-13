import { useState } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../../actions/auth';

const Login = () => {

  const [inputs, setInputs] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { loading, errors } = useSelector((state) => state.auth);
    
  const inputsHandle = (e) => {
      setInputs({ ...inputs, [e.target.name] : e.target.value })
  }

  const submitHandle = (e) => {
    e.preventDefault()
    dispatch(signin(inputs, navigate));
    
  }
  
  if (localStorage.getItem('auth_token'))
  return <Navigate to="/admin" state={{ from: location }} replace />;

  return (
    <div id="page-container" className="main-content-boxed">
      {loading && <div id="page-loader" className="show"></div>}
      <main id="main-container">
        <div className="bg-body-dark">
          <div className="row mx-0 justify-content-center">
            <div className="hero-static col-lg-6 col-xl-4">
              <div className="content content-full overflow-hidden">
                <div className="py-4 text-center">
                  <a className="link-fx fw-bold" href="index.html">
                    <i className="fa fa-fire"></i>
                    <span className="fs-4 text-body-color"> DOA </span><span className="fs-4">ECOMMERCE</span>
                  </a>
                  <h1 className="h3 fw-bold mt-4 mb-2">Welcome to Your Dashboard</h1>
                  <h2 className="h5 fw-medium text-muted mb-0">It’s a great day today!</h2>
                </div>
                <form className="js-validation-signin" onSubmit={submitHandle}>
                  <div className="block block-themed block-rounded block-fx-shadow">
                    <div className="block-header bg-gd-dusk">
                      <h3 className="block-title">Please Sign In</h3>
                    </div>
                    <div className="block-content">
                      {errors?.message && <p style={{color: "red", textAlign: "center"}}> {errors?.message} </p>}
                      <div className="form-floating mb-4">
                        <input type="email" className="form-control" id="email" name="email" value={inputs.email} onChange={inputsHandle} placeholder="Enter your Email" />
                        <label className="form-label" htmlFor="email">Email</label>
                        {errors?.validation_errors?.email && <span style={{color: "red"}}> {errors?.validation_errors?.email[0]} </span>}
                      </div>
                      <div className="form-floating mb-4">
                        <input type="password" className="form-control" id="password" name="password" value={inputs.password} onChange={inputsHandle} placeholder="Enter your password" />
                        <label className="form-label" htmlFor="password">Password</label>
                        {errors?.validation_errors?.password && <span style={{color: "red"}}> {errors?.validation_errors?.password[0]} </span>}
                      </div>
                      <div className="row">
                        <div className="col-sm-6 d-sm-flex align-items-center push">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="login-remember-me" name="login-remember-me" />
                            <label className="form-check-label" htmlFor="login-remember-me">Remember Me</label>
                          </div>
                        </div>
                        <div className="col-sm-6 text-sm-end push">
                          <button type="submit" className="btn btn-lg btn-alt-primary fw-medium">
                            Sign In
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="block-content block-content-full bg-body-light text-center d-flex justify-content-between">
                      <a className="fs-sm fw-medium link-fx text-muted me-2 mb-1 d-inline-block" href="op_auth_signup3.html">
                        <i className="fa fa-plus opacity-50 me-1"></i> Create Account
                      </a>
                      <a className="fs-sm fw-medium link-fx text-muted me-2 mb-1 d-inline-block" href="op_auth_reminder3.html">
                        Forgot Password
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login