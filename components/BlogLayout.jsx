/** @jsx jsx */
import { jsx } from 'theme-ui'
import Head from 'next/head'

export default function BlogLayout({ meta, children }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="Description" content={meta.description}></meta>
                <title>{meta.title + ' - The Life Of Jamal'}</title>
            </Head>
            <main>
                <div sx={{ height: `calc(100vh - 120px)` }}>
                    <div sx={{ maxWidth: '70%', ml: 'auto', mr: 'auto' }}>
                        <div className="content">{children}</div>
                    </div>
                </div>
            </main>
        </div>
    )
}
