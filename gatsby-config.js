require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: "DNL | Desarrollo de Negocios Lomas",
    description:
      "Agencia mexicana de inbound marketing, te ayudamos a llegar al cliente que tú necesitas.",
    author: "@juancarloselorriaga",
    twitterUsername: "@juancarlosverri",
    image: "/logo-desarrollo-de-negocios-lomas.png",
    siteUrl: "https://dnl.netlify.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID, 
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`
  ],
}
