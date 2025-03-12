import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";
import {createBrowserRouter , RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children : [
      {
        path:"/login",
        element:<></>
      },
      {
        path:"/register",
        element:<></>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
