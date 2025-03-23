import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#4B3D44"
        },
        secondary: {
            main: "#D2C9A5",
            contrastText: "#4B3D44"
        },
        tertiary: {
            main: "#79444A",
            contrastText: "#D2C9A5"
        },
        error: {
            main: "#79444A", // change the error color to pink
          }
    },
    typography: {
        fontFamily: [
            'Jersey, '
        ]
    }
});

