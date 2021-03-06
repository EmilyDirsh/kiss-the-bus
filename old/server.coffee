# Requirements
express = require 'express'
mongoose = require 'mongoose'

# Initialize app
app = express()

# Initialize DB
db = mongoose.createConnection 'localhost', 'mbtapp'

# DB connection error handling
db.on 'error', ->
  console.log 'DB connection error'

db.once 'open', ->
  console.log 'DB connection successful'
  stopSchema = new mongoose.Schema
    stopID: Number,
    lastCached: Date,
    Predictions: {}
  Stops = db.model('stops',stopSchema)
  user = new Stops({name: 'User'})
  console.log(user.name)
  
  stopSchema.methods.

app.get '/', (req, res) ->
  res.send '<h1>Hello</h1><p>Hello, app!</p>'

app.listen 3000
console.log 'Listening on port 3000'

