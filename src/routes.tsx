import { useRoutes } from "react-router-dom";
import { MainLayout } from "./components/Layouts";
import { Home } from "./pages";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
            ],
        },
    ]);
}
