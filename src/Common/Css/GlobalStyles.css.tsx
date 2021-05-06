import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import useLocalStorage from "../Utils/useLocalStorage";

// export const theme = createMuiTheme({
//   palette: {
//     type: "light",
//     primary: {
//       main: "#25bce9",
//       light: "#25bce9",
//       dark: "rgb(25, 131, 163)",
//     },
//     secondary: {
//       main: "#fff",
//       light: "#fff",
//     },
//   },
//   overrides: {
//     MuiIconButton: {
//       root: {
//         "&:hover": {
//           backgroundColor: "transparent !important",
//         },
//       },
//     },
//   },
// });

// const themeDark = createMuiTheme({
//   palette: {
//     type: "dark",
//     primary: {
//       main: "#25bce9",
//       dark: "rgb(25, 131, 163)",
//     },
//     secondary: {
//       main: "#424242",
//       // dark: "#424242",
//     },
//   },
//   overrides: {
//     MuiIconButton: {
//       root: {
//         "&:hover": {
//           backgroundColor: "transparent !important",
//         },
//       },
//     },
//     MuiTypography: {
//       colorTextSecondary: {
//         color: "#fff",
//       },
//     },
//   },
// });

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
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
    return (
      <Theme darkMode={darkMode}>
        <Component {...props} darkMode={darkMode} setDarkMode={setDarkMode} />
      </Theme>
    );
  };
};

// export const theme = createMuiTheme({
//   palette: {
//     type: "light",
//     primary: {
//       main: "#25bce9",
//       light: "#25bce9",
//     },
//     secondary: {
//       main: "#fff",
//       light: "#fff",
//     },
//   },
//   props: {
//     MuiIconButton: {
//       disableFocusRipple: true,
//       disableRipple: true,
//     },
//     MuiButtonBase: {
//       disableTouchRipple: true,
//       disableRipple: true,
//     },
//   },
//   overrides: {
//     MuiTypography: {
//       colorTextSecondary: {
//         color: "#000",
//       },
//       colorTextPrimary: {
//         color: "#000",
//       },
//     },
//     MuiIconButton: {
//       root: {
//         "&:hover": {
//           backgroundColor: "transparent !important",
//         },
//       },
//     },
//     MuiIcon: {
//       colorSecondary: {
//         color: "#fff",
//       },
//     },
//     MuiSvgIcon: {
//       colorSecondary: {
//         color: "#fff",
//       },
//       fontSizeSmall: {
//         fontSize: "15px",
//       },
//     },
//     MuiListItemText: {
//       secondary: {
//         "&:hover": {
//           color: "#25bce9",
//         },
//       },
//     },
//     MuiListItem: {
//       root: {
//         cursor: "pointer",
//         "&:hover": {
//           color: "#25bce9",
//         },
//       },
//       button: {
//         "&:hover": {
//           backgroundColor: "#325288",
//           color: "#25bce9",
//           // transition: "none",
//         },
//         "&:active": {
//           color: "#25bce9",
//           // transition: "none",
//         },
//       },
//     },
//   },
// });
