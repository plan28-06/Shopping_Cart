import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";
import { Link } from "react-router-dom";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <App></App>
                <Navbar></Navbar>
                <Home></Home>
            </>
        ),
        errorElement: (
            <>
                <h1>Lol ! Page Not Found lil bro </h1>
                <Link to='/'>Click here to go back Home</Link>
            </>
        ),
    },
    {
        path: "/shop",
        element: (
            <>
                <App></App>
                <Navbar></Navbar>
                <Shop></Shop>
            </>
        ),
    },
]);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
);
