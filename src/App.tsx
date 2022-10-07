import React from "react";
// router
import Router from "./routes";
//theme
import ThemeProvider from "./theme";

function App() {
    return (
        <ThemeProvider>
            <Router />
        </ThemeProvider>
    );
}

export default App;
