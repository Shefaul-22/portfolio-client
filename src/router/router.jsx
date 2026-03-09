import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../Pages/HomePage/HomePage";
import ProjectDetails from "@/Pages/HomePage/Projects/ProjectDetails";

export const router = createBrowserRouter([

    {
        path: "/",
        Component: RootLayout,
        children: [

            {
                index: true,
                Component: HomePage
            },

            {
                path: "project-details/:id",
                Component: ProjectDetails
            }
        ]
    }
])