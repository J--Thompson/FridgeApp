Template.categoryItem.helpers ({
	postsInCategory: function (){
		return Posts.find({
			categoryId: this._id
		});
	}
});