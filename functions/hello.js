exports.handler = function(event, context, callback) {
	const output = {
		message: 'hello james',
		path: event.path
	};

	callback(null, {
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		statusCode: 200,
		body: JSON.stringify(output)
	});
};