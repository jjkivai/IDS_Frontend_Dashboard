import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { NavLink as RouterLink, matchPath, useLocation, useMatch } from "react-router-dom";
import { useTheme, alpha } from "@mui/material/styles";
import { Box, List, Collapse, ListItemText, Typography, ListItemButtonProps } from "@mui/material";
import $ from "jquery";
// custom components
import Iconify from "../Iconify";
import { ListItemStyle, ListItemIconStyle, LogoRedirect } from "../StyledComponents";

interface NavSectionPropTypes {
    navConfig: NavItemType[];
    toggleSidebar: () => void;
}

export default function NavSection({ navConfig, toggleSidebar, ...other }: NavSectionPropTypes) {
    const { pathname, hash } = useLocation();

    const match = (path: string) => (path ? !!matchPath({ path, end: false }, pathname) : false);
    useLayoutEffect(() => {});
    useEffect(() => {}, [pathname, hash]);
    return (
        <Box {...other}>
            {/* TODO */}
            <List disablePadding sx={{ p: 1 }} className="header-nav__list">
                {navConfig.map((item: NavItemType) => (
                    <NavItem key={item.title} item={item} active={match} toggleSidebar={toggleSidebar} />
                ))}
            </List>
            <Typography paragraph fontSize={"1.3rem"} px={1}>
                IDS is UBC Okanagan's first sustainability-focused design club. IDS's roots stem from three core
                concepts- Innovate, Design and Sustain and use science, engineering and creativity for the betterment of
                our present and future Okanagan Campus.
            </Typography>
            <List disablePadding sx={{ display: "flex", flexDirection: "row" }}>
                <LogoRedirect to={"https://www.facebook.com/idsubco"}>
                    <ListItemIconStyle>
                        <Iconify icon={"logos:facebook"} sx={{ fontSize: "40px", color: "#3b5998" }} />
                    </ListItemIconStyle>
                </LogoRedirect>
                <LogoRedirect to={"https://www.linkedin.com/company/idsubco/about/"}>
                    <ListItemIconStyle>
                        <Iconify icon={"logos:linkedin-icon"} sx={{ fontSize: "40px", color: "#3b5998" }} />
                    </ListItemIconStyle>
                </LogoRedirect>
                <LogoRedirect to={"https://discord.com/invite/vkHyqVbbwB"}>
                    <ListItemIconStyle>
                        <Iconify icon={"logos:discord-icon"} sx={{ fontSize: "40px", color: "#3b5998" }} />
                    </ListItemIconStyle>
                </LogoRedirect>
                <LogoRedirect to={"https://www.instagram.com/idsubco/"}>
                    <ListItemIconStyle>
                        <Iconify icon={"fa:instagram"} sx={{ fontSize: "40px", color: "#ffffff", fontColor: "red" }} />
                    </ListItemIconStyle>
                </LogoRedirect>
            </List>
        </Box>
    );
}
interface NavItemProps extends ListItemButtonProps {
    item: NavItemType;
    // eslint-disable-next-line
    active: { (path: string): boolean };
    toggleSidebar: () => void;
}
function scrollToTop(event: Event, target: string, toggleSidebar: () => void) {
    const $target = $(target);
    event.preventDefault();
    event.stopPropagation();
    toggleSidebar();
    $("html, body")
        .stop()
        .animate({ scrollTop: $target.offset()?.top }, 800, "swing")
        .promise()
        .done(() => {
            window.location.hash = target;
        })
        .catch((e: Event) => {
            console.log(e);
        });
}
function scrollto0(e: Event, toggleSidebar: () => void) {
    toggleSidebar();
    const $target = $("body");
    $("html, body")
        .stop()
        .animate({ scrollTop: $target.offset()?.top }, 800, "swing")
        .promise()
        .done(() => {
            window.location.hash = "";
        })
        .catch((e: JQuery.Event) => {
            console.log(e);
        });
}

function NavItem({ item, active, toggleSidebar, ...other }: NavItemProps) {
    const theme = useTheme();
    const { hash } = useLocation();
    const isActiveRoot = !!useMatch(item.path);

    const { title, path, icon, info, children } = item;

    const [expanded, setExpanded] = useState(isActiveRoot);

    const activeRootStyle = {
        color: "primary.main",
        fontWeight: "fontWeightMedium",
        bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    };

    const activeSubStyle = {
        color: "text.primary",
        fontWeight: "fontWeightMedium",
    };

    if (children) {
        return (
            <>
                <ListItemStyle
                    sx={{
                        ...(isActiveRoot && activeRootStyle),
                    }}
                    component={isActiveRoot ? "div" : RouterLink}
                    to={isActiveRoot ? null : path}
                    onClick={
                        isActiveRoot
                            ? (e: Event) => scrollto0(e, toggleSidebar)
                            : () => {
                                  window.scrollTo(0, 0);
                              }
                    }
                    {...other}
                >
                    <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
                    <ListItemText disableTypography primary={title} />
                    {info && info}
                    <Iconify
                        icon={expanded ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-forward-fill"}
                        sx={{ width: 20, height: 20, ml: 1 }}
                        onClick={() => setExpanded(!expanded)}
                    />
                </ListItemStyle>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {children.map((item) => {
                            const { title, path, icon } = item;

                            const isActiveSub = active(path) ? active(path) : path === hash;

                            return (
                                <ListItemStyle
                                    key={title}
                                    component="a"
                                    to={path}
                                    sx={{
                                        ...(isActiveSub && activeSubStyle),
                                    }}
                                    className="smoothscroll"
                                    onClick={(e: Event) => {
                                        if (path.startsWith("#")) {
                                            scrollToTop(e, path, toggleSidebar);
                                        }
                                    }}
                                >
                                    <ListItemIconStyle>
                                        <Box
                                            component="span"
                                            sx={{
                                                marginX: "1rem",
                                                display: "flex",
                                                borderRadius: "50%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                bgcolor: "text.disabled",
                                                transition: (theme) => theme.transitions.create("transform"),
                                                ...(isActiveSub && {
                                                    transform: "scale(2)",
                                                    bgcolor: "primary.main",
                                                }),
                                            }}
                                        />
                                        <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
                                    </ListItemIconStyle>
                                    <ListItemText disableTypography primary={title} />
                                </ListItemStyle>
                            );
                        })}
                    </List>
                </Collapse>
            </>
        );
    }

    return (
        <ListItemStyle
            component={RouterLink}
            to={path}
            sx={{
                ...(isActiveRoot && activeRootStyle),
            }}
        >
            <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
            <ListItemText disableTypography primary={title} />
            {info && info}
        </ListItemStyle>
    );
}

type ChildItemType = {
    title: string;
    path: string;
    icon?: ReactNode;
};

type NavItemType = {
    title: string;
    path: string;
    icon: ReactNode;
    info?: string;
    children?: Array<ChildItemType>;
};
