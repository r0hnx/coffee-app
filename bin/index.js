#!/usr/bin/env node

const program = require('commander');
const order = require('../lib/order')
const list = require('../lib/list');

program
	.command('list')
	.alias('l')
	.description('lists types of coffee available in the application')
	.action(function(){
		list();
	});

program
	.command('order')
	.alias('o')
	.description('order coffee from application')
	.action(function(){
		order();
	});

program.parse(process.argv);