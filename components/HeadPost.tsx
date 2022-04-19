/** @jsxImportSource theme-ui */
import { Text, Heading } from 'theme-ui'

export const HeadPost = ({ data }) => {
    return (
        <div>
            <Heading as="h3" sx={{ display: 'block', mb: '2' }}>
                {data.title}
            </Heading>
            <div className="details">
                <Text sx={{ color: 'index', mb: '2', display: 'block' }}>{data.description}</Text>
                <span>{data.date}</span>
                <span role="img" aria-label="one coffee">
                    ☕ {data.readTime + ' min read'}
                </span>
            </div>
        </div>
    )
}

export default HeadPost
