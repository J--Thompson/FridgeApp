

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
   return [ Meteor.subscribe('posts'), Meteor.subscribe('categories')];
  }
});


//routers for the producs or items
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function() { return Posts.findOne(this.params._id); }
});

//routers for categories
Router.route('/category/create', { name: 'categorySubmit'});
Router.route('/', {name: 'categoryList'});
Router.route('/category', { name: 'categoryItem'});
Router.route('/category/:_id/editCategory', {
  name: 'categoryEdit',
  data: function() { return Category.findOne(this.params._id); }
});
Router.route('/category/:_id/addPost', {
  name: 'postSubmit',
  data: function() { return Category.findOne(this.params._id); }
});



var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});