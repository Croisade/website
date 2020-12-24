/** @jsx jsx */
import { jsx } from 'theme-ui'
import { IndexPost } from '../../components/IndexPost'
import { posts } from '../../utils/getAllPosts'
import { Grid } from 'theme-ui'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'
import map from 'lodash/map'

// @todo refactor
export default function IndexPage(sortedPost) {
    const { sortedPost: post } = sortedPost
    return (
        <div sx={{ maxWidth: '30%', ml: 'auto', mr: 'auto' }}>
            <h1>Recent Posts</h1>
            <Grid gap={3} columns={[1, null, 1]}>
                {post.map((sortedPosts) => (
                    <IndexPost key={sortedPosts.link} post={sortedPosts} />
                ))}
            </Grid>
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
