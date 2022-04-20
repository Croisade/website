/** @jsxImportSource theme-ui */
import Banner from '@components/Banner'
import Footer from '@components/Footer'
import { SEO } from '@components/SEO'
import { IMAGES, PERSONAL_INFORMATION, WEBSITE_INFORMATION, URLS } from '@constants'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'
import Facebook from '../public/facebook.svg'
import GitHub from '../public/github.svg'
import Instagram from '../public/instagram.svg'
import Youtube from '../public/youtube.svg'

export default function About() {
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
                <Heading as="h1">About</Heading>
                <Grid gap={2} columns={[1, null, 2, '2fr 1fr']}>
                    <Box>
                        <br />
                        <Heading as="h3">The Short</Heading>
                        <Text sx={{ display: 'block' }}>{PERSONAL_INFORMATION.theShort}</Text>
                        <br />
                        <Heading as="h3">The Long</Heading>
                        <Text sx={{ display: 'block' }}>{PERSONAL_INFORMATION.theLongOne}</Text>
                        <br />
                        <Text sx={{ display: 'block' }}>{PERSONAL_INFORMATION.theLongTwo}</Text>
                        <br />
                        <Text sx={{ display: 'block' }}>{PERSONAL_INFORMATION.theLongThree}</Text>
                        <br />
                        <Text sx={{ display: 'block' }}>{PERSONAL_INFORMATION.theLongFour}</Text>
                    </Box>
                    <Box>
                        <Flex sx={{ justifyContent: 'center' }}>
                            <Image
                                src={IMAGES.personalLogo}
                                alt={IMAGES.personalLogoAlt}
                                width={225}
                                height={300}
                                priority
                            />
                        </Flex>
                    </Box>
                </Grid>
                <br />
                <br />

                <Flex sx={{ justifyContent: 'center' }}>
                    <Grid gap={3} columns={[4, null, 4, '50px 50px 50px 50px']}>
                        <Box>
                            <Link href={URLS.github} passHref>
                                <Image src={GitHub} />
                            </Link>
                        </Box>
                        <Box>
                            <Link href={URLS.youtube} passHref>
                                <Image src={Youtube} />
                            </Link>
                        </Box>
                        <Box>
                            <Link href={URLS.instagram} passHref>
                                <Image src={Instagram} />
                            </Link>
                        </Box>
                        <Box>
                            <Link href={URLS.facebook} passHref>
                                <Image src={Facebook} />
                            </Link>
                        </Box>
                    </Grid>
                </Flex>
                <div sx={{ maxWidth: '100%', ml: 'auto', mr: 'auto' }}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
