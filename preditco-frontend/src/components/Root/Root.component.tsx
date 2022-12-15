import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Root = () => {

    const {pathname} = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
   if(pathname === '/') {
    navigate('/home');
   }  
    },[pathname])


    return(
        <><>NAVBAR</>
        <Outlet />
        </>
    )
}

export default Root;