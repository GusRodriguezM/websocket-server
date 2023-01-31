
//HTML References
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

//Client socket
//comes from the library of the html
const socket = io();


//Listeners to events or changes
//This listener helps to know when is connected to the server
socket.on( 'connect', () => {
    console.log('Client: connected to the server');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

//This listener helps to know when is disconnected to the server
socket.on( 'disconnect', () => {
    console.log('Client: disconnected');

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});


