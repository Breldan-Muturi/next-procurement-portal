import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    colorbg: {
      default: React.CSSProperties["color"];
    };
  }
  interface ThemeOptions {
    colorbg: {
      default: React.CSSProperties["color"];
    };
  }
}

const blue = "#008FDF";
const lightBlue = "#129FEF";
const defaultbg = "#D9D9D9";

// Create a theme instance.
const theme = createTheme({
  colorbg: {
    default: `${defaultbg}`,
  },
  palette: {
    primary: {
      main: `${blue}`,
      light: `${lightBlue}`,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});

export default responsiveFontSizes(theme);
