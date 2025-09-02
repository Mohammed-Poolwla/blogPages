self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/blogs": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/blogs.js"
    ],
    "/blogs/[slug]": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/blogs/[slug].js"
    ],
    "/cookies": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/cookies.js"
    ],
    "/disclaimer": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/disclaimer.js"
    ],
    "/privacy": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/privacy.js"
    ],
    "/terms": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/terms.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];