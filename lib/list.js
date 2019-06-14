const figlet = require('figlet');
const colors = require('colors');
const {types} = require('./values');

module.exports = function(){
	console.log(colors.bold(figlet.textSync('COFFEE MENU')));
	console.log("\n");
	count = 0
	types.forEach((type) => {
		count += 1;
		console.log(`${count}. ${colors.bold(type.name)} ${colors.red(colors.bold(': $' + type.price))}`);
	});
};