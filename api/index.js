// api/index.js
const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.json({ message: 'work please' })
})

module.exports = app
