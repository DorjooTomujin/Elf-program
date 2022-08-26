import {extendTheme} from '@chakra-ui/react'
const fonts = { mono: `'Menlo', monospace`}

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px'
}

const theme = extendTheme({
    breakpoints,
    styles: {
        global: {
            body: {
                // bg
            }
        }
    },
    colors: {
        green: {
            main: '#43ec34'
        },
        blue: {
            main: '#133491'
        },
        purple: {
            main: '#4411a1'
        }, 
        yellow: {
            main: '#eae41c'
        }
    }
})

export default theme