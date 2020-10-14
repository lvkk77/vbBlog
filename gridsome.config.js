// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  templates: {
    New: [
      {
        path: '/new/:id',
        component: './src/templates/New.vue'
      }
    ],
    Post: [
      {
        path: '/blog/:id',
        component: './src/templates/Blog.vue'
      }
    ],
  },
  pathPrefix: process.env.NODE_ENV === 'production' ? '/gridsome-blog/' : '/',
}
