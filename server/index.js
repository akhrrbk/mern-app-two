const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const postRoutes = require('./routes/posts')
const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((e) => console.log(e.message))