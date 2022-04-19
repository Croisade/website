/** @jsxImportSource theme-ui */
import { Grid, Heading } from 'theme-ui'
import SidePost from '@components/SidePost'

export default function RecentTen({ data }) {
    return (
        <div sx={{ maxWidth: '100%', ml: 'auto', mr: 'auto', textAlign: 'center' }}>
            <Heading as="h2" sx={{ mt: '3', mb: '3' }}>
                Recent Posts
            </Heading>
            <Grid gap={3} columns={[1, null, 1]}>
                {data.map((sortedPosts) => (
                    <SidePost key={sortedPosts.url} post={sortedPosts} />
                ))}
            </Grid>
        </div>
    )
}
