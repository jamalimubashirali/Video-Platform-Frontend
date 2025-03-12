import React from 'react';
import Container from './Container';

const Footer = () => {
    return (
        <Container>
            <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </footer>
        </Container>
    );
};

export default Footer;