/** @jsx jsx */
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { jsx } from 'theme-ui'
import BlogLayout from '../../../components/BlogLayout'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export default function IndexPage({ source, frontMatter }) {
    const components = { BlogLayout: BlogLayout({ meta: frontMatter }) }
    // const children = hydrate(source)
    // return <BlogLayout meta={frontMatter}> {children}</BlogLayout>
    return <MDXRemote {...source} components={components} />
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
    console.log(filePosts)
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
            source: mdxSource,
            frontMatter: data
        }
    }
}
