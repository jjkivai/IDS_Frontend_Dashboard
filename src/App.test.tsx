import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("checks if welcome fades up", () => {
    render(<App />);
    const Welcome = screen.getByText(/WELCOME TO IDS/i);
    expect(Welcome).toBeInTheDocument();
});
