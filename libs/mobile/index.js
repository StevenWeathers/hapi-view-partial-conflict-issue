var Handlebars = require('handlebars');

exports.register = function (server, options, next) {
	server.views({
	    engines: {
		        html: { module: Handlebars.create() }
		    },
	    relativeTo: __dirname,
	    path: './views',
	    partialsPath: './views/partials'
	});

	server.route({
        method: 'GET',
        path: '/mobile',
        handler: function (request, reply) {
            reply.view('index');
        }
    });

    next();
};

exports.register.attributes = {
    name: 'mobilePlugin',
    version: '1.0.0'
};