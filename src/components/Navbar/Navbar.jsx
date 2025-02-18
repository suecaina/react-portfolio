import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import menuIcon from '../../../src/assets/nav/menuIcon.png'
import closeIcon from '../../../src/assets/nav/closeIcon.png'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // 
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                <img
                    src={menuOpen ? closeIcon : menuIcon} // Toggle icon
                    alt="Menu icon"
                    onClick={() => setMenuOpen(!menuOpen)} // Toggle menu on click
                    className={styles.menuIcon}
                />

                {/* Conditionally add 'menuOpen' class if menu is open */}
                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};


