/** @jsxImportSource theme-ui */
import Header from '@components/Header'
import { ThemeProvider } from 'theme-ui'
import Script from 'next/script'
import '../styles/style.css'
import theme from '../theme'

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T2LCGFB')`}
                </Script>
                <Header />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    )
}
