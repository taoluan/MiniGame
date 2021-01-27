const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require('dotenv')
const app = express()
const port = process.env.PORT || 3000
const routesAPI = require('./routes/api')
const helmet = require('helmet')
const server = require('http').Server(app);
const io = require('socket.io')(server,{
    cors: {
        origin: '*',
      }
});
dotenv.config()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(helmet())

app.use('/api',routesAPI)
const queue = []
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('setName',(name)=>{
        console.log(`${socket.id} co ten la ${name}`)
        queue.unshift({socketID: socket.id , name : name})
        console.log(queue)
    })
    if(queue.length > 0) {
        const setRoot = queue.pop()
        io.to(setRoot.socketID).emit("root", "master")
    }
    // socket.emit('postQuestion',())
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
  });

server.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}` )
})
