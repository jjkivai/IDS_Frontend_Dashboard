import { useRoutes } from "react-router-dom";

// layout
import MainLayout from "./Layout/MainLayout";
// Pages

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
        },
    ]);
}
