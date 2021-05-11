const generator = require('node-html-to-image');
const fs = require('fs');
const server = require('express')();

const defaults = require('./defaults');


server.get('/', async function (req, res) {
	let template = fs.readFileSync("template.html").toString();

	const image = await generator({
		html: template,
		transparent: true,
		content: Object.assign(defaults, req.query)
	});

	res.writeHead(200, { 'Content-Type': 'image/png' });
 	res.end(image, 'binary');

})

server.listen(process.env.PORT || 80, () => {
	console.log("Server started.")
});
  