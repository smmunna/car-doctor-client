import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from '../components/Home/Home';
import Login from "../components/Login/Login";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Signup from "../components/Signup/Signup";
import BookingCart from "../components/BookingCart/BookingCart";
import Mybookings from "../components/Mybookings/Mybookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/mybookings",
                element: <PrivateRoute><Mybookings/></PrivateRoute>
            },
            {
                path:"/bookingcarts/:id",
                element:<PrivateRoute><BookingCart/></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/bookingcarts/${params.id}`)
            }
        ]
    },
]);

export default router;
