/** @jsx jsx */
import { jsx } from 'theme-ui'
import { IndexPost } from '../../../components/IndexPost'
import { posts } from '../../../utils/getLifePosts'
import { Grid } from 'theme-ui'
import Footer from '../../../components/Footer'
import Banner from '../../../components/Banner'

export default function IndexPage() {
    return (
        <div sx={{ maxWidth: '70%', ml: 'auto', mr: 'auto' }}>
            <Banner />
            <h1>Life</h1>
            <Grid gap={3} columns={[1, null, 2]}>
                {posts.map((post) => (
                    <IndexPost key={post.link} post={post} />
                ))}
            </Grid>
            <Footer />
        </div>
    )
}
