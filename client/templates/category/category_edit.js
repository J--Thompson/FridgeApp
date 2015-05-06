Template.categoryEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentCategoryId = this._id;

    var categoryProperties = {
      name: $(e.target).find('[id=category]').val(),
    }

    Category.update(currentCategoryId, {$set: categoryProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('categoryList');
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this category?")) {
      var currentCategoryId = this._id;
      Category.remove(currentCategoryId);
      Router.go('categoryList');
    }
  }
});