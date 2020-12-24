/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'
import Head from 'next/head'
import Newsletter from './Newsletter'
import Banner from './Banner'
import RecentTen from './RecentTen'

//@todo breadcrumbs
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
                    <Banner />
                    <div sx={{ maxWidth: '70%', ml: 'auto', mr: 'auto' }}>
                        <Grid gap={2} columns={[1, null, 2, '2.5fr 1fr']}>
                            <Box>
                                <div className="content">{children}</div>
                            </Box>
                            <Box>
                                <Grid gap={2} columns={[1, null, 1]}>
                                    <Newsletter />
                                    <RecentTen />
                                </Grid>
                            </Box>
                        </Grid>
                    </div>
                </div>
            </main>
        </div>
    )
}
