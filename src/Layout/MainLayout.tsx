import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";

// component import
// import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled("div")({
    display: "flex",
    minHeight: "100%",
    overflow: "hidden",
});
const MainStyle = styled("div")(({ theme }) => ({
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
}));

export default function MainLayout() {
    const [open, setOpen] = useState(true);
    return (
        <RootStyle>
            {/* <Navbar onOpenSidebar={() => setOpen(true)} /> */}
            <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} onOpenSidebar={() => setOpen(true)} />
            <MainStyle>
                <Outlet />
            </MainStyle>
        </RootStyle>
    );
}
/**
 * const MainStyle = styled("div")(({ theme }) => ({
    flexGrow: 1,
    overflow: "auto",
    minHeight: "100%",
    // paddingTop: APP_BAR_MOBILE + 0,
    // paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("lg")]: {
        paddingTop: APP_BAR_DESKTOP + 0,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));
 */
