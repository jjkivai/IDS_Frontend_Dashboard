import { useLayoutEffect } from "react";
import List from "@mui/material/List";
import $ from "jquery";
// import "jquery-parallax.js";
// Custom imports
import SolarPanel from "../../../static/images/solarpanel.jpeg";
import Iconify from "../../../components/Iconify";
import { ListItemIconStyle, LogoRedirect } from "../../../components/StyledComponents";

export default function Home() {
    useLayoutEffect(() => {
        $(".smoothscroll").on("click", (e) => {
            const target = e.target.closest("a");
            if (target) {
                const hash = target.getAttribute("href");
                const $target = $(hash!);
                e.preventDefault();
                e.stopPropagation();
                $("html, body")
                    .stop()
                    .animate(
                        {
                            scrollTop: $target.offset()?.top,
                        },
                        800,
                        "swing"
                    )
                    .promise()
                    .done(() => {})
                    .catch((e) => {
                        console.log(e);
                    });
            }
        });
    });
    return (
        <section
            id="home"
            className="s-home target-section"
            data-parallax="scroll"
            data-image-src={SolarPanel}
            data-natural-width="3000"
            data-natural-height="2000"
            data-position-y="center"
        >
            <div className="overlay" />
            <div className="shadow-overlay" />
            <div className="home-content">
                <div className="row home-content__main">
                    <h3>Welcome to IDS</h3>

                    <h1>
                        Our Goal is to use <br />
                        Science and Engineering <br />
                        to Protect our Environment <br />
                    </h1>

                    <div className="home-content__buttons">
                        <a href="#contact" className="smoothscroll btn btn--stroke">
                            Join The Team
                        </a>
                        <a href="#about" className="smoothscroll btn btn--stroke">
                            More About Us
                        </a>
                    </div>
                </div>

                <div className="home-content__scroll">
                    <a href="#about" className="scroll-link smoothscroll">
                        <span>Scroll Down</span>
                    </a>
                </div>

                <div className="home-content__line" />
            </div>
            <List disablePadding className="home-social">
                <LogoRedirect to={"https://www.facebook.com/idsubco"}>
                    <ListItemIconStyle>
                        <Iconify icon={"logos:facebook"} sx={{ fontSize: "20px", color: "#3b5998" }} />
                    </ListItemIconStyle>
                </LogoRedirect>
                <LogoRedirect to={"https://www.linkedin.com/company/idsubco/about/"}>
                    <ListItemIconStyle>
                        <Iconify icon={"logos:linkedin-icon"} sx={{ fontSize: "20px", color: "#3b5998" }} />
                    </ListItemIconStyle>
                </LogoRedirect>
                <LogoRedirect to={"https://discord.com/invite/vkHyqVbbwB"}>
                    <ListItemIconStyle>
                        <Iconify icon={"logos:discord-icon"} sx={{ fontSize: "20px", color: "#3b5998" }} />
                    </ListItemIconStyle>
                </LogoRedirect>
                <LogoRedirect to={"https://www.instagram.com/idsubco/"}>
                    <ListItemIconStyle>
                        <Iconify icon={"fa:instagram"} sx={{ fontSize: "20px", color: "#ffffff", fontColor: "red" }} />
                    </ListItemIconStyle>
                </LogoRedirect>
            </List>
        </section>
    );
}
