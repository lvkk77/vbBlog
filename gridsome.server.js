// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const Mock = require('mockjs')
const Random = Mock.Random;

module.exports = function (api) {
  api.loadSource(async ({ addCollection, store }) => {
    const Gists = addCollection('Gists')

    const { data } = await axios.get('https://api.github.com/gists/391edc7de20627506f8cee6a756f8a34')

    for (let key in data.files) {
      data.title = {
        filename: data.files[key]['filename'],
        rawUrl: data.files[key]['raw_url'],
        content: data.files[key]['content']
      }
      delete data.files
    }

    Gists.addNode(data)

    const newCollect = addCollection('New')
    for (let i = 0; i < 100; i++) {
      const id = Random.guid();
      newCollect.addNode({
        id,
        date: Random.date('yyyy-MM-dd'),
        title: Random.ctitle(),
        banner: Random.image('200x100', Random.color()),
        summary: Random.csentence(),
        description: Random.cparagraph(50, 100),
      })
    }

    const socialCollect = addCollection('Social')
    for (let i = 0; i < 100; i++) {
      socialCollect.addNode({
        id: Random.guid(),
        name: Random.cname(),
        image: Random.image('200x200', Random.color()),
      })
    }

    const postCollect = addCollection('Post')
    for (let i = 0; i < 100; i++) {
      const id = Random.guid();
      postCollect.addNode({
        id,
        date: Random.date('yyyy-MM-dd'),
        title: Random.ctitle(),
        summary: Random.csentence(),
        description: Random.cparagraph(50, 100),
      })
    }

    const projectCollect = addCollection('Project')
    for (let i = 0; i < 100; i++) {
      const id = Random.guid();
      projectCollect.addNode({
        id,
        date: Random.datetime('yyyy-MM-dd HH:mm:ss'),
        title: Random.ctitle(),
        content: Random.csentence(),
        star: Random.integer(),
        view: Random.integer(),
        flow: Random.integer(),
      })
    }

  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
