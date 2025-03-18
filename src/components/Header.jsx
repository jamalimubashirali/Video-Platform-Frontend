import React from 'react'
import {Button , Container} from "./index";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
    const isLoggedIn = useSelector((state) => state.auth.authStatus);
  return (
    <Container>
        <div className="flex justify-between items-center">
            <div>
            <h1 className="text-2xl font-bold">Video Platform</h1>
            </div>
            isLoggedin ? (
                <div>
                    UserLoggedIn
                </div>
            ) : (
                <div>
                <Button className="bg-blue-500" textColor="text-white">
                    <Link to={"/login"}>
                        Get Started
                    </Link>
                </Button>
                <Button>
                    <Link to={"/register"}>
                        Login
                    </Link>
                </Button>
            </div>
            )
        </div>
    </Container>
  );
}

export default Header
