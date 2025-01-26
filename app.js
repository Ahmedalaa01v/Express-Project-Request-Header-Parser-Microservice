const express = require('express')
const app = express()
const requestIp = require('request-ip');

const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
    console.log(clientIp)
    next();
};

// middleware
app.use('/index.css',express.static(__dirname + "/index.css"))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/api/whoami', (req, res)=>{
let software = req.headers['user-agent']
let language = req.headers['accept-language']
let ipAddress = req.ip
console.log(req.socket.remoteAddress )
console.log(req.ip)
console.log()

const clientIp = requestIp.getClientIp(req); 
    console.log(clientIp)

res.json({"ipaddress": clientIp,"language": language, "software": software})
})

app.listen(5000)