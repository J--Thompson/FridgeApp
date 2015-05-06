Category = new Mongo.Collection('category');
Category.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  update: function(userId, post) { 
  	return ownsDocument(userId, post); 
  },
  remove: function(userId, post) { return ownsDocument(userId, post); }
});
