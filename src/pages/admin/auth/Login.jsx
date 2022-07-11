import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../../actions/auth';

const Login = () => {

  const [inputs, setInputs] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, errors } = useSelector((state) => state.auth);
    
    const inputsHandle = (e) => {
        setInputs({ ...inputs, [e.target.name] : e.target.value })
    }

    const submitHandle = (e) => {
      e.preventDefault()
      dispatch(signin(inputs, navigate));
      
    }

  return (
    <div id="page-container" class="main-content-boxed">
      {loading && <div id="page-loader" class="show"></div>}
      <main id="main-container">
        <div class="bg-body-dark">
          <div class="row mx-0 justify-content-center">
            <div class="hero-static col-lg-6 col-xl-4">
              <div class="content content-full overflow-hidden">
                <div class="py-4 text-center">
                  <a class="link-fx fw-bold" href="index.html">
                    <i class="fa fa-fire"></i>
                    <span class="fs-4 text-body-color"> DOA </span><span class="fs-4">ECOMMERCE</span>
                  </a>
                  <h1 class="h3 fw-bold mt-4 mb-2">Welcome to Your Dashboard</h1>
                  <h2 class="h5 fw-medium text-muted mb-0">It’s a great day today!</h2>
                </div>
                <form class="js-validation-signin" onSubmit={submitHandle}>
                  <div class="block block-themed block-rounded block-fx-shadow">
                    <div class="block-header bg-gd-dusk">
                      <h3 class="block-title">Please Sign In</h3>
                    </div>
                    <div class="block-content">
                      {errors?.message && <p style={{color: "red", textAlign: "center"}}> {errors?.message} </p>}
                      <div class="form-floating mb-4">
                        <input type="email" class="form-control" id="email" name="email" value={inputs.email} onChange={inputsHandle} placeholder="Enter your Email" />
                        <label class="form-label" for="email">Email</label>
                        {errors?.validation_errors?.email && <span style={{color: "red"}}> {errors?.validation_errors?.email[0]} </span>}
                      </div>
                      <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="password" name="password" value={inputs.password} onChange={inputsHandle} placeholder="Enter your password" />
                        <label class="form-label" for="password">Password</label>
                        {errors?.validation_errors?.password && <span style={{color: "red"}}> {errors?.validation_errors?.password[0]} </span>}
                      </div>
                      <div class="row">
                        <div class="col-sm-6 d-sm-flex align-items-center push">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="login-remember-me" name="login-remember-me" />
                            <label class="form-check-label" for="login-remember-me">Remember Me</label>
                          </div>
                        </div>
                        <div class="col-sm-6 text-sm-end push">
                          <button type="submit" class="btn btn-lg btn-alt-primary fw-medium">
                            Sign In
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="block-content block-content-full bg-body-light text-center d-flex justify-content-between">
                      <a class="fs-sm fw-medium link-fx text-muted me-2 mb-1 d-inline-block" href="op_auth_signup3.html">
                        <i class="fa fa-plus opacity-50 me-1"></i> Create Account
                      </a>
                      <a class="fs-sm fw-medium link-fx text-muted me-2 mb-1 d-inline-block" href="op_auth_reminder3.html">
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