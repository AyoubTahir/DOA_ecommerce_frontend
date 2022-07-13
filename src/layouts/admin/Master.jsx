import { useEffect, useRef } from 'react';
import { Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { checkToken } from '../../actions/auth';

const Master = () => {

    const effectRan = useRef(false)

    const { loading } = useSelector((state) => state.auth);
    const { toggleSidebar, toggleMode } = useSelector((state) => state.template);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        
        if (!effectRan.current)
        {
            dispatch(checkToken(navigate))

            return () => effectRan.current = true
        }
        
    },[dispatch, navigate])

    if (!localStorage.getItem('auth_token'))
        return <Navigate to="/admin/login" state={{ from: location }} replace />;
    
    return (
        <div id="page-container" className={`${toggleSidebar && 'sidebar-o' } sidebar-dark enable-page-overlay side-scroll page-header-glass page-header-dark main-content-boxed ${!toggleSidebar && 'sidebar-o-xs' } side-trans-enabled ${ toggleMode && 'dark-mode'}`}>
            {loading && <div id="page-loader" className="show"></div>}
            <Sidebar />
            <Navbar />
            <main id="main-container">
                <Outlet /> 
            </main>
            <Footer />  
        </div>
    )
}

export default Master