import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Cart from "./Cart.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartProvider from "./CartContext.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar></Navbar>
                <Home></Home>
            </>
        ),
        errorElement: (
            <>
                <h1>Lol ! Page Not Found lil bro </h1>
                <Link to="/">Click here to go back Home</Link>
            </>
        ),
    },
    {
        path: "/shop",
        element: (
            <>
                <Navbar></Navbar>
                <Shop></Shop>
            </>
        ),
    },
    {
        path:"/cart",
        element:(
            <>
                <Navbar></Navbar>
                <Cart></Cart>
            </>
        )
    }
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CartProvider>
            <RouterProvider router={router} />
        </CartProvider>
    </StrictMode>
);
