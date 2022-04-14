/** @jsx jsx */
import { jsx } from 'theme-ui'
import SidePost from './SidePost'
import { Grid } from 'theme-ui'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'
import slice from 'lodash/slice'
import map from 'lodash/map'

// @TODO get static paths and props for blog layout https://github.com/Hendrixer/production-grade-nextjs/blob/dev/pages/blog/%5Bslug%5D.tsx

//@todo use lodash/fp to make more readable
export default function RecentTen() {
    return (
        <div sx={{ maxWidth: '100%', ml: 'auto', mr: 'auto', textAlign: 'center' }}>
            {/* <h1>Recent Posts</h1>
            <Grid gap={3} columns={[1, null, 1]}>
                {map(sortedPost, (sortedPosts) => (
                    <SidePost key={sortedPosts.link} post={sortedPosts} />
                ))}
            </Grid> */}
        </div>
    )
}
