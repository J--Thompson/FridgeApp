Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentPostId = this._id;

    var postProperties = {
      amount: $(e.target).find('[name=amount]').val(),
      product: $(e.target).find('[name=product]').val(),
      date: $(e.target).find('[name=date]').val()
    }

    Posts.update(currentPostId, {$set: postProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('postsList');
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentPostId = this._id;
      Posts.remove(currentPostId);
      Router.go('postsList');
    }
  }
});

Template.postEdit.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});