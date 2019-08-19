/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`, `gatsby-plugin-react-helmet`],

  siteMetadata: {
    siteTitle: `Gatsby`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`,
    twitter: "https://twitter.com",
  },
  proxy: {
    prefix: "/api",
    url: "http://127.0.0.1:7001",
  },
}
