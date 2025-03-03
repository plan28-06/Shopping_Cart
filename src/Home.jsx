import React from "react";
import styles from './Home.module.css'

function Home() {
    return (
        <div className={styles.home}>
            <h1>Welcome to Smart Cart</h1>
            <p>Discover our wide range of products and start shopping today!</p>
            <button to="/shop">Go to Shop</button>
        </div>
    );
}

export default Home;
