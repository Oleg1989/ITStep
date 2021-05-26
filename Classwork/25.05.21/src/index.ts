import { io } from "socket.io-client";

const WS_URL = "ws://bt-21-playground-vppfc.ondigitalocean.app/";

const socket = io(WS_URL);

socket.on('connect', () => {
    //console.log(socket.id);
    // socket.emit('reverse', 'Hello')
    // socket.on('response', (str) => console.log(str))
    //socket.emit('send_massage', "Oleg", "Welcom to my chat")
    // socket.on('new_massage', (username, message) => console.log(`New massage from ${username} -> ${message}`))
    let name = document.getElementById('name');
    let message = document.getElementById('massege');
    let screen = document.getElementById('screen');
    const form = document.getElementById('form-massege');

    if (form) {
        form.addEventListener('click', (event: Event) => {
            event.preventDefault();
            if ((event.target as HTMLElement).id) {
                if ((event.target as HTMLElement).id === 'send') {
                    socket.emit('send_massage', (<HTMLInputElement>name).value, (<HTMLInputElement>message).value, socket.id);
                    (<HTMLInputElement>message).value = '';
                }
            }
        });
    }
    socket.on('new_massage', (username, message, userId) => {
        console.log(message);
        if (screen) {
            let divMassege = document.createElement('div');
            divMassege.style.margin = '5px';

            let nameSpan = document.createElement('span');
            nameSpan.textContent = `${username}:`;
            nameSpan.style.color = 'red';
            nameSpan.style.fontWeight = 'bolder';

            let massegeSpan = document.createElement('span');
            massegeSpan.textContent = ` ${message}`;

            divMassege.append(nameSpan, massegeSpan);

            screen.append(divMassege);
        } else {
            console.log('Error');
        }
    });

});

const addData = (username: string, massege: string) => {
    let div = document.createElement('div');
    div.style.margin = '5px';
    let nameSpan = document.createElement('span');
    nameSpan.textContent = `${username}:`;
    nameSpan.style.color = 'red';
    nameSpan.style.fontWeight = 'bolder';

    let massegeSpan = document.createElement('span');
    massegeSpan.textContent = ` ${massege}`;

    div.append(nameSpan, massegeSpan);
    console.log(div);

    return div;
}