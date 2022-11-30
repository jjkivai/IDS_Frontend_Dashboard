import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// simplebar css
import "simplebar/src/simplebar.css";

// axios
import axios from "axios";

// Helmet and Router
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
//

// configure axios
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axios.defaults.headers.common.Authorization = `Api-Key ${process.env.REACT_APP_API_KEY!}`;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
