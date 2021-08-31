const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const connection = require('./db-config')

// const path = require('path')

app.listen(port, () => console.log(`Listening on port ${port}`))
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack)
  } else {
    console.log('connected as id ' + connection.threadId)
  }
})
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'build')))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

//Get the 10 highest points registered
app.get('/api', (req, res) => {
  connection.query(
    'SELECT * FROM leaderboard ORDER BY score DESC LIMIT 10',
    (err, result) => {
      if (err) {
        res
          .status(500)
          .send('Error retrieving data from database details: ' + err)
      } else {
        res.json(result)
      }
    }
  )
})
