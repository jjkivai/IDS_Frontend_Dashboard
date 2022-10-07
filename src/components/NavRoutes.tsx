import { IconifyIcon } from "@iconify/react";
import React from "react";
// component
import Iconify from "./Iconify";

/**ENSURE TO UPDATE routes.tsx  */

// @ts-ignore
const getIcon = (name: string | IconifyIcon) => <Iconify icon={name} width={22} height={22} />;

const navRoutes = [
    {
        title: "home",
        path: "/",
        icon: getIcon("ant-design:home-filled"),
    },
    {
        title: "dashboard",
        path: "/dashboard/",
        icon: getIcon("eva:pie-chart-2-fill"),
    },
    {
        title: "Not found",
        path: "/404",
        icon: getIcon("eva:alert-triangle-fill"),
    },
];

export default navRoutes;
