const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text-html')

    let path = './views/'
    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        default:
            path += '404.html'
            res.statusCode = 404
    }
})


server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})