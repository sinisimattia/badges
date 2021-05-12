const generator = require('node-html-to-image');
const fs = require('fs');
const server = require('express')();

server.get('/', async function (req, res) {
	let template = fs.readFileSync("template.html").toString();
	let content = Object.assign(req.query);

	const image = await generator({
		html: template,
		transparent: true,
		puppeteerArgs: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
		],
		content
	});

	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
	res.writeHead(200, { 'Content-Type': 'image/png' });
 	res.end(image, 'binary');

})

server.listen(process.env.PORT || 80, () => {
	console.log("Server started.")
});
  