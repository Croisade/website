/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { HeadPost } from './HeadPost'

export const IndexPost = ({ post }) => {
    const {
        link,
        module: { meta }
    } = post

    return (
        <div>
            <article>
                <HeadPost meta={meta} />
                <Link href={'/blog' + link}>
                    <a sx={{ color: 'primary', cursor: 'pointer' }}>Read more... </a>
                </Link>
            </article>
        </div>
    )
}
