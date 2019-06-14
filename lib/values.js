exports.types = [
	{name: 'Expresso  ', price: 5.99},
	{name: 'Latte     ', price: 4.25},
	{name: 'Cappuchino', price: 3.99},
	{name: 'Americano ', price: 2.99},
	{name: 'Macchiato ', price: 3.75}
];

exports.typesPlain = exports.types.map((obj) => {
	return `${obj.name} : $${obj.price}`
});

exports.sugar = [
	{quantity: 2, name:'Low'},
	{quantity: 3, name:'Normal'},
	{quantity: 5, name:'High'}
]

exports.sugarPlain = exports.sugar.map((obj) => {
	return `${obj.name} : ${obj.quantity} sugarcubes.`
});

exports.serve = [
	'Coffee Mug',
	'Cup',
	'Takeaway!'
]