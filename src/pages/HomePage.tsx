import { useState } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";

const RootStyle = styled("section")({
    width: "100%",
    height: "100%",
});

export default function HomePage() {
    return <RootStyle></RootStyle>;
}
