/*eslint-env node*/
/*eslint no-console: 0 */
require('babel-register')({ ignore: /\/(dist|node_modules)\//, presets: ['react']})
require('dotenv').config()

const Express = require('express')
const Path = require('path')
const fs = require('fs')
const morgan = require('morgan')
const ESgzip = require('express-static-gzip')
const createElement = require('react').createElement
const renderToString = require('react-dom/server').renderToString
const createStore = require('redux').createStore
const Provider = require('react-redux').Provider
const StaticRouter = require('react-router-dom').StaticRouter
const matchPath = require('react-router-dom').matchPath

const reducer = require('./src/js/rootReducer').default
const App = require('./src/js/app/App')

const PORT = process.env.PORT || 9000
const server = Express()

server.use(morgan(
  ':remote-addr - '+
  ':remote-user ' +
  '[:date[clf]] ' +
  ':method ' +
  ':url HTTP/ '+
  ':http-version ' +
  ':status ' +
  ':res[content-length] ' +
  ':response-time ms'
))
server.use('/assets', Express.static(Path.resolve(__dirname, 'src', 'assets')))
server.use('/dist', ESgzip(Path.join(__dirname, 'dist')))
// server.use('/assets/css/main.css', ESgzip(Path.join(__dirname, 'assets', 'css')))
server.use('/images', Express.static(Path.resolve(__dirname, 'src', 'images')))

server.use('/sw.js', function(req, res) { 
  res.sendFile(Path.join(__dirname, 'dist', 'sw.js'))
})

server.get('*', function(req, res, next) {
  if (req.headers['x-forwarded-proto'] != 'https') {
    res.redirect('https://' +req.hostname +req.url)
  } else {
    next()
  }
})

server.use('/', ssr)

server.listen(PORT, function() {
  console.log(`Server running on port ${PORT}`)
})

function ssr(req, res) {
  const routes = ['/', '/signup']
  const match = routes.reduce((acc, route) => matchPath(
    req.url, 
    route, 
    { exact: true }) || acc, null
  )
  const store = createStore(reducer)
  const context = {}
  const html = renderToString(
    createElement(Provider, store,
      createElement(StaticRouter, /*req.url, context,*/
        createElement(App)
      )
    )
  )
  const preloadedState = store.getState()

  if (!match) {
    res.status(404).send({message: `Cannot find ${req.url}`})
  } else if (context.url) {
    res.redirect(302, context.url)
  } else {
    fs.readFile('./index.html', 'utf8', function(err, file) {
      let document = file.replace(
        /<div id="root"><\/div>/, 
        `<div id="root">${html}</div>`
      )
      document = document.replace(
        /'preloadedState'/, 
        `'${JSON.stringify(preloadedState)}'`
      )
      res.send(document)
    })
  }
}
