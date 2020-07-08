import all from './posts'

const posts = all
  .map(({ filename, metadata, html }) => {
    const slug = filename.replace(/\.md$/, '')

    const date = new Date(metadata.date)
    const newHtml = html.replace(/^\t{3}/gm, '')

    return { ...metadata, date, filename, html: newHtml, slug }
  })
  .sort((a, b) => {
    return b.date - a.date
  })

export default posts
