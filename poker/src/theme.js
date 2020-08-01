import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const colors = {
    primary: '#ff3366',
    secondary: "#181818",
    error: "#ff9999"
}

export const shadow = '0px 0px 7px 3px rgba(255, 153, 153, .6)'


export const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: colors.primary
        },
        secondary: {
            main: colors.secondary
        },
        error: {
            main: colors.error
        },
    }
}))
