import React from "react";
import styles from './Home.module.css'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className={styles.home}>
            <h1>Welcome to Smart Cart</h1>
            <p>Discover our wide range of products and start shopping today!</p>
            <Link to="/shop">
                <button>Go to Shop</button>
            </Link>
        </div>
    );  
}

export default Home;
