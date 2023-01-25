import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts//Main'
import Login from '../../src//Login//Login'
import Home from "../Pages/Home/Home";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },

            {
                path: '/login',
                element: <Login/>
            },
        ]
    }
    
])

export default router;