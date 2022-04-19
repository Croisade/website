/** @jsxImportSource theme-ui */
import Link from 'next/link'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'

const Footer = () => {
    return (
        <div>
            <br />
            <br />
            <hr />
            <footer
                sx={{
                    fontSize: 1
                }}>
                <div
                    sx={{
                        px: 2,
                        py: 4
                    }}>
                    <Grid columns={[2, null, 4, '1fr 1fr 1fr 1fr']}>
                        <Box>
                            <Box>
                                <Flex sx={{ justifyContent: 'center' }}>
                                    <Link href="/">
                                        <a
                                            sx={{
                                                variant: 'styles.navlink',
                                                p: 2,
                                                color: 'styles.text',
                                                justifyContent: 'center'
                                            }}>
                                            Home
                                        </a>
                                    </Link>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex sx={{ justifyContent: 'center' }}>
                                    <Link href="/blog">
                                        <a
                                            sx={{
                                                variant: 'styles.navlink',
                                                p: 2,
                                                color: 'styles.text'
                                            }}>
                                            Blog
                                        </a>
                                    </Link>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex sx={{ justifyContent: 'center' }}>
                                    <Link href="/about">
                                        <a
                                            sx={{
                                                variant: 'styles.navlink',
                                                p: 2,
                                                color: 'styles.text'
                                            }}>
                                            About
                                        </a>
                                    </Link>
                                </Flex>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Flex sx={{ justifyContent: 'center' }}>
                                    <a
                                        href="https://www.youtube.com/channel/UCr8h9u258fq605akq_dGA1A?sub_confirmation=1"
                                        target="_blank"
                                        rel="noreferrer"
                                        sx={{
                                            variant: 'styles.nav',
                                            p: 2,
                                            color: 'text'
                                        }}>
                                        Youtube
                                    </a>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex sx={{ justifyContent: 'center' }}>
                                    <a
                                        href="https://www.facebook.com/YTJamalGardiner"
                                        target="_blank"
                                        rel="noreferrer"
                                        sx={{
                                            variant: 'styles.nav',
                                            p: 2,
                                            color: 'text'
                                        }}>
                                        Facebook
                                    </a>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex sx={{ justifyContent: 'center' }}>
                                    <a
                                        href="https://www.instagram.com/the_life_of_jamal_/"
                                        target="_blank"
                                        rel="noreferrer"
                                        sx={{
                                            variant: 'styles.nav',
                                            p: 2,
                                            color: 'text'
                                        }}>
                                        Instagram
                                    </a>
                                </Flex>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Flex sx={{ justifyContent: 'center' }}>
                                    <a
                                        href="https://github.com/Croisade"
                                        target="_blank"
                                        rel="noreferrer"
                                        sx={{
                                            variant: 'styles.nav',
                                            p: 2,
                                            color: 'text'
                                        }}>
                                        Github
                                    </a>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex sx={{ justifyContent: 'center' }}>
                                    <a
                                        href="https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3ATLOJ&ref=bl_sl_s_ap_web_7141123011"
                                        target="_blank"
                                        rel="noreferrer"
                                        sx={{
                                            variant: 'styles.nav',
                                            p: 2,
                                            color: 'text'
                                        }}>
                                        Merchandise
                                    </a>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex sx={{ justifyContent: 'center' }}>
                                    <Link href="/peripherals">
                                        <a
                                            sx={{
                                                variant: 'styles.navlink',
                                                p: 2,
                                                color: 'text'
                                            }}>
                                            Peripherals
                                        </a>
                                    </Link>
                                </Flex>
                            </Box>
                        </Box>

                        <Box>
                            <Heading as="h4">Disclosure</Heading>
                            <Text>
                                TLOJ is a participant in the Amazon Services LLC Associates Program,
                                an affiliate advertising program designed to provide a means for
                                sites to earn advertising fees by advertising and linking to
                                amazon.com.
                            </Text>
                        </Box>
                    </Grid>
                </div>
            </footer>
        </div>
    )
}

export default Footer
