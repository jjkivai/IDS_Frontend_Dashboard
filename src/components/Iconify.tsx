import { Icon, IconifyIcon } from "@iconify/react";
import { Box } from "@mui/material";

type IconifyPropTypes = {
    icon: IconifyIcon | string;
    sx?: object;
};

export default function Iconify({ icon, sx, ...other }: IconifyPropTypes) {
    return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
