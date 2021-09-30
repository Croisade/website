const withPlugins = require('next-compose-plugins')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()

const config = {
    env: process.env.env
}

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [require('remark-prism')]
    }
})

const mdx = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
    images: {
        domains: ['cdn1.thelifeofjamal.com', 'thelifeofjamal.com']
    }
})

module.exports = withPlugins([mdx, withNextEnv], config)
