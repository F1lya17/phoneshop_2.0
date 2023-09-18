import Link from "next/link";
import React from "react";

const Footer = function () {
    return (
        <footer className="footer">
            <h2 className="footer__copy">Это тренировычный сайт<br />Никакие правы не защищены</h2>
            <Link className="footer__link" href='/about'>О нас</Link>
        </footer>
    );
}

export default Footer;