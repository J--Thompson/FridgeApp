Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      kind: $(e.target).find('[name=kind]').val(),
      amount: $(e.target).find('[name=amount]').val(),
      product: $(e.target).find('[name=product]').val()
    };

    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});