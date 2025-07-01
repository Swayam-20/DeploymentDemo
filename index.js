require('dotenv').config()
const express = require('express')// yeh common js hai
// import express from 'express' // use this if using ES6 modules

const app = express() // create an instance of express app
// app have multiple methods like get, post, put, delete etc. 


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('About Page')
})
app.get('/contact',(req,res)=>{
  res.send("hello my dear ,\n how can I help u  ")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
// To run this app, use the command: npm start
