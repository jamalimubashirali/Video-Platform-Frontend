import React , {useEffect} from "react";
import Layout from "./layouts/Layout";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/auth.slice";
import userService from "./services/user.service";

function App() {
  const [loader, setLoader] = React.useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    userService
      .getCurrentUser()
      .then((response) => {
        if (response.data) {
          dispatch(login(response.data));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log(`Error Getting Current User: ${error}`);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
