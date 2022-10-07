import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import IDSLogo from "../static/logo.png";

type LogoPropType = {
    disabledLink?: boolean;
    sx?: object;
};
export default function Logo({ disabledLink = false, sx }: LogoPropType) {
    const theme = useTheme();

    const logo = <Box component="img" src={IDSLogo} sx={{ width: 40, height: 40, ...sx }} />;

    if (disabledLink) {
        return <>{logo}</>;
    }

    return <RouterLink to="/">{logo}</RouterLink>;
}
