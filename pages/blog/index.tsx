/** @jsxImportSource theme-ui */
import { IMAGES, PERSONAL_INFORMATION, TOPICS, WEBSITE_INFORMATION } from '@constants'
import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import _ from 'lodash'
import Head from 'next/head'
import Link from 'next/link'
import path from 'path'
import { Box, Grid, Heading } from 'theme-ui'
import Banner from '@components/Banner'
import Footer from '@components/Footer'
import { IndexPost } from '@components/IndexPost'
import { SEO } from '@components/SEO'

//@TODO implement search
export default function IndexPage({ posts }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="Description" content={''}></meta>
            </Head>
            <SEO
                title={TOPICS[4].topic + ' - ' + WEBSITE_INFORMATION.siteNameLowerCase}
                description={PERSONAL_INFORMATION.about}
                image={IMAGES.banner}
                url={WEBSITE_INFORMATION.url + TOPICS[4].path}
            />
            <Banner />
            <div
                sx={{
                    height: `calc(100vh - 120px)`,
                    maxWidth: ['80%', '50%'],
                    ml: 'auto',
                    mr: 'auto'
                }}>
                <Heading as="h1">Blog</Heading>
                <Heading as="h2" sx={{ mt: '3', mb: '2' }}>
                    Categories
                </Heading>
                <br />
                <Grid gap={2} columns={[4, null, 4]} sx={{ justifyContent: 'center', mt: '10' }}>
                    <Box>
                        <Link href="/blog/politics">
                            <a sx={{ variant: 'styles.nav' }}>Politics</a>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/blog/health">
                            <a sx={{ variant: 'styles.nav' }}>Health</a>
                        </Link>
                    </Box>

                    <Box>
                        <Link href="/blog/technology">
                            <a sx={{ variant: 'styles.nav' }}>Technology</a>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/blog/life">
                            <a sx={{ variant: 'styles.nav' }}>Life</a>
                        </Link>
                    </Box>
                </Grid>
                <br />
                <hr />
                <Heading as="h2" sx={{ mt: '3', mb: '2' }}>
                    Recent Posts
                </Heading>
                <Grid gap={3} columns={[1, null, 1]}>
                    {posts.map((post) => (
                        <IndexPost key={post.link} data={post} />
                    ))}
                </Grid>
                <div sx={{ maxWidth: '100%', ml: 'auto', mr: 'auto' }}>
                    <Footer />
                </div>
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
        .value()

    return { props: { posts } }
}
