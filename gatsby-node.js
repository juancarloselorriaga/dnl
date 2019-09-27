const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      areas: allContentfulAreas {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPosts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.areas.edges.forEach(({ node }) => {
    createPage({
      path: `/areas/${node.slug}`,
      component: path.resolve(
        "./src/templates/area-template/area-template.component.jsx"
      ),
      context: {
        slug: node.slug,
      },
    })
  })

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/posts/${node.slug}`,
      component: path.resolve(
        "./src/templates/blogPost-template/blogPost-template.component.jsx"
      ),
      context: {
        slug: node.slug,
      },
    })
  })
}
