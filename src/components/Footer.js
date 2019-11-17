import React from 'react';
import moment from 'moment';

const Footer = () => (
    <footer className="footer text-center mb-5 mt-5">
        Designed &amp; Built by Marko Lukovic {moment().format("YYYY")} &copy;
    </footer>
);


export default Footer;