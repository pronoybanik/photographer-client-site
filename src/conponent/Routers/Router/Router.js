import { createBrowserRouter } from "react-router-dom";
import Login from "../../LoginSystem/Login/Login";
import Register from "../../LoginSystem/Register/Register";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Main/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <Details></Details>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }

])

export default router;