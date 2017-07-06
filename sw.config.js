/*eslint-env node*/
module.exports = {
  cacheId: 'identity',
  filename: 'sw.js',
  filePath: __dirname,
  minify: true,
  staticFileGlobs: [
    './index.html',
    './dist/**.js',
    './src/assets/css/**.css',
    './src/assets/js/**.js',
    './dist/**.gz',
    './src/assets/manifest.json',
  ],
  stripPrefixMulti: {
    './src': '',
    './': '/'
  },
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/id3ntity\.herokuapp\.com|localhost/,
      handler: 'fastest'
    }
  ]
}