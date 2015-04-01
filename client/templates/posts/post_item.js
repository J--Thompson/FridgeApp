Template.postItem.helpers({
  ownPost: function() {
    return this.userId === Meteor.userId();
  },
  domain: function() {
  	var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }

  
});

Template.postItem.events({
  'click .changeAmount': function(e) {
    e.preventDefault();

    var val;
    if (e.currentTarget.value === '+') {
	    val = 1;
    } else {
    	val = -1;
    }

    Posts.update(this._id, {$inc: {amount: val}}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      }
    });

    // var post = {
    //   userId: Meteor.userId(),
    //   amount: $(e.target).find('[name=amount]').val(),
    //   product: $(e.target).find('[name=product]').val(),

    // };

    // post._id = Posts.insert(post);
    // Router.go('postsList');
  }
});