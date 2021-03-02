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
        navBullet: {
            ml: 3,
            py: 2,
            cursor: 'pointer',
            textDecoration: 'none',
            ':hover': {
                color: 'primary'
            }
        },
        hr: {
            color: 'primary',
            width: '30%',
            mx: 'auto',
            my: '3'
        }
    },
    colors: {
        ...tailwind.colors,
        muted: '#F6FCFF',
        index: '#4c4f52',
        modes: {
            dark: {
                ...dark.colors,
                index: '#9ea1a3'
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
    images: {
        ...tailwind.colors,
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 99999
        }
    },
    links: {
        bold: {
            fontWeight: 'bold'
        }
    }
}

export default theme
