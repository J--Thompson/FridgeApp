/*var bigpostData = [
{
	title:
	product:
}
]*/

var inventory = [
	{
		category: "meat",
		quantity: 3,
		title: "chicken breast"
	},
	{
		category: "meat",
		quantity: 1,
		title: "steaks"
	},
	
	{
		category: "veggies",
		quantity: 3,
		title: "Carrots"
	},

	{
		category: "veggies",
		quantity: 3,
		title: "Tomatos"
	},
	
	{
		category: "veggies",
		quantity: 3,
		title: "Onions"
	},
	

	
];

/*var categories = [
	{name: "meat"},
	{name: "veggies"}
];*/

Template.postQuantity.helper({
posts: inventory
});