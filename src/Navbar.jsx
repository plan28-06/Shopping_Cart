import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.heading}>
                <Link to="/">SmartCart</Link>
            </div>
            <div className={styles.links}>
                <ul className={styles.links_list}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li>
                        <button>Cart</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
