import { createBrowserRouter } from "react-router-dom";
import Login from "../../LoginSystem/Login/Login";
import Register from "../../LoginSystem/Register/Register";
import AddReviews from "../../Pages/AddReviwe/AddReviwe";
import Blogs from "../../Pages/Blogs/Blogs";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Main/Main";
import Review from "../../Pages/Review/Review";
import Update from "../../Pages/Update/Update";
import PrivateRouter from "../privateRouter/PrivateRouter";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <PrivateRouter><Details></Details></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/review',
                element: <Review></Review>
            },
            {
                path: '/addReviewSite/:id',
                element: <AddReviews></AddReviews>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
            }
        ]
    }

])

export default router;