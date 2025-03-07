import React, { useEffect, useState } from "react";
import styles from "./Shop.module.css";

const Shop = () => {
    const [items, setItems] = useState([]); 
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setItems(data); // Store data properly
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []); 

    return (
        <div className={styles["grid-container"]}>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={`${styles["grid-item"]} ${
                        styles[`item-${index}`]
                    }`}>
                    <div className={styles.itemimage}>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className={styles.iteminfo}>
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                    </div>
                    <div className={styles.itembuttons}>
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;
