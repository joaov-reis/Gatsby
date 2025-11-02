/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mati®`,
    siteUrl: `https://www.infnet.edu.br`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "produtos",
        path: `${__dirname}/produtos`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}