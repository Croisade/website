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
                    <a>Read more... </a>
                </Link>
            </article>
        </div>
    )
}
