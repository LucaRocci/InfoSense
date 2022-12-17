//react imports
import { useEffect } from 'react';
//React router dom imports
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import FooterCustom from '../Footer/Footer.components';
//Components imports
import NavbarCustom from '../Navbar/Navbar.component';

const Root = () => {

    const {pathname} = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
   if(pathname === '/') {
    navigate('/home');
   }  
    },[pathname])


    return(
        <>
        <NavbarCustom />
        <Outlet />
        <FooterCustom/>
        </>
    )
}

export default Root;