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

const RootStyle = styled("header")(({ theme }) => ({
    height: "96px",
    width: "100%",
    position: "absolute",
    backgroundColor: "transparent",
    top: 0,
    zIndex: 500,
    [theme.breakpoints.up("lg")]: {
        flexShrink: 0,
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
            <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
                <IconButton
                    onClick={onCloseSidebar}
                    sx={{
                        color: "green",
                        position: "fixed",
                        right: "38px",
                        top: "24px",
                    }}
                >
                    <Iconify icon="ep:close-bold" />
                </IconButton>
            </Box>

            <NavSection navConfig={navRoutes} />
            <Box sx={{ flexGrow: 1 }} />
        </Scrollbar>
    );
    return (
        <RootStyle>
            <Box
                sx={{
                    left: "50px",
                    position: "absolute",
                    top: "24px",
                    display: "inline-flex",
                    zIndex: 501,
                }}
            >
                <Logo sx={{ width: 50, height: 50 }} />
            </Box>
            <IconButton
                onClick={onOpenSidebar}
                sx={{
                    color: "green",
                    position: "fixed",
                    right: "38px",
                    top: "24px",
                    backgroundColor: "rgba(99, 115, 129, 0.2)",
                }}
            >
                <Iconify icon="eva:menu-2-fill" sx={{ fontSize: "40px" }} />
            </IconButton>

            <Drawer
                open={isOpenSidebar}
                onClose={onCloseSidebar}
                anchor="right"
                PaperProps={{
                    sx: { width: DRAWER_WIDTH },
                }}
            >
                {renderContent}
            </Drawer>
        </RootStyle>
    );
}
/**mr: 1, color: "text.primary", display: {}  */
