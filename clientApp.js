const express = require('express')

const app = express()

// Serve static files from specified directory
app.use(express.static(__dirname))

const server = app.listen(9999, () => {
    const host = server.address().address
    const port = server.address().port

    console.log(`App is running at ${host}:${port}`)
})