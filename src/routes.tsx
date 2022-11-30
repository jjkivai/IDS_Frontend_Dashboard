import { useRoutes } from "react-router-dom";
import { MainLayout } from "./components/Layouts";
import { Home, SolarBench } from "./pages";

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
                {
                    path: "solar_bench",
                    element: <SolarBench />,
                },
            ],
        },
    ]);
}
