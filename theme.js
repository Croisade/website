import { tailwind, dark, deep } from '@theme-ui/presets'

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
            bg: 'primary'
        },
        navlink: {
            ml: 3,
            py: 2,
            cursor: 'pointer',
            color: '#fff',
            fontWeight: 'bold'
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
    images: {
        ...tailwind.colors,
        avatar: {
            width: 48,
            height: 48,
            borderRadius: 99999
        }
    }
}

export default theme
