import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Row from "../components/Row";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SolarPanel from "../static/images/solarpanel.jpeg";

const PageSection = styled("section")(({ theme }) => ({
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    display: "table",
    position: "relative",
    minHeight: "786px",
    backgroundImage: `url(${SolarPanel})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    [theme.breakpoints.down(500)]: {
        minHeight: "642px",
    },
    [theme.breakpoints.down(400)]: {
        minHeight: "630px",
    },
}));
const Overlay = styled("div")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.6,
    backgroundColor: "#000000",
});
const ShadowOverlay = styled("div")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.4,
});
const HomeContent = styled(Container)(({ theme }) => ({
    display: "table-cell",
    width: "100%",
    height: "100%",
    verticalAlign: "middle",
    paddingBottom: "15.6rem",
    position: "relative",
    overflow: "hidden",
    "& h3": {
        color: "rgba(255, 255, 255, 0.5)",
        textTransform: "uppercase",
        letterSpacing: "0.3rem",
        marginBottom: "1.2rem",
    },
    "& h1": {
        marginTop: "0",
        color: "#ffffff",
    },
}));
const HomeContentMain = styled(Grid)(({ theme }) => ({
    position: "relative",
    [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        maxWidth: "none",
        paddingRight: "25px",
        width: "85%",
    },
}));

export default function HomePage2() {
    return (
        <PageSection>
            <Overlay />
            <ShadowOverlay />
            <HomeContent sx={{ backgroundColor: { sm: "red", xs: "blue" } }}>
                <HomeContentMain container sx={{ backgroundColor: "red" }}>
                    <Grid item xs={12} sx={{ backgroundColor: "green" }}>
                        <Typography variant="h3" fontSize={"1.3rem"}>
                            Welcome to IDS
                        </Typography>
                        <Typography variant="h1" sx={{ fontSize: { xs: "4rem", md: "6.4rem" } }}>
                            Our Goal is to use <br />
                            Science and Engineering <br />
                            to Protect our Environment <br />
                        </Typography>
                    </Grid>
                </HomeContentMain>
            </HomeContent>
        </PageSection>
    );
}
