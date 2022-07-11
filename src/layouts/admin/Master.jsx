import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { checkToken } from '../../actions/auth';

const Master = () => {

    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(checkToken(navigate))
    },[])

    if (!localStorage.getItem('auth_token')) return navigate('/admin/login')
    
    return (
        <div id="page-container" class="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-glass page-header-dark main-content-boxed">
            {loading && <div id="page-loader" class="show"></div>}
            <Sidebar />
            <Navbar />
            <main id="main-container">

                <div class="bg-image" style={{ backgroundImage: "url('assets/media/photos/photo26@2x.jpg')" }}>
                <div class="bg-black-75">
                    <div class="content content-top content-full text-center">
                    <div class="py-3">
                        <h1 class="h2 fw-bold text-white mb-2">{loading && 'e-Commerce Dashboard'}</h1>
                        <h2 class="h4 fw-normal text-white-75 mb-0">Welcome Admin, you have <a class="text-primary-light link-fx" href="be_pages_ecom_orders.html">12 pending orders</a>.</h2>
                    </div>
                    </div>
                </div>
                </div>

                <div class="bg-body-light border-bottom">
                <div class="content py-1 text-center">
                    <nav class="breadcrumb bg-body-light py-2 mb-0">
                    <a class="breadcrumb-item" href="be_pages_ecom_dashboard.html">e-Commerce</a>
                    <span class="breadcrumb-item active">Dashboard</span>
                    </nav>
                </div>
                </div>

                <div class="content">
                    <Outlet />
                </div>
                
            </main>
            <Footer />  
        </div>
    )
}

export default Master