/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import Link from 'next/link'

export const SidePost = ({ post }) => {
    return (
        <Box sx={{ maxWidth: '100%' }}>
            <Link href={'/blog' + post.root + post.url}>
                <a sx={{ color: 'primary', cursor: 'pointer' }}>{post.title} </a>
            </Link>
        </Box>
    )
}

export default SidePost
