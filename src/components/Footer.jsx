import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full">
      <Container>
        <div className="container mx-auto flex justify-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
