Template.categorySubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var category = {
      userId: Meteor.userId(),
      name: $(e.target).find('[id=category]').val(),

    };

    category._id = Category.insert(category);
    Router.go('categoryList');
  }

});