import { styled, Theme } from "@mui/material/styles";
import { ListItemButton, ListItemIcon } from "@mui/material";

const ListItemStyle = styled((props: any) => <ListItemButton disableGutters {...props} />)(
    ({ theme }: { theme: Theme }) => ({
        height: 48,
        position: "relative",
        textTransform: "capitalize",
        color: theme.palette.text.secondary,
        borderRadius: theme.shape.borderRadius,
        fontFamily: '"montserrat-regular", sans-serif',
        fontSize: "1.8rem",
    })
);
const ListItemIconStyle = styled(ListItemIcon)({
    alignItems: "center",
    justifyContent: "center",
});
const LogoRedirect = styled((props: any) => (
    <ListItemStyle component={"a"} rel="noopener noreferrer" target="_blank" {...props} />
))({
    alignItems: "center",
    justifyContent: "center",
});

export { ListItemStyle, ListItemIconStyle, LogoRedirect };
