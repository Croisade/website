/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import Link from 'next/link'

export const SidePost = ({ post }) => {
    const {
        link,
        module: { meta }
    } = post

    return (
        <Box sx={{ maxWidth: '100%' }}>
            <Link href={'/blog' + link}>
                <a sx={{ color: 'primary', cursor: 'pointer' }}>{meta.title} </a>
            </Link>
        </Box>
    )
}

export default SidePost
