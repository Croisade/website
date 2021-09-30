/** @jsx jsx */
import { jsx, Box, Grid } from 'theme-ui'
import Head from 'next/head'
import Newsletter from './Newsletter'
import Banner from './Banner'
import RecentTen from './RecentTen'
import Footer from './Footer'
import { NextSeo } from 'next-seo'

//todo: breadcrumbs
export default function BlogLayout({ meta, children }) {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                {/* Open Graph Protocol */}
            </Head>
            <main>
                <div sx={{ height: `calc(100vh - 120px)` }}>
                    {console.log(meta)}
                    <NextSeo
                        title={meta.title}
                        description={meta.description}
                        author="Jamal Gardiner"
                        openGraph={{
                            site_name: 'thelifeofjamal',
                            title: meta.title,
                            description: meta.description,
                            images: [{ url: meta.image }],
                            type: 'website',
                            url: meta.url,
                            profile: { firstName: 'Jamal', lastName: 'Gardiner', gender: 'Male' },
                            article: {
                                publishedTime: new Date(meta.date),
                                authors: ['Jamal Gardiner']
                            }
                        }}
                        twitter={{
                            handle: '@GardinerJamal',
                            site: 'thelifeofjamal',
                            title: meta.title,
                            cardType: 'summary_large_image',
                            image: meta.image,
                            description: meta.description
                        }}
                    />
                    <Banner />
                    <div sx={{ maxWidth: '70%', ml: 'auto', mr: 'auto', pr: '5' }}>
                        <Grid gap={2} columns={[1, null, 2, '2.5fr 1fr']}>
                            <Box>
                                <div className="content">{children}</div>
                            </Box>
                            <Box sx={{ ml: '4' }}>
                                <Grid gap={2} columns={[1, null, 1]}>
                                    <Newsletter />
                                    <RecentTen />
                                </Grid>
                            </Box>
                        </Grid>
                        <div sx={{ maxWidth: '80%', ml: 'auto', mr: 'auto' }}>
                            <Footer />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
