// npm init
// npm install express



//node ejercicio2.js para ver console.log en terminal

const express = require('express')
const app = express()
const port = 3030

app.get('/', (request, response) => {
  // response.statusCode()
  response.send('2+2=4')
})

app.listen(port, () => {
  console.log(`el servido esta en http://localhost:${port}`)
})