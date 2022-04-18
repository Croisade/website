/** @jsx jsx */
import Header from '@components/Header'
import { jsx, ThemeProvider } from 'theme-ui'
import '../styles/style.css'
import theme from '../theme'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Header />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    )
}
