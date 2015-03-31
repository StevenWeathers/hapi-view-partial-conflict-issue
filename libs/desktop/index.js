var Path = require('path');
exports.register = function (server, options, next) {

    	server.views({
		    engines: {
		        html: require('handlebars')
		    },
		    relativeTo: __dirname,
		    path: './views',
		    partialsPath: './views/partials'
		});

    	server.route({
	        method: 'GET',
	        path: '/desktop',
	        handler: function (request, reply) {
	            reply.view('index');
	        }
	    });

        next();
};

exports.register.attributes = {
    name: 'desktopPlugin',
    version: '1.0.0'
};