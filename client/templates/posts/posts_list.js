var postsData = [
	{
		kind: "Meats",
		amount: "2",
		product: "Chicken Breast"
	},
	{
		kind: "Drinks",
		amount: "3" ,
		product: "Gatorade"
	},
	{
		kind: "Fruits",
		amount: "3",
		product: "Apple"
	}
];

Template.postsList.helpers({
  posts: postsData
});

