/** @jsx jsx */
import { jsx, Card, Text, Heading, Divider } from 'theme-ui'
import Image from 'next/image'
import Link from 'next/link'

//@todo implement share buttons
export const BlogCard = ({ post }) => {
    const {
        link,
        module: { meta }
    } = post
    return (
        <div>
            <Card
                sx={{
                    maxWidth: 375
                }}>
                <Image
                    // src="https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/12/Hot-Chicken-07-mini.jpg?resize=585%2C390&ssl=1"
                    src={meta.image}
                    alt="picture of bread"
                    width={375}
                    height={250}
                />
                <Heading as="h3" sx={{ textAlign: 'center' }}>
                    {meta.title}
                </Heading>
                <div sx={{ mt: 1, textAlign: 'center' }}>
                    <span>{meta.date}</span>
                    <span role="img" aria-label="one coffee">
                        ☕ {meta.readTime + ' min read'}
                    </span>
                </div>
                <div sx={{ ml: 'auto', mr: 'auto' }}>
                    <Divider />
                </div>
                <Text sx={{ fontSize: 1, mt: 2 }}>{meta.description}</Text>
                <Link href={`/blog${link}`}>
                    <a sx={{ color: 'primary', cursor: 'pointer' }}>Read more... </a>
                </Link>
            </Card>
        </div>
    )
}

export default BlogCard
