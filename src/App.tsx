import React from "react";
// router
import Router from "./routes";
//theme
import ThemeProvider from "./theme";
// custom css
import "./App.css";

function App() {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    );
}

export default App;
