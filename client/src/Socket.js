import { io } from "socket.io-client";
let socket;
export const connectionSocket = (name)=>{
        socket = io(process.env.REACT_APP_SOCKET_ENDPOINT)
        socket.emit('setName',name)
    }
export const disconnectSocket = ()=>{
        socket && socket.disconnect();
    }
export const checkMaster = ()=>{
        socket.on('root',(data)=>{
            console.log(data)
        })
    }
