import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Drawer, IconButton } from "@mui/material";
// hooks
import useResponsive from "../hooks/useResponsive";
// components
import Logo from "./Logo";
import Scrollbar from "./Scrollbar";
import NavSection from "./NavSection";
// Navigation routes
import navRoutes from "./NavRoutes";
import Iconify from "./Iconify";

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
        flexShrink: 0,
        width: DRAWER_WIDTH,
    },
}));

type SidebarPropTypes = {
    isOpenSidebar: boolean;
    onCloseSidebar: () => void;
    onOpenSidebar: () => void;
};

export default function Sidebar({ isOpenSidebar, onCloseSidebar, onOpenSidebar }: SidebarPropTypes) {
    const { pathname } = useLocation();

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
        // eslint-disable-next-line
    }, [pathname]);
    const renderContent = (
        <Scrollbar
            sx={{
                height: 1,
                "& .simplebar-content": { height: 1, display: "flex", flexDirection: "column" },
            }}
        >
            <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
                <Logo />
            </Box>

            <NavSection navConfig={navRoutes} />
            <Box sx={{ flexGrow: 1 }} />
        </Scrollbar>
    );
    return (
        <RootStyle>
            <IconButton onClick={onOpenSidebar} sx={{ ml: 1, mt: 1, color: "text.primary", display: {} }}>
                <Iconify icon="eva:menu-2-fill" />
            </IconButton>

            <Drawer
                open={isOpenSidebar}
                onClose={onCloseSidebar}
                PaperProps={{
                    sx: { width: DRAWER_WIDTH },
                }}
            >
                {renderContent}
            </Drawer>
        </RootStyle>
    );
}
