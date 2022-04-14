/** @jsx jsx */
import { jsx } from 'theme-ui'
import SidePost from './SidePost'
import { Grid } from 'theme-ui'

export default function RecentTen({ data }) {
    return (
        <div sx={{ maxWidth: '100%', ml: 'auto', mr: 'auto', textAlign: 'center' }}>
            <h1>Recent Posts</h1>
            <Grid gap={3} columns={[1, null, 1]}>
                {data.map((sortedPosts) => (
                    <SidePost key={sortedPosts.url} post={sortedPosts} />
                ))}
            </Grid>
        </div>
    )
}
