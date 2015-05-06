Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish ('categories', function(){
	return Category.find({
		userId: this.userId
	});
});
