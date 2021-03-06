module.exports = {
    siteTitle: "Gatsby Material Starter", // Site title.
    siteTitleShort: "GM Starter",                                       // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "GatsbyJS Material Starter",                          // Alternative site title for SEO.
    siteLogo: "/logos/logo-1024.png",                                   // Logo used for SEO and manifest.
    siteUrl: "https://confident-davinci-d948cc.netlify.com",            // Domain of your website without pathPrefix.
    pathPrefix: "/",                                                    // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
    fixedFooter: false,                                                 // Whether the footer component is fixed, i.e. always visible
    siteDescription: "A GatsbyJS stater with Material design in mind.", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml",                                                // Path to the RSS file.
    siteFBAppID: "1825356251115265",                                    // FB Application ID for using app insights
    siteGATrackingID: "UA-47311644-4",                                  // Tracking code ID for google analytics.
    disqusShortname: "gatsby-full-stack-cms",
    // disqusShortname: "https-vagr9k-github-io-gatsby-material-starter",  // Disqus shortname used to load disqus account site.
    postDefaultCategoryID: "Tech",                                      // Default category for posts.
    dateFromFormat: "YYYY-MM-DD",                                       // Date format used in the frontmatter.
    dateFormat: "DD/MM/YYYY",                                           // Date format for display.
    userName: "Mike @ Titan Global Tech",                               // Username to display in the author segment.
    userTwitter: "",                                                    // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "Portland, Oregon",                                   // User location to display in the author segment.
    userAvatar: "https://mfiles.alphacoders.com/582/582724.jpg",        // User avatar to display in the author segment.
    userDescription:
        "Mike is a Full Stack Software Developer that specializes in " +
        "React web application development.",                           // User description to display in the author segment.

    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
        {
            label: "GitHub",
            url: "https://github.com/b1tn3r",
            iconClassName: "fa fa-github"
        },
        {
            label: "Twitter",
            url: "https://twitter.com/TitanGlobalTech",
            iconClassName: "fa fa-twitter"
        },
        {
            label: "Email",
            url: "mailto:b1tn3r@gmail.com",
            iconClassName: "fa fa-envelope"
        }
    ],
    copyright: "Copyright © 2017. Titan Global Tech, LLC." // Copyright string for the footer of the website and RSS feed.
};
