/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Header from '../components/Header'

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
