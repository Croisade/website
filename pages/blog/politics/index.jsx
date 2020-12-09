/** @jsx jsx */
import { jsx } from 'theme-ui'
import { IndexPost } from '../../../components/IndexPost'
import { posts } from '../../../utils/getPoliticsPosts'

export default function IndexPage() {
    return (
        <div>
            {posts.map((post) => (
                <IndexPost key={post.link} post={post} />
            ))}
        </div>
    )
}
