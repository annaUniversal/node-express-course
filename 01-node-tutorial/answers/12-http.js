const  http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('The Main page')
    } else {
    res.end(`
        <h1>Error!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href='/'>back home</a>
    `)}
})

server.listen(3000)