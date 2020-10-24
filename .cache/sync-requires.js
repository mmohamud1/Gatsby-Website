const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Mohamed/Documents/Gatsby-Website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Mohamed/Documents/Gatsby-Website/src/pages/404.js"))),
  "component---src-pages-destinations-js": hot(preferDefault(require("/Users/Mohamed/Documents/Gatsby-Website/src/pages/destinations.js"))),
  "component---src-pages-images-js": hot(preferDefault(require("/Users/Mohamed/Documents/Gatsby-Website/src/pages/Images.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Mohamed/Documents/Gatsby-Website/src/pages/index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/Mohamed/Documents/Gatsby-Website/src/pages/using-typescript.tsx")))
}

