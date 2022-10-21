import io from "socket.io-client"

export const socket = io.connect('http://ec2-52-91-239-56.compute-1.amazonaws.com:3000/', { transports : ['websocket'] })
//http://172.31.80.71:3000/


