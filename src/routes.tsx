import { element } from "prop-types";
import { useRoutes } from "react-router-dom";

// layout
import MainLayout from "./Layout/MainLayout";
import HomePage from "./pages/HomePage";
import HomePage2 from "./pages/HomePage2";
// Pages

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <HomePage2 />,
                },
            ],
        },
    ]);
}
