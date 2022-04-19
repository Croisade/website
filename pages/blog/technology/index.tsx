/** @jsxImportSource theme-ui */
import Banner from '@components/Banner'
import Footer from '@components/Footer'
import { IndexPost } from '@components/IndexPost'
import { SEO } from '@components/SEO'
import { IMAGES, PERSONAL_INFORMATION, WEBSITE_INFORMATION, TOPICS } from '@constants'
import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import _ from 'lodash'
import path from 'path'
import { Grid } from 'theme-ui'

export default function IndexPage({ posts }) {
    return (
        <div sx={{ maxWidth: '70%', ml: 'auto', mr: 'auto' }}>
            <SEO
                title={TOPICS.technology + ' - ' + WEBSITE_INFORMATION.siteNameLowerCase}
                description={PERSONAL_INFORMATION.about}
                image={IMAGES.banner}
                url={WEBSITE_INFORMATION.url + TOPICS.technologyPath}
            />
            <Banner />
            <h1>Technology</h1>
            <Grid gap={3} columns={[1, null, 2]}>
                {posts.map((post) => (
                    <IndexPost key={post.link} data={post} />
                ))}
            </Grid>
            <Footer />
        </div>
    )
}

export function getStaticProps() {
    const allPostsPath = path.join(process.cwd(), 'posts/technology')
    const globbedPosts = glob.sync('**/*.mdx', { cwd: allPostsPath })
    const posts = _.chain(globbedPosts)
        .map((paths) => fs.readFileSync(path.join(allPostsPath, paths), 'utf-8'))
        .map((x) => matter(x).data)
        .sortBy((x) => new Date(x.date))
        .reverse()
        .value()

    return { props: { posts } }
}
