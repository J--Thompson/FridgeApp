Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      userId: Meteor.userId(),
      amount: parseInt($(e.target).find('[name=amount]').val()),
      product: $(e.target).find('[name=product]').val(),
      date: $(e.target).find('[name=date]').val()

    };

    post._id = Posts.insert(post);
    Router.go('postsList');
  }
});

Template.postSubmit.onRendered(function() {
    this.$('.datetimepicker').datetimepicker();
});