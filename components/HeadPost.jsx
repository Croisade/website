/** @jsx jsx */
import { jsx, Text, Heading } from 'theme-ui'

export const HeadPost = ({ meta, isBlogPost }) => (
    <div>
        <Heading as="h3">{meta.title}</Heading>
        <div className="details">
            <Text sx={{ color: 'index', marginTop: '2', mb: '2' }}>{meta.description}</Text>
            <span>{meta.date}</span>
            <span role="img" aria-label="one coffee">
                ☕ {meta.readTime + ' min read'}
            </span>
        </div>
    </div>
)

export default HeadPost
