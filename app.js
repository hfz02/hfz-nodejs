const express = require('express')
const app = express()
const port = 5000

app.listen(process.env.PORT || port, () => console.log(`Server running at http://localhost:${port}`))

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname })
})

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})