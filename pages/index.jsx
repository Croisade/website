/** @jsx jsx */
import { jsx, Text, Heading } from 'theme-ui'
import RecentThree from '../components/RecentThree'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Head from 'next/head'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'
import map from 'lodash/map'
import { posts } from '../utils/getAllPosts'

//todo include meta description for header, throw props into RecentThree
export default function Home(sortedPost) {
    const { sortedPost: post } = sortedPost
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta
                    name="Description"
                    content={
                        'I am a developer, content creator and a learner of all things. Welcome to my website where I keep all of my thoughts and opinions. Everything you want to know and more, is here.'
                    }></meta>
                <title>{'The Life Of Jamal'}</title>
            </Head>
            <Banner />
            <div
                sx={{
                    height: `calc(100vh - 120px)`,
                    maxWidth: ['80%', '50%'],
                    ml: 'auto',
                    mr: 'auto'
                }}>
                <Heading as="h1">Home</Heading>
                <Heading as="h2" sx={{ mt: '3' }}>
                    Jamal Gardiner
                </Heading>
                <Text sx={{ mt: '2' }}>
                    I am a developer, content creator and a learner of all things. Welcome to my
                    website where I keep all of my thoughts and opinions. Everything you want to
                    know and more, is here.
                </Text>
                <br />
                <hr />
                {/* <div sx={{ mt: 5 }}>
                    <Grid gap={3} columns={[1, null, 3]}>
                        {post.map((sortedPosts) => (
                            <BlogCard key={sortedPosts.link} post={sortedPosts} />
                        ))}
                    </Grid>
                </div> */}
                <div sx={{ mt: 3 }}>
                    <RecentThree />
                </div>
                <Footer />
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
