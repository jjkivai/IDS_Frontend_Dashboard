import { ReactNode, useMemo } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from "@mui/material/styles";

import palette from "./palette";
import ComponentOverrides from "./overrides";
import shadows, { customShadows } from "./shadows";

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const themeOptions = useMemo(
        () => ({
            palette,
            shape: { borderRadius: 8 },
            shadows,
            customShadows,
        }),
        []
    );
    const theme = createTheme(themeOptions);
    theme.components = ComponentOverrides(theme);
    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
        </StyledEngineProvider>
    );
}
