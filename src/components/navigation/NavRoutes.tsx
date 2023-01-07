import { IconifyIcon } from "@iconify/react";
import React from "react";
// component
import Iconify from "../Iconify";

/** ENSURE TO UPDATE routes.tsx  */

// @ts-ignore
const getIcon = (name: string | IconifyIcon) => <Iconify icon={name} width={22} height={22} />;

const navRoutes = [
    {
        title: "home",
        path: "/",
        icon: getIcon("ant-design:home-filled"),
        children: [
            {
                title: "About",
                path: "#about",
                icon: getIcon("mdi:about-variant"),
            },
            {
                title: "Services",
                path: "#services",
                icon: getIcon("ic:round-miscellaneous-services"),
            },
            {
                title: "Projects",
                path: "#works",
                icon: getIcon("material-symbols:check"),
            },
            {
                title: "The Team",
                path: "#team",
                icon: getIcon("fluent:people-team-16-filled"),
            },
            {
                title: "Testimonials",
                path: "#testimonials",
                icon: getIcon("dashicons:testimonial"),
            },
        ],
    },
    {
        title: "Solar Bench",
        path: "/solar_bench",
        icon: getIcon("ic:outline-solar-power"),
        children: [
            {
                title: "dashboard",
                path: "dashboard",
                icon: getIcon("eva:pie-chart-2-fill"),
            },
        ],
    },
    {
        title: "Campus Waste Innitiative",
        path: "/campus_waste_initiative",
        icon: getIcon("maki:waste-basket"),
    },
];

export default navRoutes;
