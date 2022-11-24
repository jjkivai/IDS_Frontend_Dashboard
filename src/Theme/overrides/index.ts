import { Theme } from "@mui/material";

import Paper from "./Paper";
import Backdrop from "./Backdrop";

export default function ComponentOverrides(theme: Theme) {
    return Object.assign(Paper(), Backdrop(theme));
}
