const express = require("express")
const morgan = require("morgan")
const dotenv = require('dotenv')
const app = express()
const port = process.env.PORT || 8080
const routesAPI = require('./routes/api')
const helmet = require('helmet')
const server = require('http').createServer(app);
const io = require('socket.io')(server);
dotenv.config()
app.use(morgan('dev'))
app.use(express.json())
// app.use(helmet())
// app.use( (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8100"); //The ionic server
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//  });
io.on('connection', (socket)=>{
    console.log('user conncet '+socket.id);
    socket.emit("FromAPI", response);
})
app.get('/',(req,res)=>{
    res.json({message: "Hello Mini Game"})
})
app.use('/api',routesAPI)
server.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}` )
})

