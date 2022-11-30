import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, Drawer, IconButton } from "@mui/material";
// custom components
import Logo from "./Logo";
import Scrollbar from "./Scrollbar";
import Iconify from "../Iconify";
import NavSection from "./NavSection";
import navRoutes from "./NavRoutes";

const DRAWER_WIDTH = 280;

const HeaderNav = styled(Box)({
    background: "#0c0c0c",
    color: "rgba(255, 255, 255, 0.25)",
    fontFamily: '"montserrat-light", sans-serif',
    fontSize: "1.3rem",
    lineHeight: "1.846",
    zIndex: 700,
    overflowY: "auto",
    overflowX: "hidden",
    "& p": {
        marginBottom: "2.7rem",
    },
});

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const toggleSidebar = () => {
        setOpen(!open);
    };
    useEffect(() => {
        if (open) {
            toggleSidebar();
        }
    }, [pathname]);
    const renderLinks = (
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
                    onClick={toggleSidebar}
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
            <HeaderNav>
                <NavSection navConfig={navRoutes} toggleSidebar={toggleSidebar} />
            </HeaderNav>
            <Box sx={{ flexGrow: 1 }} />
        </Scrollbar>
    );
    return (
        <header className="s-header">
            <Box className="header-logo">
                <Logo sx={{ width: 50, height: 50 }} />
            </Box>
            <IconButton
                onClick={toggleSidebar}
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
                open={open}
                onClose={() => setOpen(false)}
                anchor="right"
                PaperProps={{
                    sx: { width: DRAWER_WIDTH, backgroundColor: "#0c0c0c" },
                }}
            >
                {renderLinks}
            </Drawer>
        </header>
    );
}
