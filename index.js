const generator = require('node-html-to-image');
const fs = require('fs');
const server = require('express')();


server.get('/', async function (req, res) {
	let template = fs.readFileSync("template.html").toString();

	const image = await generator({
		html: template,
		transparent: true,
		content: {
			title: "Built with love",
			borderRadius: 20,
			backgroundImage: "https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
		}
	});

	res.writeHead(200, { 'Content-Type': 'image/png' });
 	res.end(image, 'binary');

})

server.listen(process.env.PORT || 80, () => {
	console.log("Server started.")
});
  