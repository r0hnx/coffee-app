const figlet = require('figlet');
const colors = require('colors');
const pad =require('pad');
const {types} = require('./values');

module.exports = function(){
	console.log(colors.bold(figlet.textSync('Coffee Menu')));
	count = 0
	types.forEach((type) => {
		count += 1;
		console.log(`${count}. ${pad(colors.bold(type.name + ':'), 30) + colors.italic(colors.red('$' + type.price))}`);
	});
};
