const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})
module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
    images: {
        domains: ['cdn1.thelifeofjamal.com', 'thelifeofjamal.com']
    }
})
