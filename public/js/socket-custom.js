var socket = io();

//escichar
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//enviar infomacion
socket.emit('enviarMensaje', {
    usuario: 'luis',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
})

//escuchar informacion

socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
})