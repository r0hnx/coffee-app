const inquirer = require('inquirer');
const colors = require('colors');
const pad = require('pad');
const values = require('../lib/values');

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

			console.log(pad(colors.grey('Coffee :'),30), ans.coffee)
			console.log(pad(colors.grey('Sugar :'),30), ans.sugar)
			console.log(pad(colors.grey('Decaf :'),30), ans.decaf)
			console.log(pad(colors.grey('Cold :'),30), ans.cold)
			console.log(pad(colors.grey('Served In :'),30), ans.serve)
			console.log(pad(colors.grey('Stirrer :'),30), ans.stirrer)
		});
}
