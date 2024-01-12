const express = require('express')
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors({ origin: "*" }))
require("dotenv").config()
require("colors")
const port = 6010
const studentsRoutes = require('./Routes/students.js')
const mentorRoutes = require('./Routes/mentor.js')

app.get('/', (req, res) => {
  res.send('Server is Running ☢️🏃‍♂️')
})

app.use('/students', studentsRoutes)
app.use('/mentors', mentorRoutes)


app.listen(process.env.PORT || port, () => console.log(`Server is Running at port: ${port}`.yellow.underline))
