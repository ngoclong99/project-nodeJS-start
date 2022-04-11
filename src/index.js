//TODO require('express')  import 1 thư viện express
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
//TODO KHởi tại 1 function
const app = express()

// Static Files
app.use(express.static(path.join(__dirname, 'public')))
//  HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// định nghĩa run website ở cổng nào
const port = 3000

// định nghĩa route và show theo page
// render home.handlebars theo router ' / '
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
