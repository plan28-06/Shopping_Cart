import React from 'react'
import styles from  './Navbar.module.css'

const Navbar = () => {
return (
    <div className={styles.navbar}>
        <div className={styles.heading}><a href="/">SmartCart</a></div>
        <div className={styles.links}>
            <ul className={styles.links_list}>
                <li>Home</li>
                <li>Shop</li>
                <li><button>Cart</button></li>
            </ul>
        </div>
    </div>
)
}

export default Navbar
