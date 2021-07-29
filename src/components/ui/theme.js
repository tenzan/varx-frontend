import { createTheme } from "@material-ui/core/styles";
import { fontSize, fontWeight } from "@material-ui/system";
import { grey, red } from "chalk";

const green = '#99b898'
const darkGreen = '#708670'
const tan = '#fecea8'
const lightRed = '#ff847c'
const red = '#e84a5f'
const offBlack = '#2a363b'
const grey = '#747474'

const theme = createTheme ({
    palette: {
        primary: {
            main: green
        },
        secondary: {
            main: darkGreen
        },
        common: {
            tan,
            lightRed,
            red,
            offBlack
        }
    },
    typography: {
        h1: {
            fontSize: '4.5rem',
            fontFamily: 'Philosopher',
            fontStyle: 'italic',
            fontWeight: 700,
            color: green
        },
        h2: {
            fontFamily: 'Montserrat',
            fontSize: '3rem',
            fontWeight: 500,
            color: '#fff'
        },
        h3: {
            fontFamily: 'Montserrat',
            fontSize: '2rem',
            fontWeight: 300,
            color: green
        },
        h4: {
            fontFamily: "Philosopher",
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: '3rem',
            color: '#fff'
        },
        h5: {
            fontFamily: 'Philosopher',
            fontSize: '2rem',
            fontWeight: 700,
            fontStyle: 'italic',
            color: '#fff'
        },
        body1: {
            fontFamily: 'Montserrat',
            fontSize: '1.5rem',
            color: grey
        },
        body2: {
            fontFamily: 'Montserrat',
            fontSize: '2rem',
            color: grey
        }
    },
    overrides: {},
})

export default theme