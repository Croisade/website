/** @jsxImportSource theme-ui */
import Banner from '@components/Banner'
import Footer from '@components/Footer'
import RecentThree from '@components/RecentThree'
import { SEO } from '@components/SEO'
import { IMAGES, PERSONAL_INFORMATION, WEBSITE_INFORMATION } from '@constants'
import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import _ from 'lodash'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import { Box, Button, Grid, Heading, Text } from 'theme-ui'

//@TODO include meta description for header
export default function Home({ posts }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <SEO
                    title={WEBSITE_INFORMATION.siteNameLowerCase}
                    description={PERSONAL_INFORMATION.about}
                    image={IMAGES.banner}
                    url={WEBSITE_INFORMATION.url}
                />
            </Head>
            <Banner />
            <div
                sx={{
                    height: `calc(100vh - 120px)`,
                    maxWidth: ['80%', '50%'],
                    ml: 'auto',
                    mr: 'auto'
                }}>
                <Heading as="h1">{WEBSITE_INFORMATION.home}</Heading>
                <Grid gap={2} columns={[1, null, 2, '2.5fr 1fr']}>
                    <Box sx={{ mt: '3' }}>
                        <Heading as="h2" sx={{ mt: '4' }}>
                            {PERSONAL_INFORMATION.firstName + ' ' + PERSONAL_INFORMATION.lastName}
                        </Heading>
                        <Text sx={{ mt: '2', display: 'block' }}>{PERSONAL_INFORMATION.about}</Text>
                        <Link href="/about">
                            <Button variant="secondary" sx={{ mt: '5' }}>
                                {PERSONAL_INFORMATION.learnAboutMe}
                            </Button>
                        </Link>
                    </Box>
                    <Box>
                        <Image
                            src={IMAGES.personalLogo}
                            alt={PERSONAL_INFORMATION.personalCaption}
                            width={225}
                            height={300}
                            priority
                        />
                    </Box>
                </Grid>
                <br />
                <hr />
                <div sx={{ mt: 3 }}>
                    <RecentThree posts={posts} />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export function getStaticProps() {
    const allPostsPath = path.join(process.cwd(), 'posts')
    const globbedPosts = glob.sync('**/*.mdx', { cwd: allPostsPath })
    const posts = _.chain(globbedPosts)
        .map((paths) => fs.readFileSync(path.join(allPostsPath, paths), 'utf-8'))
        .map((x) => matter(x).data)
        .sortBy((x) => new Date(x.date))
        .reverse()
        .slice(0, 3)
        .value()

    return { props: { posts } }
}
