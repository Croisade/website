/** @jsx jsx */
import { jsx, Text, Heading, Grid, Box, Flex } from 'theme-ui'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../components/Banner'
import GitHub from '../public/github.svg'
import Youtube from '../public/youtube.svg'
import Instagram from '../public/instagram.svg'
import Facebook from '../public/facebook.svg'

export default function About() {
    return (
        <div
            sx={{
                height: `calc(100vh - 120px)`,
                maxWidth: ['80%', '50%'],
                ml: 'auto',
                mr: 'auto'
            }}>
            <Banner />
            <Heading as="h1">About</Heading>
            <Grid gap={2} columns={[1, null, 2, '2fr 1fr']}>
                <Box>
                    <br />
                    <Heading as="h3">The Short</Heading>
                    <Text>
                        I am a developer, content creator and a learner of all things. Welcome to my
                        website where I keep all of my thoughts and opinions. Everything you want to
                        know and more, is here.
                    </Text>
                    <br />
                    <Heading as="h3">The Long</Heading>
                    <Text>
                        Born in Trinidad & Tobago, but grew up in the United States. I have always
                        had a passion from computers and technology and it is only recently where I
                        have began to explore it.
                    </Text>
                    <br />
                    <Text>
                        My first certification in Information Technology was the CompTIA A+ back in
                        2017. I went on to earn the Network+ and Security+ and a Bachelor's degree
                        in Management Information Systems by 2019. I landed my first job as a
                        service desk technician. I enjoyed my time in that position but I wanted to
                        keep learning to gain new skills. The job market changes as new technologies
                        are released. If the markets change, I change.
                    </Text>
                    <br />
                    <Text>
                        Now I am a backend web developer and I plan to use this website, and other
                        projects, to test out new technologies and further develop my skills. You
                        will occasionally find posts and updates related to other aspects of my life
                        as well. Subscribe to my newsletter if you haven't so you can stay up to
                        date.
                    </Text>
                    <br />
                    <Text>Remember, adapt to the market.</Text>
                </Box>
                <Box>
                    <Flex sx={{ justifyContent: 'center' }}>
                        <Image
                            src="https://cdn1.thelifeofjamal.com/public/JamalLogo.png"
                            alt="Picture of Jamal"
                            width={225}
                            height={300}
                        />
                    </Flex>
                </Box>
            </Grid>
            <br />

            <Flex sx={{ justifyContent: 'center' }}>
                <Grid gap={3} columns={[1, null, 4, '50px 50px 50px 50px']}>
                    <Box>
                        <Link href="https://github.com/Croisade">
                            <a>
                                <GitHub sx={{ height: '50px', width: '50px' }} />
                            </a>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://www.youtube.com/channel/UCr8h9u258fq605akq_dGA1A?sub_confirmation=1">
                            <a>
                                <Youtube sx={{ height: '50px', width: '50px' }} />
                            </a>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://www.instagram.com/the_life_of_jamal_/">
                            <a>
                                <Instagram sx={{ height: '50px', width: '50px' }} />
                            </a>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="https://www.facebook.com/YTJamalGardiner">
                            <a>
                                <Facebook sx={{ height: '50px', width: '50px' }} />
                            </a>
                        </Link>
                    </Box>
                </Grid>
            </Flex>
        </div>
    )
}
