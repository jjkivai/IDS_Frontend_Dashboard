import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";

import LogoImage from "../../static/images/logo.png";

type LogoPropType = {
    disabledLink?: boolean;
    sx?: object;
};
export default function Logo({ disabledLink = false, sx }: LogoPropType) {
    const logo = <Box component="img" src={LogoImage} sx={{ width: 40, height: 40, ...sx }} />;

    if (disabledLink) {
        return <>{logo}</>;
    }

    return <RouterLink to="/">{logo}</RouterLink>;
}
