import { styled } from "@mui/material/styles";

const Row = styled("div")(({ theme }) => ({
    width: "94%",
    margin: "0 auto",
    maxWidth: "1200px",
    ":after": {
        content: '""',
        display: "table",
        clear: "both",
    },
    [theme.breakpoints.down(800)]: {
        width: "90%",
    },
    [theme.breakpoints.down(600)]: {
        width: "auto",
        paddingLeft: "25px",
        paddingRight: "25px",
    },
}));

export default Row;
