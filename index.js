const express = require('express');
const generator = require('node-html-to-image');

generator({
	output: './image.png',
	html: '<html><body>Hello world!</body></html>'
  })
.then(() => console.log('The image was created successfully!'))
  