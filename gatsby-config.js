/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable quotes */
const theme = require('./src/utils/theme');

module.exports = {
  siteMetadata: {
    title: `sam yu | software engineer | music nerd | blogger`,
    author: {
      name: `Sam Yu`,
      summary: `software engineer and music nerd`,
    },
    description: `where I write about things I find interesting`,
    siteUrl: `https://samyu.io/`,
    social: {
      twitter: `sxmyu`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: ['title', 'alt'],
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              escapeCharacter: '#',
              // Select the size (available size: 16, 24, 32, 64)
              size: 24,
              styles: {
                position: 'relative',
                display: 'inline',
                top: '5px',
              },
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-156469577-1`,
        head: true,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sam yu | software engineer | blog`,
        short_name: `samyu.io`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-jss`,
      options: { theme },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
