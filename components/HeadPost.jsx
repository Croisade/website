/** @jsx jsx */
import { jsx, Text, Heading } from 'theme-ui'

export const HeadPost = ({ data }) => {
    return (
        <div>
            <Heading as="h3">{data.title}</Heading>
            <div className="details">
                <Text sx={{ color: 'index', marginTop: '2', mb: '2' }}>{data.description}</Text>
                <span>{data.date}</span>
                <span role="img" aria-label="one coffee">
                    ☕ {data.readTime + ' min read'}
                </span>
            </div>
        </div>
    )
}

export default HeadPost
