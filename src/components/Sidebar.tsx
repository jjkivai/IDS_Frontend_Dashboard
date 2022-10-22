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

const Header = styled("header")(({ theme }) => ({}));

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
            <Box sx={{ display: "inline-flex" }}>
                <IconButton
                    onClick={onCloseSidebar}
                    sx={{
                        color: "green",
                        position: "fixed",
                        right: "38px",
                        top: "24px",
                        width: 40,
                        height: 40,
                        ":hover": {
                            backgroundColor: "rgba(99, 115, 129, 0.2)",
                            color: "green",
                        },
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
        <Header className="s-header">
            <Box className="header-logo">
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
                    sx: { width: DRAWER_WIDTH, backgroundColor: "#0c0c0c" },
                }}
            >
                {renderContent}
            </Drawer>
        </Header>
    );
}
/**mr: 1, color: "text.primary", display: {}  */
