import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, SideBarNavigation } from "../components";

const Layout = ({ header = true, footer = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      {header && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>
      )}

      <div className="flex flex-1 pt-16"> {/* Add padding-top to account for the fixed header */}
        {/* Fixed Sidebar */}
        <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-100 z-40">
          <SideBarNavigation />
        </div>

        {/* Scrollable Main Content */}
        <main className="flex-1 p-4 overflow-y-auto ml-64 mt-16"> {/* Add margin-left and margin-top to account for the fixed sidebar and header */}
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      {footer && <Footer />}
    </div>
  );
};

export default Layout;