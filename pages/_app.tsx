/** @jsxImportSource theme-ui */
import Header from '@components/Header'
import { ThemeProvider } from 'theme-ui'
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
