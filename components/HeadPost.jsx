import React from 'react'

export const HeadPost = ({ meta, isBlogPost }) => (
    <div>
        <h1 className={isBlogPost ? 'great-title' : null}>{meta.title}</h1>
        <div className="details">
            {isBlogPost ? null : <p>{meta.description}</p>}
            <span>{meta.date}</span>
            <span role="img" aria-label="one coffee">
                ☕ {meta.readTime + ' min read'}
            </span>
        </div>
    </div>
)

export default HeadPost
