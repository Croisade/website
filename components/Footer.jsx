/** @jsx jsx */
import { jsx, Text, Heading, Grid, Box } from 'theme-ui'
import Link from 'next/link'

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
                        display: 'grid',
                        gridTemplateRows: 'repeat(3, 32px)',
                        gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(3, 1fr)'],
                        gridAutoFlow: 'column',
                        px: 2,
                        py: 4
                    }}>
                    <Link href="/">
                        <a sx={{ variant: 'styles.navlink', p: 2, color: 'styles.text' }}>Home</a>
                    </Link>
                    <Link href="/blog">
                        <a sx={{ variant: 'styles.navlink', p: 2, color: 'styles.text' }}>Blog</a>
                    </Link>
                    <Link href="/about">
                        <a sx={{ variant: 'styles.navlink', p: 2, color: 'styles.text' }}>About</a>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCr8h9u258fq605akq_dGA1A?sub_confirmation=1">
                        <a sx={{ variant: 'styles.navlink', p: 2, color: 'styles.text' }}>
                            Youtube
                        </a>
                    </Link>
                    <Link href="https://www.facebook.com/YTJamalGardiner">
                        <a sx={{ variant: 'styles.navlink', p: 2, color: 'styles.text' }}>
                            Facebook
                        </a>
                    </Link>

                    <Link href="https://www.instagram.com/the_life_of_jamal_/">
                        <a sx={{ variant: 'styles.navlink', p: 2, color: 'styles.text' }}>
                            Instagram
                        </a>
                    </Link>
                    <Heading as="h4">Disclosure</Heading>
                    <Text>
                        TLOJ is a participant in the Amazon Services LLC Associates Program, an
                        affiliate advertising program designed to provide a means for sites to earn
                        advertising fees by advertising and linking to amazon.com.
                    </Text>
                </div>
            </footer>
        </div>
    )
}

export default Footer
