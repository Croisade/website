/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { IndexPost } from './IndexPost'
import { posts } from '../utils/getAllPosts'
import { Grid } from 'theme-ui'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'
import map from 'lodash/map'
import slice from 'lodash/slice'

// @todo refactor
export default function IndexPage() {
    const deModuled = map(posts, function (o) {
        return { link: o.link, module: JSON.parse(JSON.stringify(o.module)) }
    })
    const sortedPost = slice(
        reverse(
            sortBy(deModuled, function (post) {
                const {
                    module: {
                        meta: { date }
                    }
                } = post
                const dateStr = date
                return new Date(dateStr)
            })
        ),
        0,
        3
    )

    return (
        <div sx={{ maxWidth: '100%', ml: 'auto', mr: 'auto' }}>
            <Heading as="h2" sx={{ mt: '5' }}>
                Recent Posts
            </Heading>
            <Grid gap={3} columns={[1, null, 1]} sx={{ mt: '3' }}>
                {map(sortedPost, (sortedPosts) => (
                    <IndexPost key={sortedPosts.link} post={sortedPosts} />
                ))}
            </Grid>
        </div>
    )
}
