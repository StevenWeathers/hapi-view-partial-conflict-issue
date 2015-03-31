var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 3000 
});

server.register([
    {
        register: require('./libs/mobile'),
        options: {} // options for 'myplugin'
    },{
        register: require('./libs/desktop'),
        options: {} // options for 'yourplugin'
    }
], function (err) {
    if (err) {
        console.error('Failed to load a plugin:', err);
    }
});

// Start the server
server.start();