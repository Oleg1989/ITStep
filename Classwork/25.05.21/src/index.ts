import { io } from "socket.io-client";

const WS_URL = "ws://bt-21-playground-vppfc.ondigitalocean.app/";

const socket = io(WS_URL);

socket.on('connect', () => {
    // socket.emit('revers', 'Hello')
    // socket.on('response', (str) => console.log(str))
    socket.emit('send_massage', "Oleg", "Welcom to my chat")
    socket.on('new_massage', (username, message) => console.log('New massage'))
});