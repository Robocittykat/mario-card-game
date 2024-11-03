// api/index.js
const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.json({ message: 'Goodbye from Express!' })
})

module.exports = app
