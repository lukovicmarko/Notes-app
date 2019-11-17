import React from 'react';

const Header = ({ title }) => (
    <header className="header">
        <h1 className="text-center p-5">
            {title}
        </h1>
    </header>
);

export default Header;