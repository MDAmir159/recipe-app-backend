require('dotenv').config()

const express = require('express')
const app = express()
const mongo  = require('mongodb')
const mongoose = require('mongoose')
// const apis = require('./routes/allApiRoutes')
const apiRoutes = require('./routes/allApiRoutes')
const port = process.env.PORT

mongoose.connect(process.env.DATABASE_URL_LOC)

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers.js')
// app.use('/subscriber', subscribersRouter)
// app.use(apis);
app.use('/welcome', (req, res) => {
    res.json({
        message : "ahoy"
    })
})
app.use(apiRoutes);

app.listen(port, () => console.log("Server connected"))
// https://www.w3schools.in/mongodb/data-types
// https://mongoosejs.com/docs/api/schema.html

// time and date https://stackoverflow.com/questions/10006218/which-schematype-in-mongoose-is-best-for-timestamp
