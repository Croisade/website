/** @jsx jsx */
import map from 'lodash/map'
import { Grid, Heading, jsx } from 'theme-ui'
import { IndexPost } from '@components/IndexPost'

export default function IndexPage({ posts }) {
    return (
        <div sx={{ maxWidth: '100%', ml: 'auto', mr: 'auto' }}>
            <Heading as="h2" sx={{ mt: '5' }}>
                Recent Posts
            </Heading>
            <Grid gap={3} columns={[1, null, 1]} sx={{ mt: '3' }}>
                {map(posts, (sortedPosts) => (
                    <IndexPost key={sortedPosts.url} data={sortedPosts} />
                ))}
            </Grid>
        </div>
    )
}
