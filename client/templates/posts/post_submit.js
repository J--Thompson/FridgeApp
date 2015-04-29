Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      userId: Meteor.userId(),
      amount: parseInt($(e.target).find('[name=amount]').val()),
      product: $(e.target).find('[name=product]').val(),
      categoryId: this._id

    };

    post._id = Posts.insert(post);
    Router.go('categoryList');
  }
});