/** @jsxImportSource theme-ui */
import Banner from '@components/Banner'
import Footer from '@components/Footer'
import Newsletter from '@components/Newsletter'
import RecentTen from '@components/RecentTen'
import { SEO } from '@components/SEO'
import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import _ from 'lodash'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Image from 'next/image'
import path from 'path'
import { Box, Grid } from 'theme-ui'

export default function IndexPage({ source, posts }) {
    const {
        scope: { title, description, url, date, image }
    } = source

    const components = { Image }

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                {/* Open Graph Protocol */}
                <SEO title={title} description={description} url={url} image={image} date={date} />
            </Head>
            <main>
                <div sx={{ height: `calc(100vh - 120px)` }}>
                    <Banner />
                    <div sx={{ maxWidth: '70%', ml: 'auto', mr: 'auto', pr: '5' }}>
                        <Grid gap={2} columns={[1, null, 2, '2.5fr 1fr']}>
                            <Box>
                                <div className="content">
                                    <MDXRemote {...source} components={components} />
                                </div>
                            </Box>
                            <Box sx={{ ml: '4' }}>
                                <Grid gap={2} columns={[1, null, 1]}>
                                    <Newsletter />
                                    <RecentTen data={posts} />
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
    const globbedPosts = glob.sync('**/*.mdx', { cwd: postsPath })
    const paths = _.chain(globbedPosts)
        .map((paths) => fs.readFileSync(path.join(postsPath, paths), 'utf-8'))
        .map((x) => matter(x).data)
        .map((x) => ({ params: { slug: x.url } }))
        .value()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const allPostsPath = path.join(process.cwd(), 'posts')
    const globbedPosts = glob.sync('**/*.mdx', { cwd: allPostsPath })
    const posts = _.chain(globbedPosts)
        .map((paths) => fs.readFileSync(path.join(allPostsPath, paths), 'utf-8'))
        .map((x) => matter(x).data)
        .sortBy((x) => new Date(x.date))
        .reverse()
        .slice(0, 10)
        .value()

    const postsPath = path.join(process.cwd(), 'posts', 'health', params.slug + '.mdx')
    const post = fs.readFileSync(postsPath, 'utf-8')
    const { content, data } = matter(post)
    const mdxSource = await serialize(content, { scope: data })

    return {
        props: {
            source: mdxSource,
            posts
        }
    }
}
