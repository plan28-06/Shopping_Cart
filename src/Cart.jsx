import { useContext } from "react";
import { CartContext } from "./CartContext";
import styles from "./Cart.module.css";

const Cart = () => {
    const { selected, setselected, removeFromCart } = useContext(CartContext);
    return (
        <div>
            {Object.keys(selected).length === 0 ? (
                <h1 className={styles.emptycart}>No item is in the Cart</h1>
            ) : (
                <div className={styles.cartcontainer}>
                    <table>
                        <thead>
                            <tr className={styles.theading}>
                                <th className={styles.itemheading}>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(selected).map((id) => (
                                <tr key={selected[id].id}>
                                    <td>
                                        <p>{selected[id].title}</p>
                                    </td>
                                    <td>${selected[id].price}</td>
                                    <td>{selected[id].quantity}</td>
                                    <td>
                                        {selected[id].price *
                                            selected[id].quantity}
                                    </td>
                                    <td
                                        className={styles.removeicon}
                                        onClick={() =>
                                            setselected(
                                                removeFromCart(selected[id].id)
                                            )
                                        }>
                                        <img
                                            src="/src/delete.png"
                                            alt="del"
                                            width="30"
                                            height="30"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Cart;
