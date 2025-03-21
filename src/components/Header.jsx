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
            <Link to={"/"}>
                <h1 className="text-2xl font-bold cursor-pointer">Video Platform</h1>
            </Link>
            </div>
            {
                isLoggedIn ? (
                    <div>
                        UserLoggedIn
                    </div>
                ) : (
                    <div className='space-x-2'>
                    <Button className="bg-blue-500" textColor="text-white">
                        <Link to={"auth/register"}>
                            Get Started
                        </Link>
                    </Button>
                    <Button>
                        <Link to={"auth/login"}>
                            Login
                        </Link>
                    </Button>
                </div>
                )
            }
        </div>
    </Container>
  );
}

export default Header;
