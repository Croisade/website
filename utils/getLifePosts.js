function importAll(r) {
    return r.keys().map((fileName) => {
        const newUrl = fileName
            .slice(0, -4)
            .substr(1)
            .replace(/\/index\.mdx$/, '')
        return {
            link: `/life${newUrl}`,
            module: r(fileName)
        }
    })
}

export const posts = importAll(require.context('../pages/blog/life', true, /\.mdx$/))
