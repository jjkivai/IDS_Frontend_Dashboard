import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import $ from "jquery";
import AOS from "aos";
// importing needed libraries
import "imagesloaded";
import "masonry-layout";
import "slick-carousel";
// router
import Router from "./routes";
// Global application css
import "./App.css";
import ThemeProvider from "./Theme";
// Parallax
// import "jquery-parallax.js";

declare global {
    // eslint-disable-next-line
    interface Window {
        jQuery: JQueryStatic;
        $: JQueryStatic;
    }
}
window.jQuery = window.jQuery || $;
window.$ = window.$ || $;

function App() {
    // Initialize global jQuery
    const [isLoading, setIsLoading] = useState(true);
    const loaderRef = useRef(null);
    const preLoaderRef = useRef(null);
    // Initialize stuff app will require
    useEffect(() => {
        $(() => {
            /* @ts-ignore-next-line */
            import("jquery-parallax.js");
        });
        if (isLoading) {
            setLoader();
            /** TODO: SET UP A PROPER FUNCTION TO REMOVE LOADING */

            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        } else {
            removeLoader(loaderRef, preLoaderRef);
        }
    });
    useLayoutEffect(() => {
        // Initialize AOS after App is rendered
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 300,
            once: true,
        });
    }, []);
    return isLoading ? (
        <PreLoader loaderRef={loaderRef} preLoaderRef={preLoaderRef} />
    ) : (
        <ThemeProvider>
            <Helmet>
                {/* <script src="/js/parallax.min.js" async />
                <script src="/js/waypoints.min.js" async /> */}
                <script src="static/js/libraries.js" type="application/js" />
                <script src="static/js/external.js" type="application/js" />
            </Helmet>
            <Router />
        </ThemeProvider>
    );
}

export default App;

// Use themeprovider if theme needs changing

// Set up loader
const setLoader = () => {
    $("html").addClass("cl-preload");
};
// Remove loader
const removeLoader = (loaderRef: React.MutableRefObject<null>, preLoaderRef: React.MutableRefObject<null>) => {
    $(loaderRef).fadeOut("slow", () => {
        $(preLoaderRef).delay(300).fadeOut("slow");
    });
    $("html").removeClass("cl-preload");
    $("html").addClass("cl-loaded");
};
type PreLoaderPropTypes = {
    loaderRef: React.MutableRefObject<null>;
    preLoaderRef: React.MutableRefObject<null>;
};
// Preloader element
const PreLoader = ({ loaderRef, preLoaderRef }: PreLoaderPropTypes) => (
    <div id="preloader" ref={preLoaderRef}>
        <div id="loader" ref={loaderRef}>
            <div className="line-scale-pulse-out">
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    </div>
);
