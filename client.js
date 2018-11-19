const choo = require('choo')
const app = choo()
var css = require('sheetify')

css('tachyons')
css('./assets/index.css')
css('./assets/webfonts.css')

app.use(require('./stores/home'))
app.route('/', require('./pages/home'))
app.route('/projects', require('./pages/projects'))
app.route('/members', require('./pages/members'))
app.route('/contact', require('./pages/contact'))
app.route('*', require('./pages/home'))

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

// Support for Server-Side Rendering
if (module.parent) {
  module.exports = app
} else {
  app.mount('body')
}
