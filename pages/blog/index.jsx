/** @jsx jsx */
import { jsx, Grid, Heading, Box } from 'theme-ui'
import { IndexPost } from '../../components/IndexPost'
import Banner from '../../components/Banner'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../../components/Footer'
import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import fs from 'fs'

//@TODO implement search
export default function IndexPage({posts}) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="Description" content={''}></meta>
                <title>{'Blog - The Life Of Jamal'}</title>
            </Head>
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
    const postsPath = path.join(process.cwd(), 'posts')
    const options = {
        cwd: postsPath
    }
    const globbedPosts = glob.sync('**/*.mdx', options)
    function grabFiles(paths) {
        return fs.readFileSync(path.join(postsPath, paths), 'utf-8')
    }
    const files = globbedPosts.map(grabFiles)
    const metas = files.map((x) => {
        const { data } = matter(x)
        return data
    })

    const sorted = sortBy(metas, function (x) {
        const { date } = x
        return new Date(date)
    })

    const posts = reverse(sorted)
    return { props: { posts } }
}

