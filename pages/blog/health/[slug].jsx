/** @jsx jsx */
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { jsx, Box, Grid } from 'theme-ui'
import Head from 'next/head'
import Newsletter from '../../../components/Newsletter'
import Banner from '../../../components/Banner'
import RecentTen from '../../../components/RecentTen'
import Footer from '../../../components/Footer'
import { NextSeo } from 'next-seo'

export default function IndexPage({ source }) {
    const {
        scope: { title, description, url, date, image }
    } = source
    return (
        <div>
            <Head>
                <source name="viewport" content="width=device-width, initial-scale=1" />
                <source charSet="utf-8" />
                {/* Open Graph Protocol */}
            </Head>
            <main>
                <div sx={{ height: `calc(100vh - 120px)` }}>
                    {console.log(source)}
                    <NextSeo
                        title={title}
                        description={description}
                        author="Jamal Gardiner"
                        openGraph={{
                            site_name: 'thelifeofjamal',
                            title: title,
                            description: description,
                            images: [{ url: image }],
                            type: 'website',
                            url: url,
                            profile: { firstName: 'Jamal', lastName: 'Gardiner', gender: 'Male' },
                            article: {
                                publishedTime: new Date(date),
                                authors: ['Jamal Gardiner']
                            }
                        }}
                        twitter={{
                            handle: '@GardinerJamal',
                            site: 'thelifeofjamal',
                            title: title,
                            cardType: 'summary_large_image',
                            image: image,
                            description: description
                        }}
                    />
                    <Banner />
                    <div sx={{ maxWidth: '70%', ml: 'auto', mr: 'auto', pr: '5' }}>
                        <Grid gap={2} columns={[1, null, 2, '2.5fr 1fr']}>
                            <Box>
                                <div className="content">
                                    <MDXRemote {...source} />
                                </div>
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

export function getStaticPaths() {
    const postsPath = path.join(process.cwd(), 'posts', 'health')
    const fileNames = fs.readdirSync(postsPath)
    const filePosts = fileNames.map((name) => {
        const fullPath = path.join(process.cwd(), 'posts', 'health', name)
        const file = fs.readFileSync(fullPath, 'utf-8')
        const { data } = matter(file)
        return data
    })
    return {
        paths: filePosts.map((s) => ({ params: { slug: s.url } })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postsPath = path.join(process.cwd(), 'posts', 'health', params.slug + '.mdx')
    const post = fs.readFileSync(postsPath, 'utf-8')
    const { content, data } = matter(post)
    const mdxSource = await serialize(content, { scope: data })

    return {
        props: {
            source: mdxSource
        }
    }
}
