require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Gamer - The Bot For Everyone!`,
    siteTitle: `Gamer`,
    siteHeadline: `Gamer - The Bot For Everyone!`,
    siteDescription: `The bot designed and developed to provide the best experience for game developers and gamers on Discord.`,
    siteImage: `/banner.jpg`,
    author: `@IGNSkillz4Killz`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emma`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gamer - The Bot For Everyone!`,
        short_name: `Gamer`,
        description: `The bot designed and developed to provide the best experience for game developers and gamers on Discord.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#b83280`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
