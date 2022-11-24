import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import { Box, BoxProps } from "@mui/material";

interface IconifyPropTypes extends BoxProps {
    icon: IconifyIcon | string;
    sx?: object;
}

export default function Iconify({ icon, sx, ...other }: IconifyPropTypes) {
    return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
