import { useEffect } from "react";
import $ from "jquery";

// type footerPropsType = {
//     appRef: RefObject<HTMLDivElement>;
// };
export default function Footer() {
    useEffect(() => {
        const pxShow = 500; // height on which the button will show
        const fadeInTime = 400; // how slow/fast you want the button to show
        const fadeOutTime = 400; // how slow/fast you want the button to hide
        const goTopButton = $(".go-top");
        // Show or hide the sticky footer button
        $(window).on("scroll", () => {
            const winTop = $(window).scrollTop();
            if (winTop! >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    });

    return (
        <footer>
            <div className="row footer-main">
                <div className="col-six tab-full left footer-desc">
                    <div className="footer-logo" />
                    IDS is UBC Okanagan's first sustainability-focused design club. IDS's roots stem from three core
                    concepts- Innovate, Design and Sustain and use science, engineering and creativity for the
                    betterment of our present and future Okanagan Campus.
                </div>
                <div className="col-six tab-full right footer-subscribe">
                    <h4>Get Notified</h4>
                    <p>
                        Join our mailing list to get notified about latest ids news, articles, and resources sent
                        straight to your inbox every month.
                    </p>
                    <div className="subscribe-form">
                        <a
                            className="btn"
                            href="https://forms.gle/HLXbMb7WM9nShshF7"
                            target={"_blank"}
                            rel={"noreferrer noopener"}
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: 0,
                                color: "#ffffff",
                                background: "#39b54a",
                                borderColor: "#39b54a",
                                padding: "0 20px",
                            }}
                        >
                            Subscribe
                        </a>
                    </div>
                </div>
            </div>
            <div className="row footer-bottom">
                <div className="col-twelve">
                    <div className="copyright">
                        <span>© Copyright IDS 2022</span>
                        <span>
                            Designed and Developed by <a href="https://samiraliyev.com/">Samir Aliyev</a>
                        </span>
                    </div>

                    <div className="go-top">
                        <a
                            className=""
                            title="Back to Top"
                            onClick={(e) => {
                                e.preventDefault();
                                const $target = $("body");
                                $("html, body")
                                    .stop()
                                    .animate({ scrollTop: $target.offset()?.top }, 800, "swing")
                                    .promise()
                                    .done(() => {
                                        window.location.hash = "";
                                    })
                                    .catch((e) => {
                                        console.log(e);
                                    });
                            }}
                            href=""
                        >
                            <i className="icon-arrow-up" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
