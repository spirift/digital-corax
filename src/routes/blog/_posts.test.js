import all from './posts'
import posts from './_posts'

jest.mock('./posts', () => {
  const mockPost = {
    filename: 'test.md',
    metadata: {
      title: 'test',
      summary: 'test summary',
      date: '2020-07-01',
      slug: 'test-slug',
    },
    html: '<h1>test stuff</h1>',
  }
  const mockPost2 = {
    filename: 'test2.md',
    metadata: {
      title: 'test2',
      summary: 'test summary2',
      date: '2020-06-01',
      slug: 'test-slug2',
    },
    html: '<h1>test stuff2</h1>',
  }
  const mockPost3 = {
    filename: 'test3.md',
    metadata: {
      title: 'test3',
      summary: 'test summary3',
      date: '2020-08-01',
      slug: 'test-slug3',
    },
    html: '<h1>test stuff3</h1>',
  }
  return [mockPost, mockPost2, mockPost3]
})

describe('importing and sorting blog posts from MD', () => {
  it('adds in full javascript date objects', () => {
    expect(posts[0].date).toEqual(new Date('2020-08-01'))
  })

  it('adds in the file name to the post object', () => {
    expect(posts[0].filename).not.toEqual(undefined)
  })
  it('adds a slug to the post based on the filename', () => {
    expect(posts[0].slug).toEqual('test3')
  })

  it('sorts them into ascending order based on date', () => {
    expect(posts[0].filename).toEqual('test3.md')
    expect(posts[1].filename).toEqual('test.md')
    expect(posts[2].filename).toEqual('test2.md')
  })
})
