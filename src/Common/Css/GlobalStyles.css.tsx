import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#25bce9",
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
    MuiTypography: {
      colorTextSecondary: {
        color: "#fff",
      },
      colorTextPrimary: {
        color: "#444444",
      },
    },
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent",
        },
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
    MuiListItem: {
      root: {
        cursor: "pointer",
        "&:hover": {
          color: "#25bce9",
        },
      },
      selected: {
        color: "#25bce9",
      },

      button: {
        "&:hover": {
          backgroundColor: "transparent",
          color: "#25bce9",
          // transition: "none",
        },
        "&:active": {
          color: "#25bce9",
          // transition: "none",
        },
      },
    },
  },
});