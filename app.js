const express = require('express')
const route = require('./routes')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use('/', route)

app.listen(port, () => {
  console.log(`running on ${port} mph!`);
})