/** @jsxImportSource theme-ui */
import Banner from '@components/Banner'
import Footer from '@components/Footer'
import { SEO } from '@components/SEO'
import { IMAGES, PERIPHERALS, PERSONAL_INFORMATION, WEBSITE_INFORMATION } from '@constants'
import Head from 'next/head'
import { Box, Heading } from 'theme-ui'

export default function Peripherals() {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <div
                sx={{
                    height: `calc(100vh - 120px)`,
                    maxWidth: ['80%', '50%'],
                    ml: 'auto',
                    mr: 'auto'
                }}>
                <SEO
                    title={WEBSITE_INFORMATION.siteNameLowerCase}
                    description={PERSONAL_INFORMATION.about}
                    image={IMAGES.banner}
                    url={WEBSITE_INFORMATION.url}
                />
                <Banner />
                <Heading as="h1">Peripherals</Heading>
                <br />
                <Heading as="h2">Tower</Heading>
                {PERIPHERALS.tower.map((x, i) => {
                    return (
                        <Box key={i}>
                            <a
                                href={x.url}
                                sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                                {x.description}
                            </a>
                        </Box>
                    )
                })}
                <br />
                <Heading as="h2">Office</Heading>
                {PERIPHERALS.office.map((x, i) => {
                    return (
                        <Box key={i}>
                            <a
                                href={x.url}
                                sx={{ variant: 'styles.navBullet', p: 2, color: 'text' }}>
                                {x.description}
                            </a>
                        </Box>
                    )
                })}
                <Footer />
            </div>
        </div>
    )
}
