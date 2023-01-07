import { useRoutes } from "react-router-dom";
import { MainLayout } from "./components/Layouts";
import { Cwi, Dashboard, Home, SolarBench } from "./pages";

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
                {
                    path: "campus_waste_initiative",
                    element: <Cwi />,
                },
                {
                    path: "solar_bench/dashboard",
                    element: <Dashboard />,
                },
            ],
        },
    ]);
}
