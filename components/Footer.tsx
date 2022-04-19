/** @jsxImportSource theme-ui */
import { WEBSITE_INFORMATION, FOOTER_LINKS } from '@constants'
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
                    <Grid columns={[1, null, 2, '3fr 1fr']}>
                        <Box>
                            <Grid columns={[2, null, 3, '1fr 1fr 1fr']}>
                                {FOOTER_LINKS.map((x) => {
                                    return (
                                        <Box key={x.url} sx={{ display: 'block' }}>
                                            <Flex sx={{ justifyContent: 'center' }}>
                                                <Link href={x.url}>
                                                    <a
                                                        sx={{
                                                            variant: 'styles.navlink',
                                                            p: 2,
                                                            color: 'styles.text',
                                                            justifyContent: 'center'
                                                        }}>
                                                        {x.siteName}
                                                    </a>
                                                </Link>
                                            </Flex>
                                        </Box>
                                    )
                                })}
                            </Grid>
                        </Box>
                        <Box>
                            <Heading as="h4">Disclosure</Heading>
                            <Text>{WEBSITE_INFORMATION.amazonAssociateDisclaimer}</Text>
                        </Box>
                    </Grid>
                </div>
            </footer>
        </div>
    )
}

export default Footer
