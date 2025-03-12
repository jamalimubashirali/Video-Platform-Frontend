import React, { useEffect , useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthWrapper = ({ children, authentication = true }) => {
  const [loader, setLoader] = useState(true);
  const navigte = useNavigate();
  const authStatus = useSelector((state) => state.auth.authStatus);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigte("/login");
    } else if (authentication && authStatus === authentication) {
      navigte("/");
    }
    setLoader(false);
  }, [authStatus, navigte, authentication]);

  return loader ? <div>Loading...</div> : <>{children}</>;
};

export default AuthWrapper;
