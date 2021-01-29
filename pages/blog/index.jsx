/** @jsx jsx */
import { jsx, Grid, Heading } from 'theme-ui'
import { IndexPost } from '../../components/IndexPost'
import Banner from '../../components/Banner'
import { posts } from '../../utils/getAllPosts'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'
import map from 'lodash/map'
import Head from 'next/head'
import Footer from '../../components/Footer'

// @todo refactor, implement search
export default function IndexPage(sortedPost) {
    const { sortedPost: post } = sortedPost
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
                    Recent Posts
                </Heading>
                <Grid gap={3} columns={[1, null, 1]}>
                    {post.map((sortedPosts) => (
                        <IndexPost key={sortedPosts.link} post={sortedPosts} />
                    ))}
                </Grid>
                <div sx={{ maxWidth: '100%', ml: 'auto', mr: 'auto' }}>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const deModuled = map(posts, function (o) {
        return { link: o.link, module: JSON.parse(JSON.stringify(o.module)) }
    })
    const sortedPost = reverse(
        sortBy(deModuled, function (post) {
            const {
                module: {
                    meta: { date }
                }
            } = post
            const dateStr = date
            return new Date(dateStr)
        })
    )

    return {
        props: {
            sortedPost
        }
    }
}
