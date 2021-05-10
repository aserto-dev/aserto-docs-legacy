const compose = require('compose-function')
const { withDokz } = require('@aserto/dokz/dist/plugin')

const composed = compose(withDokz)

module.exports = composed({
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
})
