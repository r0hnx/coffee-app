const inquirer = require('inquirer');
const colors = require('colors');
const pad = require('pad');
const values = require('../lib/values');
const figlet = require('figlet');

const questions = [
	{type: 'list', name:'coffee', message:'Choose your Coffee!', choices: values.typesPlain},
	{type: 'list', name:'sugar', message:'How much sugar?', choices: values.sugarPlain},
	{type: 'confirm', name:'decaf', message:'Decaf??', default: false},
	{type: 'confirm', name:'cold', message:'Cold Coffee??', default: false},
	{type: 'list', name:'serve', message:'Served In?', choices: values.serve},
	{type: 'confirm', name:'stirrer', message:'Would you like a Stirrer?', default: true}
];

module.exports = function() {
	inquirer
		.prompt(questions)
		.then((ans) => {
			console.log(colors.bold(figlet.textSync('Final Order')));

			console.log(colors.bold('#'),pad(colors.bold(colors.red('Coffee:')),30), colors.italic(ans.coffee))
			console.log(colors.bold('#'),pad(colors.bold(colors.red('Sugar:')),30), colors.italic(ans.sugar))
			console.log(colors.bold('#'),pad(colors.bold(colors.red('Decaf:')),30), colors.italic(ans.decaf))
			console.log(colors.bold('#'),pad(colors.bold(colors.red('Cold:')),30), colors.italic(ans.cold))
			console.log(colors.bold('#'),pad(colors.bold(colors.red('Served In:')),30), colors.italic(ans.serve))
			console.log(colors.bold('#'),pad(colors.bold(colors.red('Stirrer:')),30), colors.italic(ans.stirrer))
		});
}
