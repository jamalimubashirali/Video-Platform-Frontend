import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const isLoginOrSignup = location.pathname === "/login" || location.pathname === "/register";
  return (
    <div>
      {!isLoginOrSignup && <Header />}
      <Outlet />
      {!isLoginOrSignup && <Footer />}
    </div>
  )
}

export default Layout;
