import React from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({children}) => {
    const location = useLocation();
    const isLoginOrSignup = location.pathname === "/login" || location.pathname === "/register";
  return (
    <div>
      {!isLoginOrSignup && <Header />}
      {children}
      {!isLoginOrSignup && <Footer />}
    </div>
  )
}

export default Layout;
