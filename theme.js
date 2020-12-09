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
            bg: 'primary'
        }
    },
    colors: {
        ...tailwind.colors,
        muted: '#F6FCFF',
        modes: {
            dark: {
                ...dark.colors
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
