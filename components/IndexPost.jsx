/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { HeadPost } from './HeadPost'

export const IndexPost = ({ data }) => {
    return (
        <div>
            <article>
                <HeadPost data={data} />
                <Link href={'/blog' + data.root + data.url}>
                    <a sx={{ color: 'primary', cursor: 'pointer' }}>Read more... </a>
                </Link>
            </article>
        </div>
    )
}
