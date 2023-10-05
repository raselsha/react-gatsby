/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `React With Gatsby`,
    phone: `01737266685 `,
    email: `raselsha@gmail.com`,
    siteUrl: `http://localhost:8000/`,
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      }
    },
  ],
}
