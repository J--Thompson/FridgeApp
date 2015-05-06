Template.categoryItem.helpers ({
	ownCategory: function(){
		return this.userId === Meteor.userId();
	},
	postsInCategory: function (){
		return Posts.find({
			categoryId: this._id
		});
	}
});