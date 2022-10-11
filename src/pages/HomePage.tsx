import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Row from "../components/Row";
import SolarPanel from "../static/images/solarpanel.jpeg";

const RootStyle = styled("section")(({ theme }) => ({
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    display: "table",
    position: "relative",
    minHeight: "786px",
    [theme.breakpoints.down("sm")]: {
        minHeight: "642px",
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
const HomeContent = styled("div")(({ theme }) => ({
    display: "table-cell",
    width: "100%",
    height: "100%",
    verticalAlign: "middle",
    paddingBottom: "15.6rem",
    position: "relative",
    overflow: "hidden",
    "& h3": {
        fontFamily: '"montserrat-medium", sans-serif',
        fontSize: "1.6rem",
        color: "rgba(255, 255, 255, 0.5)",
        textTransform: "uppercase",
        letterSpacing: "0.3rem",
        position: "relative",
        marginTop: "0",
        marginBottom: "1.2rem",
        marginLeft: "6px",
    },
    "& h1": {
        fontFamily: '"montserrat-medium", sans-serif',
        fontSize: "6.3rem",
        lineHeight: "1.333",
        marginTop: "0",
        color: "#ffffff",
        [theme.breakpoints.down("sm")]: {
            fontSize: "3.2rem",
        },
    },
}));
const HomeContentMain = styled(Row)(({ theme }) => ({
    paddingTop: "24rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        maxWidth: "none",
        paddingTop: "15rem",
        paddingRight: "25px",
        width: "85%",
    },
}));
const ButtonsContainer = styled("div")(({ theme }) => ({
    paddingTop: "6rem",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
        paddingTop: "1.2rem",
        textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
        paddingTop: "1.2rem",
    },
}));
const PageButton = styled(Button)(({ theme }) => ({
    width: "215px",
    borderColor: "#ffffff",
    color: "#ffffff",
    margin: "1.5rem 1.5rem 0 0",
    letterSpacing: "0.25rem",
    transition: "all 0.5s ease-in-out",
    display: "inline-block",
    fontSize: "1.2rem",
    textTransform: "uppercase",
    height: "5.4rem",
    border: "0.2rem solid #c5c5c5",
    marginBottom: "1.2rem",
    borderRadius: 0,
    ":hover": {
        backgroundColor: "#b8b8b8",
        borderColor: "#b8b8b8",
        color: "#000000",
        outline: 0,
    },
    [theme.breakpoints.down("md")]: {
        display: "block",
        width: "70%",
        margin: "1.5rem 0 0 0",
    },
    [theme.breakpoints.down("sm")]: {
        width: "auto",
        margin: "1.5rem 0 0 0",
    },
}));
export default function HomePage() {
    return (
        <RootStyle
            style={{
                backgroundImage: `url(${SolarPanel})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <Overlay />
            <ShadowOverlay />
            <HomeContent>
                <HomeContentMain>
                    <h3>Welcome to IDS</h3>
                    <h1>
                        Our Goal is to use <br />
                        Science and Engineering <br />
                        to Protect our Environment <br />
                    </h1>
                    <ButtonsContainer>
                        <PageButton variant="outlined">Join The Team</PageButton>
                        <PageButton variant="outlined">About Us</PageButton>
                    </ButtonsContainer>
                </HomeContentMain>
            </HomeContent>
        </RootStyle>
    );
}
