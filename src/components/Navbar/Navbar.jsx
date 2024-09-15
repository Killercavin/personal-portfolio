import styles from "./Navbar.module.css";
import { useState } from "react";
import { Link } from 'react-router-dom';
import menuIcon from '/images/nav/menuIcon.png';
import closeIcon from '/images/nav/closeIcon.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <Link className={styles.title} to="/">Home</Link>
            <div className={styles.menu}>
                <img src={menuOpen ? closeIcon : menuIcon} alt="menu-btn" className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}/>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} >
                    <li><Link to="/About" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/Experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
                    <li><Link to="/Projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                    {/** <li><Link to="/Blog" onClick={() => setMenuOpen(false)}>Blogs</Link></li> **/}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;