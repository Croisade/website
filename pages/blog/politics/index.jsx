/** @jsx jsx */
import { jsx } from 'theme-ui'
import { IndexPost } from '../../../components/IndexPost'
import { posts } from '../../../utils/getPoliticsPosts'
import { Grid } from 'theme-ui'
import Footer from '../../../components/Footer'
import Banner from '../../../components/Banner'

import path from 'path'
import glob from 'glob'
import matter from 'gray-matter'
import sortBy from 'lodash/sortBy'
import slice from 'lodash/slice'
import reverse from 'lodash/reverse'
import fs from 'fs'

export default function IndexPage({posts}) {
    return (
        <div sx={{ maxWidth: '70%', ml: 'auto', mr: 'auto' }}>
            <Banner />
            <h1>Politics</h1>
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
    const postsPath = path.join(process.cwd(), 'posts/politics')
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
