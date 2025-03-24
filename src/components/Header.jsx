import React from "react";
import { Avatar, Button, Container } from "./index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.status);
  const userAvatar = useSelector((state) => state.auth.userData?.avatar);
  return (
    <div className="bg-white">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <h1 className="text-2xl font-bold cursor-pointer">
              Video Platform
            </h1>
          </Link>
          {isLoggedIn ? (
            <div>
              <Avatar avatar={userAvatar} />
            </div>
          ) : (
            <div className="space-x-2">
              <Button className="bg-blue-500" textColor="text-white">
                <Link to={"auth/register"}>Get Started</Link>
              </Button>
              <Button>
                <Link to={"auth/login"}>Login</Link>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
