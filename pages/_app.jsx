/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from '../theme'
import Nav from '../components/nav'
import Header from '../components/header'
import Dark from '../components/darkmode'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Header />
                <Nav />
                <Dark />
                <Component {...pageProps} />
                {/* <Footer /> */}
            </div>
        </ThemeProvider>
    )
}
