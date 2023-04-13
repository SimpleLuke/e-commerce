import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root/Root";
import App from "./App";
import ErrorPage from "./components/error-page/ErrorPage";
import SignIn from "./routes/sign-in/SignIn";
import SignUp from "./routes/sign-up/SignUp";
import { UserProvider } from "./contexts/user.context";
import reportWebVitals from "./reportWebVitals";
import Collection from "./routes/collection/collection";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import Checkout from "./routes/checkout/Checkout";
import Category from "./components/category/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/collections",
        element: <Collection />,
      },
      {
        path: "/collections/hats",
        element: <Category title="hats" />,
      },
      {
        path: "/collections/jackets",
        element: <Category title="jackets" />,
      },
      {
        path: "/collections/mens",
        element: <Category title="mens" />,
      },
      {
        path: "/collections/sneakers",
        element: <Category title="sneakers" />,
      },
      {
        path: "/collections/womens",
        element: <Category title="womens" />,
      },

      {
        path: "/checkout",
        element: <Checkout />,
      },
      ,
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
