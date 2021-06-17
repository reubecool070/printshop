import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import useLocalStore from "../Utils/useLocalStore";

const Theme = (props: any) => {
  const { children, darkMode } = props;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
          primary: {
            main: "#25bce9",
            light: "#25bce9",
            dark: "rgb(25, 131, 163)",
          },
          secondary: {
            main: "#fff",
            light: "#fff",
          },
        },
        props: {
          MuiIconButton: {
            disableFocusRipple: true,
            disableRipple: true,
          },
          MuiButtonBase: {
            disableTouchRipple: true,
            disableRipple: true,
          },
        },
        overrides: {
          MuiIconButton: {
            root: {
              "&:hover": {
                backgroundColor: "transparent !important",
              },
            },
          },
          MuiTypography: {
            colorTextSecondary: {
              color: "#fff",
            },
            colorPrimary: {
              color: "#25bce9",
            },
          },
          MuiIcon: {
            colorSecondary: {
              color: "#fff",
            },
          },
          MuiSvgIcon: {
            colorSecondary: {
              color: "#fff",
            },
            fontSizeSmall: {
              fontSize: "15px",
            },
          },
        },
      }),
    [darkMode]
  );

  // const defaultTheme = darkMode ? themeDark : theme;
  const defaultTheme = theme;
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export const withTheme = (Component: any) => {
  return (props: any) => {
    const [darkMode, setDarkMode] = useLocalStore("darkMode", false);
    return (
      <Theme darkMode={darkMode}>
        <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>
    );
  };
};
