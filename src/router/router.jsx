import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([

    {
        path: "/",
        Component: RootLayout,
        children: [

            {
                index: true,
                Component: HomePage
            }
        ]
    }
])