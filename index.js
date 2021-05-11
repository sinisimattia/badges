const express = require('express');
const generator = require('node-html-to-image');
const fs = require('fs');

let template = fs.readFileSync("template.html").toString();

generator({
	output: './image.png',
	html: template
  })
.then(() => console.log('The image was created successfully!'))
  