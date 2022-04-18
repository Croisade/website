import { tailwind, dark } from '@theme-ui/presets'

const theme = {
    ...tailwind,
    containers: {
        card: {
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            border: '1px solid',
            borderColor: 'muted',
            borderRadius: '4px',
            p: 2
        },
        page: {
            width: '100%',
            maxWidth: '1080px',
            m: 0,
            mx: 'auto'
        }
    },
    styles: {
        ...tailwind.styles,
        footer: {
            width: '100%',
            m: 0,
            mx: 'auto',
            bg: 'muted'
        },
        hr: {
            color: 'primary',
            width: '30%',
            mx: 'auto',
            my: '3'
        },
        navBullet: {
            ml: 3,
            py: 2,
            cursor: 'pointer',
            textDecoration: 'none',
            ':hover': {
                color: 'primary'
            }
        },
        nav: {
            ml: 1,
            py: 2,
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none',
            color: 'text',
            ':hover': {
                color: 'primary'
            }
        },
        navlink: {
            ml: 3,
            py: 2,
            cursor: 'pointer',
            fontWeight: 'bold',
            color: 'text',
            textDecoration: 'none',
            ':hover': {
                color: 'primary'
            }
        }
    },
    buttons: {
        muted: {
            color: 'background',
            bg: 'muted'
        },
        secondary: {
            color: 'muted',
            bg: 'text',
            '&:hover': {
                bg: 'secondary'
            }
        }
    },
    links: {
        bold: {
            fontWeight: 'bold'
        }
    },
    images: {
        ...tailwind.colors,
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 99999
        }
    },
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        grayDark: '#2d3748',
        text: '#2d3748',
        background: '#fff',
        primary: '#2b6cb0',
        primaryHover: '#2c5282',
        secondary: '#718096',
        muted: '#F6FCFF',
        success: '#9ae6b4',
        info: '#63b3ed',
        warning: '#faf089',
        danger: '#feb2b2',
        light: '#f7fafc',
        dark: '#2d3748',
        index: '#4c4f52',
        textMuted: '#718096',
        modes: {
            dark: {
                ...dark.colors,
                index: '#9ea1a3'
            }
        }
    }
}

export default theme
