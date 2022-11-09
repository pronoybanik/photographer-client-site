import { createBrowserRouter } from "react-router-dom";
import Login from "../../LoginSystem/Login/Login";
import Register from "../../LoginSystem/Register/Register";
import AddReviews from "../../Pages/AddReviwe/AddReviwe";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Main/Main";
import Review from "../../Pages/Review/Review";
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

            }
        ]
    }

])

export default router;