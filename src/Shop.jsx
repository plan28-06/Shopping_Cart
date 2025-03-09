import React, { useContext, useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { CartContext } from "./CartContext";

const Shop = () => {
    const [items, setItems] = useState([]);
    const [quantities, setquantities] = useState({});
    const {selected, setselected} = useContext(CartContext);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())        
            .then((data) => {
                const initialQuantities = {};
                data.forEach((item) => {
                    initialQuantities[item.id] = { quantity: 1 };
                });
                setquantities(initialQuantities);
                setItems(data);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const increase = (id) => {
        setquantities((prev) => ({
            ...prev,
            [id]: { quantity: prev[id].quantity + 1 },
        }));
    };

    const decrease = (id) => {
        setquantities((prev) => ({
            ...prev,
            [id]: { quantity: Math.max(prev[id].quantity - 1 ,1)},
        }));
    };

    const addselected = (id, quantity,title,price) => {
        setselected((prev) => ({
            ...prev,
            [id]: { id, quantity,title,price},
        }));
    };

    useEffect(() => {
        console.log(selected);
    }, [selected]);

    return (
        <div className={styles["grid-container"]}>
            {items.map((item) => (
                <div key={item.id} className={styles["grid-item"]}>
                    <div className={styles.itemimage}>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className={styles.iteminfo}>
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                    </div>
                    <div className={styles.itembuttons}>
                        <button onClick={() => increase(item.id)}>+</button>
                        <input
                            type="text"
                            min={1}
                            value={quantities[item.id].quantity}
                            readOnly
                        />
                        <button onClick={() => decrease(item.id)}>-</button>
                    </div>
                    <div className={styles.addtocart}>
                        <button
                            className={styles.atc}
                            onClick={() =>
                                addselected(
                                    item.id,
                                    quantities[item.id].quantity,
                                    item.title,
                                    item.price,
                                )
                            }>
                            Add To Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shop;
